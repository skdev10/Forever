
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Mock authentication - In a real app, you would connect this to Supabase
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        // Admin login
        localStorage.setItem('user', JSON.stringify({ id: '1', name: 'Admin User', email, role: 'admin' }));
        toast({
          title: "Login successful",
          description: "Welcome back, Admin!",
        });
        navigate('/admin');
      } else if (email === 'user@example.com' && password === 'user123') {
        // Regular user login
        localStorage.setItem('user', JSON.stringify({ id: '2', name: 'Regular User', email, role: 'user' }));
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        navigate('/account');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Try user@example.com / user123 or admin@example.com / admin123",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-16">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Link to="/register" className="text-sm text-gold hover:underline">
                Create account
              </Link>
              <Link to="/forgot-password" className="text-sm text-gold hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Test credentials:
            </p>
            <p className="text-xs text-gray-500 mt-1">
              User: user@example.com / user123
            </p>
            <p className="text-xs text-gray-500">
              Admin: admin@example.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
