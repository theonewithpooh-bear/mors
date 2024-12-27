import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Share2, Bookmark, ChevronRight } from 'lucide-react';

const NewsCard = ({ title, description, source, date, readTime, image, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      z: -100,
      rotateX: -15,
      y: 50 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      z: 0,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.35,
        duration: 0.8,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 2,
      z: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative perspective-1000"
    >
      <Card className="backdrop-blur-sm bg-black/30 border border-white/10 overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-gray-400">
            <span>{source}</span> • <span>{date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {readTime} min read
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-white/5 pt-4">
          <div className="flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Bookmark className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
          >
            Read more <ChevronRight className="w-4 h-4" />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NewsCard;