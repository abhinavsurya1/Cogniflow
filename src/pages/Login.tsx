import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, ArrowRight, Github, Twitter } from "lucide-react";
import { MotionButton } from "@/components/MotionButton";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login functionality
    toast({
      title: "Login Successful",
      description: "Welcome back to Cogniflow!",
      duration: 3000,
    });
    // Would normally redirect to dashboard here
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-mesh">
      <Navbar />
      
      <div className="container flex items-center justify-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-border/40 shadow-xl backdrop-blur-sm bg-card/70">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
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
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <MotionButton 
                  type="submit" 
                  gradient 
                  glint 
                  iconAnimate
                  className="w-full"
                >
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4" />
                </MotionButton>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <MotionButton 
                  variant="outline" 
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center justify-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span>Github</span>
                </MotionButton>
                <MotionButton 
                  variant="outline" 
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center justify-center"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  <span>Twitter</span>
                </MotionButton>
              </div>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground mx-auto">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
