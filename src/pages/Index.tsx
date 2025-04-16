import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Brain, ChevronRight, BarChart3, Clock, Zap, Shield, Code, Repeat, Sparkles, Binary, Cpu, Atom, Database, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import FeatureCard from "@/components/FeatureCard";
import PricingToggle from "@/components/PricingToggle";
import PricingCard from "@/components/PricingCard";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import DashboardMockup from "@/components/DashboardMockup";
import { MotionButton } from "@/components/MotionButton";
import { useState } from "react";
import { toast } from "sonner";
import GoogleMap from "@/components/GoogleMap";

const Index = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePricingToggle = (yearly: boolean) => {
    setIsYearly(yearly);
  };

  const handleWatchDemo = () => {
    toast.success("Loading demo environment...");
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  const plans = [
    {
      title: "Basic",
      description: "Essential features for small projects",
      price: {
        monthly: "$9",
        yearly: "$7"
      },
      features: [
        { text: "AI-powered automation", included: true },
        { text: "5 team members", included: true },
        { text: "5GB cloud storage", included: true },
        { text: "Basic analytics", included: true },
        { text: "24-hour support", included: false },
        { text: "Custom integrations", included: false },
        { text: "Advanced security", included: false }
      ],
      accentColor: "neon-blue",
      index: 0
    },
    {
      title: "Pro",
      description: "Perfect for growing teams",
      price: {
        monthly: "$29",
        yearly: "$23"
      },
      features: [
        { text: "AI-powered automation", included: true },
        { text: "15 team members", included: true },
        { text: "50GB cloud storage", included: true },
        { text: "Advanced analytics", included: true },
        { text: "24-hour support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced security", included: false }
      ],
      isPopular: true,
      accentColor: "neon-purple",
      index: 1
    },
    {
      title: "Elite",
      description: "For enterprise-grade needs",
      price: {
        monthly: "$79",
        yearly: "$63"
      },
      features: [
        { text: "AI-powered automation", included: true },
        { text: "Unlimited team members", included: true },
        { text: "500GB cloud storage", included: true },
        { text: "Enterprise analytics", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced security", included: true }
      ],
      accentColor: "neon-green",
      index: 2
    }
  ];

  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get data-driven insights and recommendations powered by our neural network algorithm.",
      icon: Brain,
      delay: 0.1
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your performance metrics and KPIs with real-time dashboards and reports.",
      icon: BarChart3,
      delay: 0.2
    },
    {
      title: "Time Optimization",
      description: "Save hours each week with automated workflows and intelligent task prioritization.",
      icon: Clock,
      delay: 0.3
    },
    {
      title: "Lightning Fast",
      description: "Experience sub-second response times with our optimized cloud infrastructure.",
      icon: Zap,
      delay: 0.4
    },
    {
      title: "Enterprise Security",
      description: "Rest easy with SOC2, GDPR, and HIPAA compliant infrastructure and processes.",
      icon: Shield,
      delay: 0.5
    },
    {
      title: "Developer API",
      description: "Extend functionality with our comprehensive API and webhook integrations.",
      icon: Code,
      delay: 0.6
    }
  ];

  return (
    <>
      <div
        className="min-h-screen bg-background bg-gradient-mesh"
        style={{
          backgroundImage:
            "radial-gradient(at 40% 20%, hsla(253, 100%, 93%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(225, 100%, 86%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(339, 100%, 84%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(197, 100%, 84%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(271, 100%, 77%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(240, 100%, 70%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 0.1) 0px, transparent 50%)",
        }}
      >
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-32 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <span className="mr-1.5">✨</span> The Future of AI Automation
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Supercharge Your <AnimatedText text="Workflow" className="text-4xl md:text-5xl lg:text-6xl font-bold inline" gradient letterAnimation />
                <span className="text-gradient"> With AI</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Our neural network algorithm learns from your team's workflow and automates repetitive tasks, giving you more time to focus on what matters.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/signup">
                  <MotionButton 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue neon-glow relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-white/20"
                      initial={{ x: "-100%", opacity: 0.5 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">
                      Get Started
                      <ChevronRight className="h-4 w-4 ml-1 inline-block" />
                    </span>
                  </MotionButton>
                </Link>
                <MotionButton 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleWatchDemo}
                >
                  <motion.span
                    className="absolute inset-0 w-full h-full bg-primary/10"
                    initial={{ scale: 0, borderRadius: "100%" }}
                    whileHover={{ scale: 2, borderRadius: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">
                    Watch Demo
                    <motion.span
                      className="ml-2 bg-secondary p-1 rounded-full inline-flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                        x: [0, 3, 0, -3, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </span>
                </MotionButton>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center gap-3"
              >
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i}.jpg`}
                      alt="User"
                      className={`w-8 h-8 rounded-full border-2 border-background ${i > 1 ? '-ml-3' : ''}`}
                      whileHover={{ scale: 1.15, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Trusted by </span>
                  <motion.span 
                    className="font-medium"
                    animate={{ color: ["#8B5CF6", "#3B82F6", "#8B5CF6"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    2,500+ teams
                  </motion.span>
                </div>
              </motion.div>
            </div>
            
            <DashboardMockup />
          </div>
        </section>
      </div>

      {/* Features Section */}
      <AnimatedSection className="container py-24" id="features">
        <div className="text-center mb-16">
          <AnimatedText text="Features" className="text-neon-purple font-medium mb-2" />
          <AnimatedText text="Everything you need for maximum productivity" className="text-3xl font-bold mb-4" delay={0.1} />
          <AnimatedText 
            text="Our AI-powered platform helps you automate repetitive tasks, analyze data, and make better decisions." 
            className="text-muted-foreground max-w-2xl mx-auto"
            delay={0.2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard 
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <section className="container py-24 relative" id="pricing">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="text-center mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neon-purple font-medium mb-2"
            >
              Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold mb-4"
            >
              Choose the perfect plan for your needs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              All plans include a 14-day free trial. No credit card required.
            </motion.p>
          </div>
          
          <PricingToggle onToggle={handlePricingToggle} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {plans.map((plan, i) => (
              <PricingCard
                key={i}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                isYearly={isYearly}
                features={plan.features}
                isPopular={plan.isPopular}
                accentColor={plan.accentColor}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <Faq />
      
      {/* Contact Section with Map */}
      <AnimatedSection className="container py-24" id="contact-section">
        <div className="text-center mb-16">
          <AnimatedText text="Contact Us" className="text-neon-purple font-medium mb-2" />
          <AnimatedText text="Get in touch with our team" className="text-3xl font-bold mb-4" delay={0.1} />
          <AnimatedText 
            text="Have questions about our AI platform? Our team is ready to help you." 
            className="text-muted-foreground max-w-2xl mx-auto"
            delay={0.2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
            
            {/* Google Map */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden mb-6">
              <GoogleMap />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-muted-foreground">contact@neurosyncai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">123 AI Boulevard, Tech District<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                ></textarea>
              </div>
              
              <MotionButton 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </MotionButton>
            </form>
          </motion.div>
        </div>
      </AnimatedSection>
      
      {/* CTA Section */}
      <section className="container py-24">
        <div className="glass-card relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-blue/20 rounded-full blur-3xl" />
          
          <div className="relative p-12 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to transform your workflow?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Join thousands of teams who are already using NeuroSyncAI to automate their work and boost productivity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue neon-glow">
                  Start Your Free Trial
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
