
import { Settings as SettingsIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <SettingsIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        </div>

        <div className="glass-card p-6">
          <div className="space-y-6">
            {[
              { category: "Notifications", settings: [
                { name: "Email Notifications", enabled: true },
                { name: "Push Notifications", enabled: false },
                { name: "Weekly Digest", enabled: true },
              ]},
              { category: "Privacy", settings: [
                { name: "Profile Visibility", enabled: true },
                { name: "Activity Status", enabled: true },
              ]},
              { category: "System", settings: [
                { name: "Dark Mode", enabled: true },
                { name: "Auto Updates", enabled: false },
              ]},
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-semibold">{section.category}</h2>
                <div className="space-y-2">
                  {section.settings.map((setting, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="text-sm">{setting.name}</div>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
