
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Share2, Bookmark, ChevronRight, Calendar } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const NewsCard = ({ id, title, description, author, date, readTime, image, category, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 30 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.8,
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
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
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <Card className="bg-black/30 border border-white/10 overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-purple-500/10">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 z-20">
              <Badge className={`${getCategoryColor(category)} border`}>
                {category}
              </Badge>
            </div>
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {formattedDate}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {readTime} min read
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4 flex-grow">
          <p className="text-gray-300 line-clamp-3 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-white/5 pt-4">
          <div className="flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Share2 className="w-4 h-4 text-gray-400 hover:text-white" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Bookmark className="w-4 h-4 text-gray-400 hover:text-white" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 group"
          >
            Read more <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
