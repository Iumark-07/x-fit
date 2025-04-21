
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const AuthModal = ({ isOpen, onClose, onSuccess }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();

  // If user is logged in, close modal auto
  React.useEffect(() => {
    if (user) onClose();
  }, [user, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
        toast({
          title: "Welcome back!",
          description: "You've been logged in successfully.",
        });
        onSuccess?.();
        onClose();
      } else {
        await signUp(email, password, name);
        setShowVerification(true);
      }
    } catch (error: any) {
      // Handle specific errors with more helpful messages
      if (error.message.includes("email not confirmed")) {
        toast({
          variant: "destructive",
          title: "Email not verified",
          description: "Please check your email and verify your account before signing in.",
        });
        setShowVerification(true);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {showVerification ? 'Verify Your Email' : (isLogin ? 'Welcome Back' : 'Create Account')}
          </DialogTitle>
          {showVerification && (
            <DialogDescription className="text-center">
              We've sent a verification link to your email address
            </DialogDescription>
          )}
        </DialogHeader>
        
        {showVerification ? (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Please check your email and click on the verification link before signing in.
                Once verified, you can log in with your credentials.
              </AlertDescription>
            </Alert>
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-500">
                Didn't receive an email? Check your spam folder or try again.
              </p>
              <Button 
                onClick={() => {
                  setShowVerification(false);
                  setIsLogin(true);
                }}
                className="w-full"
              >
                Return to Login
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  minLength={2}
                  maxLength={50}
                />
              </div>
            )}
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
        )}
        
        {!showVerification && (
          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-500 hover:text-gray-700"
              type="button"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
