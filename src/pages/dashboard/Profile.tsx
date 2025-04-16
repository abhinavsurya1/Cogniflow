
import { User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Profile</h1>
        </div>

        <div className="glass-card p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-primary-foreground mb-4" />
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Full Name", value: "John Doe" },
              { label: "Email", value: "john.doe@example.com" },
              { label: "Role", value: "Administrator" },
              { label: "Member Since", value: "January 2024" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-sm text-muted-foreground w-32">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
