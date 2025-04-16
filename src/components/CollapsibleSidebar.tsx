import { Link, useLocation } from "react-router-dom";
import { BarChart3, Calendar, Bell, User, Settings, ArrowLeft, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CollapsibleSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`h-screen sticky top-0 bg-black/40 glass border-r border-white/10 flex flex-col ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}
    >
      <div className="p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]" />
            <div className="absolute inset-1 rounded-full bg-background" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] opacity-80" />
          </div>
          {!collapsed && (
            <span className="text-xl font-bold tracking-tight">
              Cogni<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">flow</span>
            </span>
          )}
        </Link>
        <button
          className="ml-2 p-1 rounded hover:bg-white/10 focus:outline-none"
          onClick={() => setCollapsed((c) => !c)}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-8 flex-1">
        <nav className="space-y-2 px-2">
          <SidebarLink to="/dashboard" icon={<BarChart3 className="h-5 w-5" />} collapsed={collapsed} active={location.pathname === "/dashboard"}>Dashboard</SidebarLink>
          <SidebarLink to="/dashboard/schedule" icon={<Calendar className="h-5 w-5" />} collapsed={collapsed} active={location.pathname === "/dashboard/schedule"}>Schedule</SidebarLink>
          <SidebarLink to="/dashboard/notifications" icon={<Bell className="h-5 w-5" />} collapsed={collapsed} active={location.pathname === "/dashboard/notifications"}>Notifications</SidebarLink>
          <SidebarLink to="/dashboard/profile" icon={<User className="h-5 w-5" />} collapsed={collapsed} active={location.pathname === "/dashboard/profile"}>Profile</SidebarLink>
          <SidebarLink to="/dashboard/settings" icon={<Settings className="h-5 w-5" />} collapsed={collapsed} active={location.pathname === "/dashboard/settings"}>Settings</SidebarLink>
        </nav>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        {!collapsed && (
          <Link to="/" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function SidebarLink({ to, icon, children, collapsed, active }: { to: string, icon: React.ReactNode, children: React.ReactNode, collapsed: boolean, active?: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-2 md:px-3 py-2 rounded-lg transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}
      title={typeof children === 'string' ? children : undefined}
    >
      {icon}
      {!collapsed && <span className="hidden md:block">{children}</span>}
    </Link>
  );
}
