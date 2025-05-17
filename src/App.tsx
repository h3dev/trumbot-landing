import React from 'react';
import { Rocket, Bot, Sparkles, ChevronRight, MessageCircle, Package, Building2, Mail, GitBranch as BrandTelegram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Nebula Effect */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-600/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-blue-900/10 to-transparent animate-pulse"></div>
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="TB Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold">TrumBot</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#packages" className="hover:text-blue-400 transition">Packages</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Vision, Our Digital Universe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Crafting exceptional web applications and intelligent bots for Discord and Telegram
            </p>
            <a 
              href="https://t.me/hoangtam_hash" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all hover:scale-105 inline-flex"
            >
              <span>Explore Packages</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-black/80 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-900/30 p-6 rounded-2xl mb-6 inline-block">
                <Rocket className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Applications</h3>
              <p className="text-gray-400">Custom-built, responsive web applications that deliver exceptional user experiences</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-900/30 p-6 rounded-2xl mb-6 inline-block">
                <Bot className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discord Bots</h3>
              <p className="text-gray-400">Intelligent Discord bots that enhance server management and user engagement</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-900/30 p-6 rounded-2xl mb-6 inline-block">
                <MessageCircle className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Telegram Bots</h3>
              <p className="text-gray-400">Automated Telegram solutions for business and community management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="py-20 bg-gradient-to-b from-black to-blue-950/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-black/50 p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-2xl font-bold">Starter</h3>
              </div>
              <p className="text-gray-400 mb-6">Perfect for small projects and basic automation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Basic Web Application</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Simple Bot Commands</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>24/7 Uptime</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">$499</p>
              <a 
                href="https://t.me/hoangtam_hash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="bg-black/50 p-8 rounded-2xl border border-blue-500 transform scale-105">
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-2xl font-bold">Professional</h3>
              </div>
              <p className="text-gray-400 mb-6">Advanced features for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Advanced Web Application</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Custom Bot Features</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Analytics Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">$999</p>
              <a 
                href="https://t.me/hoangtam_hash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="bg-black/50 p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-2xl font-bold">Enterprise</h3>
              </div>
              <p className="text-gray-400 mb-6">Custom solutions for large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Custom Development</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Multiple Bots Integration</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Dedicated Support Team</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Custom SLA</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">Contact Us</p>
              <a 
                href="https://t.me/hoangtam_hash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors block text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="mailto:lh.hoangtam@gmail.com" className="flex items-center space-x-4 bg-blue-900/20 p-6 rounded-xl hover:bg-blue-900/30 transition-colors">
                <Mail className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400">lh.hoangtam@gmail.com</p>
                </div>
              </a>
              <a href="https://t.me/hoangtam_hash" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-blue-900/20 p-6 rounded-xl hover:bg-blue-900/30 transition-colors">
                <BrandTelegram className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold mb-1">Telegram</h3>
                  <p className="text-gray-400">Join our channel</p>
                </div>
              </a>
              <a href="https://facebook.com/your_page" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-blue-900/20 p-6 rounded-xl hover:bg-blue-900/30 transition-colors md:col-span-2">
                <Facebook className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-bold mb-1">Facebook</h3>
                  <p className="text-gray-400">Follow us for updates</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
