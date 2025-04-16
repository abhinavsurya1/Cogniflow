import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]" />
                <div className="absolute inset-1 rounded-full bg-background" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] opacity-80" />
              </div>
              <span className="text-xl font-bold">
                Cogni<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">flow</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Revolutionize your workflow with AI-powered insights and automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Cogniflow. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
