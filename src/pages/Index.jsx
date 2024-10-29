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

    toast(
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-50">
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-md max-w-2xl w-full mx-4">
          <p className="text-white text-xl text-center mb-8">
            We have chosen to protect your privacy, so we employed Bob, to remove those pesky cookies.
          </p>
          <img 
            src="https://ci3.googleusercontent.com/mail-img-att/AGAZnRoSiLKf1ha4a-U5hjyg2f3ZESrsSvZ8lX7ch0R7MTOz03bOMROQcADMn6cWvloONgnIDLQg7RFVhq7BHbs_fNhjNZz4pcP_JsDOYQe2QhSW8rdlDeC4N226tdrBGAeuKS27qnwI3s0ii1rFLTksVeSloy63VcwjqRN_-kqYMSYjLWEaTkXHWhQtHUHC1l9-H4iO5PK6zZzw4FqmelyCcqOIguSiFYFu-rb4tWSeL9xV4YLEkjxiBJppAfi3IJX58ZZD60h1D_U0K7e941yOSzeoYSezsyXBmM7spHPi2YSHZ8mYMllJ0mgTNlJSm6lBGIodtFnUkNycs6Qcl4ASmASfobxDsdfy_TgSmYAMtaMnRZ_bi13lOlwtBgDfTGs1KyYzjthiHaklI_zy02QwzbOWrf_Oo-ZLW_lizxWvWg9iaOg9VvfO4AMvOwsYfqUw1Fb2fUu1YY63NnXQSzCHPa_fzrgza0XVQehPwDfnvWwq9x2Lkk89MUt_eR3wsbNTPrDkz9BMULahpLl_dtzAuBcUJDR_TYcm0YKlAu5koawU-l4aVaow9QtM9lVSNOORk4y_fDX20EwcbMCFaxeQwl9PoZF_HzCx_DNY70XGYZWtRU1GrONE6nRdqsgtxJu10Lbn3QwHpDvlm4cOik5js1xlBXvyTMVEHkE5kwRw3Z-qSaxTY4z8y1CKYV8TtqELVgGczFTXAm32NH33rVjBBeR6yYZ_uY5Mq7B2SC3bnU-AUlAqesOjaZG3PFtviuHu_ietM-DS1ER5wPghQKMvjF66DqJD-Scf47Xq_aznaRCepKOs-W-AsDqgoDyjuW97mfU_gNYetvPtaM6AUpQryo_JS5CQZAs7j8Oxo6JyKqBy5fGZyi2avJFciwYsM9bYxHUX4Yd3_PzdZHKzNXVhbPnLZPqzeFM3UkHs7mED20A493qAZYJ7DxntVjK2VqOz7ebVBcmaOrUX529pqnb8ldp6z77cLh1iD0SSCraJVAhlr2p34zS6r_kZaJ5Bi8q0behxYAAONFyWndCIgTr3ag=s0-l75-ft" 
            alt="Bob" 
            className="w-48 h-48 rounded-full mx-auto object-cover"
          />
        </div>
      </div>,
      {
        duration: 5000,
        style: {
          background: 'transparent',
          border: 'none',
          padding: 0,
          maxWidth: '100%',
          width: '100%',
        }
      }
    );
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
