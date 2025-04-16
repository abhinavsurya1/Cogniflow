
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";
import { MotionButton } from "@/components/MotionButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import LeafletMap from "@/components/LeafletMap";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Contact information items
  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "support@cogniflow.com",
      href: "mailto:support@cogniflow.com",
      color: "from-neon-blue to-neon-purple",
    },
    {
      id: 2,
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      description: "123 Innovation Drive, San Francisco, CA 94107",
      href: "https://maps.google.com",
      color: "from-neon-green to-neon-blue",
    },
    {
      id: 3,
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-neon-purple to-neon-pink",
    },
    {
      id: 4,
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Available 24/7",
      href: "#",
      color: "from-neon-pink to-neon-blue",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container pt-32 pb-20">
        <Link to="/">
          <MotionButton 
            variant="ghost" 
            className="mb-8"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </MotionButton>
        </Link>
        
        <div className="text-center mb-12">
          <AnimatedText 
            text="Get in Touch" 
            className="text-4xl md:text-5xl font-bold mb-2" 
          />
          <AnimatedText 
            text="We're here to help with any questions about our products and services" 
            className="text-xl text-muted-foreground max-w-2xl mx-auto" 
            delay={0.1}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                />
              </div>
              <MotionButton 
                gradient 
                glint 
                iconAnimate
                className="w-full mt-4"
                type="submit"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </MotionButton>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, i) => (
              <motion.a
                href={item.href}
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className={`p-4 rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 rounded-lg overflow-hidden border border-border"
          style={{ height: "500px" }}
        >
          <LeafletMap height="500px" />
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
