
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  // Fetch profile for logged in user
  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, name')
      .eq('id', userId)
      .maybeSingle();
    
    if (!error && data) {
      setProfile(data as Profile);
    } else {
      setProfile(null);
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) fetchProfile(session.user.id);
        else setProfile(null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (data.user) await fetchProfile(data.user.id);
  };

  const signUp = async (email: string, password: string, name: string) => {
    const { error, data } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    
    if (data.user) {
      const { error: profileErr } = await supabase
        .from('profiles')
        .insert({ 
          id: data.user.id, 
          name: name 
        });
        
      if (profileErr) {
        console.error('Error creating profile:', profileErr);
        throw profileErr;
      }
      
      await fetchProfile(data.user.id);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, profile, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
