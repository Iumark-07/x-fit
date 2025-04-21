
import React, { useState, useEffect } from 'react';
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
  user_name?: string;
}

const CommunityChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { user, profile } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const channel = supabase
      .channel('public:messages')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'messages' 
      }, payload => {
        setMessages(prev => [...prev, payload.new as Message]);
      })
      .subscribe();

    fetchMessages();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch messages",
      });
      return;
    }

    // Fetch names for messages
    if (data && data.length > 0) {
      // Get unique user_ids
      const userIds = [...new Set(data.map(m => m.user_id))];
      const { data: profilesMap } = await supabase
        .from('profiles')
        .select('id, name')
        .in('id', userIds);

      // Map id to name
      const idToName: Record<string, string> = {};
      profilesMap?.forEach((prof: any) => {
        idToName[prof.id] = prof.name;
      });

      const msgsWithNames = data.reverse().map(msg => ({
        ...msg,
        user_name: idToName[msg.user_id] || msg.user_id
      }));
      setMessages(msgsWithNames);
    } else {
      setMessages([]);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user?.id) return;

    const { error } = await supabase
      .from('messages')
      .insert([
        {
          content: newMessage,
          user_id: user.id,
        }
      ]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message",
      });
      return;
    }

    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[600px] bg-background border rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.user_id === user?.id ? 'items-end' : 'items-start'}`}
          >
            <div className={`max-w-[70%] rounded-lg p-3 ${message.user_id === user?.id ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <p className="text-sm font-medium mb-1">{message.user_name || 'Anonymous'}</p>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            disabled={!user}
          />
          <Button type="submit" disabled={!user}>Send</Button>
        </div>
      </form>
    </div>
  );
};

export default CommunityChat;
