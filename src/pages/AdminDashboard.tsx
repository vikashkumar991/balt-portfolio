import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, Users, Mail, Settings, LogOut, 
  Edit, Trash2, Eye, MessageSquare, Calendar,
  User, Phone, MapPin, Clock, CheckCircle
} from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [portfolioData, setPortfolioData] = useState({
    name: 'Vikash Kumar Singh',
    title: 'DevOps & Backend Developer',
    bio: 'Automating the Future of Backend Infrastructure',
    email: 'vks200506@gmail.com',
    phone: '9915599590',
    location: 'Chandigarh, India'
  });

  useEffect(() => {
    // Check authentication
    if (!localStorage.getItem('isAdminAuthenticated')) {
      navigate('/admin');
      return;
    }

    // Load contacts from localStorage
    const savedContacts = localStorage.getItem('contactMessages');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin');
  };

  const updateContactStatus = (id: string, status: 'new' | 'read' | 'replied') => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, status } : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem('contactMessages', JSON.stringify(updatedContacts));
  };

  const deleteContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contactMessages', JSON.stringify(updatedContacts));
  };

  const stats = {
    totalContacts: contacts.length,
    newMessages: contacts.filter(c => c.status === 'new').length,
    repliedMessages: contacts.filter(c => c.status === 'replied').length,
    readMessages: contacts.filter(c => c.status === 'read').length
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'contacts', label: 'Contact Messages', icon: Mail },
    { id: 'portfolio', label: 'Portfolio Settings', icon: Settings },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-64 bg-black/50 backdrop-blur-sm border-r border-orange-500/20 min-h-screen"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-8">Admin Panel</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Welcome back, Admin</span>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Contacts', value: stats.totalContacts, icon: Users, color: 'from-blue-500 to-blue-600' },
                  { label: 'New Messages', value: stats.newMessages, icon: Mail, color: 'from-green-500 to-green-600' },
                  { label: 'Read Messages', value: stats.readMessages, icon: Eye, color: 'from-yellow-500 to-yellow-600' },
                  { label: 'Replied', value: stats.repliedMessages, icon: CheckCircle, color: 'from-purple-500 to-purple-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glassmorphism p-6 rounded-2xl border border-orange-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Messages */}
              <div className="glassmorphism p-6 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Recent Messages</h3>
                <div className="space-y-4">
                  {contacts.slice(0, 5).map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{contact.name}</p>
                          <p className="text-gray-400 text-sm">{contact.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          contact.status === 'new' ? 'bg-green-500/20 text-green-300' :
                          contact.status === 'read' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {contact.status}
                        </span>
                        <p className="text-gray-400 text-xs mt-1">
                          {new Date(contact.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contacts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="glassmorphism p-6 rounded-2xl border border-orange-500/20">
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <div className="text-center py-12">
                      <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">No contact messages yet</p>
                    </div>
                  ) : (
                    contacts.map((contact) => (
                      <div key={contact.id} className="bg-white/5 p-6 rounded-lg border border-orange-500/10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">{contact.name}</h4>
                              <p className="text-gray-400 text-sm">{contact.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              contact.status === 'new' ? 'bg-green-500/20 text-green-300' :
                              contact.status === 'read' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>
                              {contact.status}
                            </span>
                            <button
                              onClick={() => updateContactStatus(contact.id, 'read')}
                              className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateContactStatus(contact.id, 'replied')}
                              className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg transition-colors"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteContact(contact.id)}
                              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg mb-4">
                          <p className="text-gray-300">{contact.message}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(contact.timestamp).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(contact.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="glassmorphism p-6 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Portfolio Information</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={portfolioData.name}
                        onChange={(e) => setPortfolioData({ ...portfolioData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Professional Title</label>
                      <input
                        type="text"
                        value={portfolioData.title}
                        onChange={(e) => setPortfolioData({ ...portfolioData, title: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Bio</label>
                    <textarea
                      value={portfolioData.bio}
                      onChange={(e) => setPortfolioData({ ...portfolioData, bio: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={portfolioData.email}
                        onChange={(e) => setPortfolioData({ ...portfolioData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={portfolioData.phone}
                        onChange={(e) => setPortfolioData({ ...portfolioData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Location</label>
                      <input
                        type="text"
                        value={portfolioData.location}
                        onChange={(e) => setPortfolioData({ ...portfolioData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;