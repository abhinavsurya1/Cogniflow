
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, DollarSign, FileText, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]" />
              <div className="absolute inset-1 rounded-full bg-background" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] opacity-80" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Cogni<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">flow</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> Features
            </a>
            <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <DollarSign className="h-4 w-4" /> Pricing
            </a>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <FileText className="h-4 w-4" /> Blog
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Phone className="h-4 w-4" /> Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" className="text-sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="text-sm bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90">
                Sign Up
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
