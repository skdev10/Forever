
import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "@/types";
import { Menu } from "lucide-react";

interface Tab {
  id: string;
  label: string;
}

interface DashboardLayoutProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Tab[];
  renderContent: () => React.ReactNode;
}

const DashboardLayout = ({ 
  user, 
  activeTab, 
  onTabChange, 
  tabs, 
  renderContent 
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="mr-4 p-2 rounded-md hover:bg-gray-100 lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="text-xl font-bold">Forever Buy</Link>
            </div>
            
            <div className="flex items-center">
              <span className="mr-4 hidden md:block">
                Welcome, {user.name}
              </span>
              <button 
                onClick={handleLogout}
                className="btn-secondary text-sm py-1"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className={`
            lg:w-64 bg-white p-4 rounded-lg shadow mb-6 lg:mb-0 lg:mr-6
            ${sidebarOpen ? 'block' : 'hidden'} lg:block
          `}>
            <div className="lg:hidden mb-4 flex items-center justify-between">
              <h3 className="font-medium">Menu</h3>
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                &times;
              </button>
            </div>
            
            <nav>
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => {
                        onTabChange(tab.id);
                        if (window.innerWidth < 1024) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        activeTab === tab.id 
                          ? "bg-black text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100"
                  >
                    Return to Shop
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-6 pt-6 border-t">
              <div className="px-4">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-600">{user.email}</div>
                <div className="text-xs text-gray-500 mt-1 capitalize">{user.role}</div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
