import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Calendar, BarChart3, Bell, Settings, ChevronRight } from "lucide-react";
import CollapsibleSidebar from "@/components/CollapsibleSidebar";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      title: "AI Tasks Automated",
      value: "42",
      change: "+12% from last month",
      positive: true
    },
    {
      title: "Time Saved",
      value: "18h",
      change: "+5h from last month",
      positive: true
    },
    {
      title: "Team Activity",
      value: "86%",
      change: "-2% from last month",
      positive: false
    },
    {
      title: "Storage Used",
      value: "24GB",
      change: "+4GB from last month",
      positive: false
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-gradient-mesh">
      <div className="flex">
        <CollapsibleSidebar />
        
        <div className="flex-1 p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">Welcome back, User!</h1>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                New Project
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="glass-card p-6"
                >
                  <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className={`text-xs ${stat.positive ? "text-green-500" : "text-red-400"}`}>
                      {stat.change}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6 md:p-8 mb-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-medium mb-2">Your Pro Plan</h2>
                  <p className="text-muted-foreground">
                    You're currently on the Pro Plan with 14 days left in your trial.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="border-primary/50 hover:border-primary text-primary">
                    Manage Plan
                  </Button>
                  <Link to="/#pricing">
                    <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90">
                      Upgrade to Elite
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card p-6 lg:col-span-2"
              >
                <h3 className="text-lg font-medium mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Activity {i}</p>
                        <p className="text-xs text-muted-foreground">Processed by Cogniflow</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {i}h ago
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="ghost" className="text-sm text-muted-foreground">
                    View All Activity
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-medium mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-white/10 hover:bg-white/5">
                    <Calendar className="h-6 w-6 mb-1" />
                    <span className="text-xs">New Task</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-white/10 hover:bg-white/5">
                    <BarChart3 className="h-6 w-6 mb-1" />
                    <span className="text-xs">Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-white/10 hover:bg-white/5">
                    <Bell className="h-6 w-6 mb-1" />
                    <span className="text-xs">Alerts</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-white/10 hover:bg-white/5">
                    <Settings className="h-6 w-6 mb-1" />
                    <span className="text-xs">Settings</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
