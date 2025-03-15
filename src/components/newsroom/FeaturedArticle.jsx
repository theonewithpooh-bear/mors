
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Bookmark, Share2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedArticle = ({ article }) => {
  if (!article) return null;
  
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Educational Reform':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'AI in Education':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'MORS Updates':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Tech & Society':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90 z-10" />
      
      <div className="absolute inset-0 z-0">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 h-full w-full p-8 md:p-12 flex flex-col justify-end min-h-[450px]">
        <div className="mb-4">
          <Badge className={`${getCategoryColor(article.category)} border-1 mb-4`}>
            <span className="font-semibold">{article.category}</span>
          </Badge>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
          {article.title}
        </h2>
        
        <p className="text-gray-300 md:text-lg mb-6 max-w-3xl">
          {article.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <img 
              src={article.authorImage} 
              alt={article.author} 
              className="w-8 h-8 rounded-full border border-white/20"
            />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {article.readTime} min read
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 px-6">
            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Share2 className="w-5 h-5 text-gray-300 hover:text-white" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Bookmark className="w-5 h-5 text-gray-300 hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;
