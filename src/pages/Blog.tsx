
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";
import { Book, Clock, User, Tag, ArrowLeft } from "lucide-react";
import { MotionButton } from "@/components/MotionButton";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "AI Automation: The Future of Work",
      excerpt: "How neural networks are changing the way we approach everyday tasks.",
      author: "Alex Johnson",
      date: "April 10, 2025",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"

    },
    {
      id: 2,
      title: "Optimizing Team Productivity with Cogniflow",
      excerpt: "Case studies showing 45% improvement in task completion time.",
      author: "Samantha Lee",
      date: "April 5, 2025",
      category: "Productivity",
      imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Ethics of AI Decision Making",
      excerpt: "Exploring the boundaries and responsibilities of AI-driven automation.",
      author: "Michael Chen",
      date: "March 28, 2025",
      category: "Ethics",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop"
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
        
        <AnimatedText 
          text="Blog" 
          className="text-4xl md:text-5xl font-bold mb-2" 
        />
        <AnimatedText 
          text="Latest insights on AI automation and productivity" 
          className="text-xl text-muted-foreground mb-12" 
          delay={0.1}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="flex items-center mr-4">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center mr-4">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <MotionButton 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0"
                    whileHover={{ x: 5 }}
                  >
                    Read More →
                  </MotionButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
