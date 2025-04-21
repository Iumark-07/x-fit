
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  user_id: string;
  content: string;
  created_at: string;
  user_email: string;
  user_name?: string;
}

const CommunityChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subscribe to real-time message updates
    const channel = supabase
      .channel('public:messages')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'messages' 
      }, payload => {
        const newMsg = payload.new as Message;
        // Add user name to the new message
        if (profile && newMsg.user_id === user?.id) {
          newMsg.user_name = profile.name;
        }
        setMessages(prev => [...prev, newMsg]);
        
        // Scroll to bottom on new message
        setTimeout(() => {
          scrollToBottom();
        }, 100);
      })
      .subscribe();

    fetchMessages();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(50);

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch messages",
        });
        return;
      }

      if (data && data.length > 0) {
        // Get unique user IDs from messages
        const userIds = [...new Set(data.map(m => m.user_id))];
        
        // Fetch user profiles for these IDs
        const { data: profilesData } = await supabase
          .from('profiles')
          .select('id, name')
          .in('id', userIds);

        // Create a map of user IDs to names
        const idToName: Record<string, string> = {};
        if (profilesData) {
          profilesData.forEach((prof: any) => {
            idToName[prof.id] = prof.name;
          });
        }

        // Add names to messages
        const msgsWithNames = data.map(msg => ({
          ...msg,
          user_name: idToName[msg.user_id] || 'Anonymous'
        }));
        
        setMessages(msgsWithNames);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user?.id || !user.email) return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          content: newMessage,
          user_id: user.id,
          user_email: user.email
        });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send message: " + error.message,
        });
        return;
      }

      setNewMessage('');
    } catch (err) {
      console.error("Error sending message:", err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    }
  };

  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop')", 
          filter: "blur(8px) brightness(0.3)",
          transform: "scale(1.1)" 
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col h-full bg-xfit-black/40 backdrop-blur-sm border border-white/10 rounded-lg">
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-pulse text-white">Loading messages...</div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-white/70 italic">No messages yet. Be the first to say hello!</p>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex flex-col ${message.user_id === user?.id ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-lg p-3 ${
                      message.user_id === user?.id 
                        ? 'bg-xfit-cyan text-xfit-black' 
                        : 'bg-white/10 text-white'
                    }`}>
                      <p className="text-sm font-medium mb-1">{message.user_name || 'Anonymous'}</p>
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        )}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              disabled={!user}
            />
            <Button 
              type="submit" 
              disabled={!user || !newMessage.trim()} 
              className="bg-xfit-cyan text-xfit-black hover:bg-xfit-cyan/80"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityChat;
