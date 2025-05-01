
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { User, UserCheck, UserPlus } from 'lucide-react';

// Form validation schema
const authFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

type AuthFormValues = z.infer<typeof authFormSchema>;

interface AuthFormProps {
  type: 'signin' | 'signup';
  className?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  
  // Handle form submission
  async function onSubmit(data: AuthFormValues) {
    setIsLoading(true);
    
    try {
      // In a real app, this would connect to an authentication service
      console.log('Auth data:', data);
      
      // Mock successful authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success(`${type === 'signin' ? 'Sign in' : 'Sign up'} successful!`);
      
      // Redirect based on type
      if (data.email.includes('municipality') || data.email.includes('admin')) {
        navigate('/municipality');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error(`Authentication failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {type === 'signin' ? (
            <>
              <UserCheck className="h-5 w-5 text-foliage-dark" />
              <span>Sign In</span>
            </>
          ) : (
            <>
              <UserPlus className="h-5 w-5 text-foliage-dark" />
              <span>Create an Account</span>
            </>
          )}
        </CardTitle>
        <CardDescription>
          {type === 'signin' 
            ? "Sign in to access your account and contribute to a cleaner community." 
            : "Join SwachhPath and help make our communities cleaner and greener."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange} 
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium leading-none cursor-pointer">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-pulse">Processing</span>
                </span>
              ) : type === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-gray-500 text-center">
          {type === 'signin' ? (
            <div>
              Don't have an account?{' '}
              <Button variant="link" className="p-0" onClick={() => navigate('/signup')}>
                Sign up
              </Button>
            </div>
          ) : (
            <div>
              Already have an account?{' '}
              <Button variant="link" className="p-0" onClick={() => navigate('/signin')}>
                Sign in
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
