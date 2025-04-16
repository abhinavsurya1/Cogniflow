
import { Bell } from "lucide-react";
import { motion } from "framer-motion";

const Notifications = () => {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Notifications</h1>
        </div>

        <div className="glass-card p-6">
          <div className="space-y-4">
            {[
              { title: "New feature available", time: "2 mins ago", unread: true },
              { title: "System update completed", time: "1 hour ago", unread: true },
              { title: "Weekly report ready", time: "3 hours ago", unread: false },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 rounded-lg border ${
                  item.unread 
                    ? "bg-primary/10 border-primary/20" 
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {item.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Notifications;
