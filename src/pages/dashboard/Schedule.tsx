
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Schedule = () => {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Schedule</h1>
        </div>

        <div className="glass-card p-6">
          <div className="grid gap-4">
            {[
              { time: "09:00 AM", event: "Team Standup", status: "Upcoming" },
              { time: "11:00 AM", event: "Client Meeting", status: "Confirmed" },
              { time: "02:00 PM", event: "Project Review", status: "Pending" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-sm text-primary">{item.time}</div>
                  <div className="text-sm font-medium">{item.event}</div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                  {item.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
