import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (hasVisited) {
      setShouldAnimate(false);
    } else {
      localStorage.setItem('hasVisitedBefore', 'true');
    }

    // Add 8 second delay before showing the popup
    const timeoutId = setTimeout(() => {
      toast.custom((t) => (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-[100]"
          onClick={() => toast.dismiss(t)}
        >
          <div 
            className="relative bg-black/80 p-8 rounded-lg backdrop-blur-md max-w-2xl w-full mx-4 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-2xl text-center mb-8">
              We have chosen to protect your privacy, so we employed Bob, to remove those pesky cookies.
            </p>
            <img 
              src="/bob.jpg" 
              alt="Bob" 
              className="w-96 h-96 rounded-full mx-auto object-cover"
            />
          </div>
        </div>
      ), {
        duration: Infinity,
        className: "w-screen h-screen p-0 m-0",
        style: {
          maxWidth: '100vw',
          width: '100vw',
          height: '100vh',
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
        }
      });
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <motion.div
          initial={shouldAnimate ? { scale: 4, y: "40vh" } : false}
          animate={shouldAnimate ? { scale: 1, y: 0 } : false}
          transition={{ 
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
          className="relative"
        >
          <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
            <Header />
          </div>
          
          <div className="container mx-auto px-4 py-32 relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl opacity-0 animate-[fade-in_1s_ease-in-out_3s_forwards]" />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="relative">
                  <motion.div
                    initial={shouldAnimate ? { opacity: 1, scale: 2 } : false}
                    animate={shouldAnimate ? { 
                      opacity: 1, 
                      scale: [2, 1, 0.5],
                      fontSize: ["4rem", "4rem", "1rem"]
                    } : false}
                    transition={{ 
                      duration: 3.5,
                      times: [0, 0.7, 1],
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.5 
                    }}
                    className="mb-6"
                  >
                    <span className="text-4xl tracking-[0.3em] text-white uppercase font-light">
                      introducing
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                  >
                    <h1 className="text-7xl sm:text-8xl font-bold mb-2 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white/70 via-white to-white/70">
                      movement of real skills
                    </h1>
                    <p className="text-lg text-white/50 mb-8">M.O.R.S.</p>
                    <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />
                    <p className={`text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light ${shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_3.5s_forwards]" : ""}`}>
                      our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;