import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut"
            }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative w-32 h-32">
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at center, #ffffff, #000000)",
                    "radial-gradient(circle at center, #ff0000, #000000)",
                    "radial-gradient(circle at center, #00ff00, #000000)",
                    "radial-gradient(circle at center, #0000ff, #000000)",
                  ],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.33, 0.66, 1],
                  ease: "easeInOut",
                  repeat: 0
                }}
                className="absolute inset-0 rounded-full"
              />
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl"
              >
                MORS
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <Header />
        
        <div className="container mx-auto px-4 py-32 relative">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl" />
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/1 rounded-full blur-3xl animate-pulse" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-white/2 to-white/3 blur-3xl animate-glow-dance" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="mb-6"
                  >
                    <span className="text-sm tracking-[0.2em] text-white/30 uppercase font-light">introducing</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                    className="text-7xl sm:text-8xl font-bold mb-2 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white/70 via-white to-white/70 animate-gradient-x"
                  >
                    movement of real skills
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.8, duration: 0.8 }}
                    className="text-lg text-white/50 mb-8"
                  >
                    (MORS)
                  </motion.p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 4, duration: 0.8 }}
                    className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2, duration: 0.8 }}
                    className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
                  >
                    our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              className="text-center"
            >
              <Separator className="my-8 bg-white/10" />
              <h2 className="text-2xl font-bold mb-4 text-white">ready to make a difference?</h2>
              <Link to="/get-involved">
                <Button 
                  variant="outline" 
                  className="group text-lg px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:scale-105 transition-all duration-300"
                >
                  get involved
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;