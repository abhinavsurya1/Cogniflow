
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Check, ChevronRight, Eye, EyeOff } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: string;
  cycle: 'monthly' | 'yearly';
  features: string[];
}

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  // For demo purposes, simulate a selected plan
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    id: "pro",
    name: "Pro",
    price: "$29",
    cycle: "monthly",
    features: [
      "AI-powered automation",
      "15 team members",
      "50GB cloud storage",
      "Advanced analytics",
      "24-hour support",
      "Custom integrations"
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Try to get plan from URL params or localStorage for demo
    const searchParams = new URLSearchParams(window.location.search);
    const planFromUrl = searchParams.get('plan');
    
    if (planFromUrl) {
      // In a real app, we would fetch this plan's details
      // For now, just use demo data based on the plan name
      if (planFromUrl === "basic") {
        setSelectedPlan({
          id: "basic",
          name: "Basic",
          price: "$9",
          cycle: "monthly",
          features: [
            "AI-powered automation",
            "5 team members",
            "5GB cloud storage",
            "Basic analytics"
          ]
        });
      } else if (planFromUrl === "elite") {
        setSelectedPlan({
          id: "elite",
          name: "Elite",
          price: "$79",
          cycle: "monthly",
          features: [
            "AI-powered automation",
            "Unlimited team members",
            "500GB cloud storage",
            "Enterprise analytics",
            "Priority 24/7 support",
            "Custom integrations",
            "Advanced security"
          ]
        });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate inputs for demo
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API request delay
    setTimeout(() => {
      // For demo, just redirect to dashboard
      toast({
        title: "Success!",
        description: "Your account has been created.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background bg-gradient-mesh">
      {/* Back button for mobile */}
      <div className="block md:hidden p-4">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
      
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-20">
        <Link to="/" className="hidden md:flex items-center gap-2 mb-12">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-8">Enter your details to get started with NeuroSyncAI</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 glass border-white/10"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 glass border-white/10"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
                  className="h-12 glass border-white/10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">Password must be at least 6 characters</p>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue neon-glow h-12"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signup" className="text-neon-purple hover:text-neon-blue transition-colors">
                Sign in instead
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
      
      {/* Right side - Plan Summary */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-black/50 to-black/70 p-6 md:p-12 lg:p-20 flex items-center">
        <motion.div 
          className="glass-card w-full max-w-md mx-auto p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-medium mb-6">Your Plan Summary</h2>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
              <p className="text-sm text-muted-foreground">
                {selectedPlan.cycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{selectedPlan.price}</p>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 mb-6">
            <h4 className="text-sm font-medium mb-4">What's included:</h4>
            <ul className="space-y-3">
              {selectedPlan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-neon-purple">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm">Subtotal</span>
              <span>{selectedPlan.price}/mo</span>
            </div>
            
            <div className="flex items-start justify-between text-muted-foreground mb-6">
              <span className="text-sm">Tax</span>
              <span>$0.00</span>
            </div>
            
            <div className="flex items-start justify-between font-bold">
              <span>Total</span>
              <span>{selectedPlan.price}/mo</span>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground">
            Your subscription begins today. You won't be charged until your 14-day free trial ends.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
