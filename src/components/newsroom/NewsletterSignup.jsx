
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterSignup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-md p-3 rounded-lg mb-4">
              <Mail className="h-6 w-6 text-purple-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Stay updated with our newsletter</h3>
            <p className="text-gray-300 max-w-lg">
              Subscribe to receive the latest news, updates on educational reform, and exclusive content directly to your inbox.
            </p>
          </div>
        </div>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="flex-grow">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            />
          </div>
          <Button 
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 transition-all"
          >
            <span>Subscribe</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
        
        <p className="mt-3 text-sm text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;
