import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Users, BookOpen, Target, Shield, ArrowRight, Sparkles, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

// Clock component with moving hands
const AnimatedClock = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
      <div className="relative w-80 h-80">
        {/* Clock face */}
        <div className="w-full h-full rounded-full border-4 border-gray-400/20 bg-gray-100/10">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-gray-400/30 rounded"
              style={{
                top: '10px',
                left: '50%',
                transformOrigin: '50% 150px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`
              }}
            />
          ))}
          
          {/* Hour hand */}
          <motion.div
            className="absolute w-1.5 bg-gray-400/40 rounded-full origin-bottom"
            style={{
              height: '80px',
              bottom: '50%',
              left: '50%',
              transformOrigin: '50% 100%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 43200, // 12 hours
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Minute hand */}
          <motion.div
            className="absolute w-1 bg-gray-400/50 rounded-full origin-bottom"
            style={{
              height: '120px',
              bottom: '50%',
              left: '50%',
              transformOrigin: '50% 100%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 3600, // 1 hour
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Second hand */}
          <motion.div
            className="absolute w-0.5 bg-gray-400/60 rounded-full origin-bottom"
            style={{
              height: '130px',
              bottom: '50%',
              left: '50%',
              transformOrigin: '50% 100%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 60, // 1 minute
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center dot */}
          <div className="absolute w-3 h-3 bg-gray-400/50 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

const AI = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    initial: {
      opacity: 0,
      x: -80
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  };

  const slideInRight = {
    initial: {
      opacity: 0,
      x: 80
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        {/* Animated Clock Background */}
        <AnimatedClock />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Brain className="w-20 h-20 text-primary" />
                <Clock className="w-12 h-12 text-red-500 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            >
              AI in Education
            </motion.h1>
            
            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.6
              }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              The time is NOW. AI is transforming education at lightning speed—students and teachers who adapt today will lead tomorrow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Urgency Statement */}
      <section className="py-32 bg-gradient-to-r from-red-50/30 to-orange-50/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Why NOW, Not Later?</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              AI capabilities are doubling every few months. Students using AI responsibly today are already outpacing their peers. 
              Schools that wait are leaving their students behind in an AI-driven world.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card p-6 rounded-xl border">
                <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Exponential Growth</h3>
                <p className="text-muted-foreground text-sm">AI capabilities improve dramatically every quarter, not every year</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Student Advantage</h3>
                <p className="text-muted-foreground text-sm">Early AI adopters are already gaining significant academic advantages</p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <Target className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Future Readiness</h3>
                <p className="text-muted-foreground text-sm">AI literacy will be as essential as digital literacy in tomorrow's workforce</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div {...slideInLeft}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-bold">For Students: Use AI Responsibly</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI is your study partner, not your replacement. Learn to use it ethically to enhance your understanding, not to avoid learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Use AI to explain complex concepts in simple terms</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Generate practice questions and test your knowledge</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Get feedback on your writing and ideas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Always cite AI assistance and verify information</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...slideInRight}>
              <div className="bg-gradient-to-br from-green-50/50 to-blue-50/50 p-8 rounded-3xl border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Responsible AI Use Guidelines</h3>
                  <div className="space-y-4">
                    <div className="bg-white/60 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">DO: Learn WITH AI</h4>
                      <p className="text-sm text-muted-foreground">Use AI to understand, practice, and improve your skills</p>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">DON'T: Let AI Do Your Work</h4>
                      <p className="text-sm text-muted-foreground">Avoid using AI to complete assignments without learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div {...slideInLeft}>
              <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-8 rounded-3xl border">
                <div className="text-center space-y-6">
                  <Users className="w-16 h-16 mx-auto text-primary" />
                  <h3 className="text-2xl font-bold">AI-Powered Teaching Tools</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm">Generate lesson plans and activities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm">Create differentiated materials</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm">Provide instant feedback</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm">Analyze student progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...slideInRight}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-bold">For Teachers: Amplify Your Impact</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI doesn't replace teachers—it empowers them. Spend less time on routine tasks and more time inspiring students.
                </p>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Personalized Learning at Scale</h4>
                    <p className="text-sm text-muted-foreground">Create customized materials for every student's needs and learning pace</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Instant Assessment & Feedback</h4>
                    <p className="text-sm text-muted-foreground">Provide immediate, detailed feedback on student work and progress</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Creative Lesson Enhancement</h4>
                    <p className="text-sm text-muted-foreground">Generate engaging activities, examples, and multimedia content</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Gemini Spotlight */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Recommended: Google Gemini</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A powerful, accessible AI with generous rate limits perfect for educational use
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-12 rounded-3xl border">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Why Choose Gemini?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Generous Free Tier</span>
                        <p className="text-sm text-muted-foreground">Excellent rate limits for educational use</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Multimodal Capabilities</span>
                        <p className="text-sm text-muted-foreground">Process text, images, and documents</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Educational Focus</span>
                        <p className="text-sm text-muted-foreground">Designed with learning and safety in mind</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Easy Integration</span>
                        <p className="text-sm text-muted-foreground">Simple to use for both students and teachers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 p-8 rounded-2xl">
                  <h4 className="text-lg font-bold mb-4">Getting Started with Gemini</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                      <span>Visit gemini.google.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
                      <span>Sign in with your Google account</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">3</span>
                      <span>Start learning responsibly!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Ethical AI Education</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Building responsible AI habits that will serve students throughout their lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={slideInLeft}
                initial="initial"
                whileInView="whileInView"
                viewport={{
                  once: true,
                  margin: "-100px"
                }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Core Principles</h3>
                <div className="space-y-4">
                  {[
                    "Transparency in AI usage and limitations",
                    "Critical thinking about AI-generated content",
                    "Respect for human creativity and authorship",
                    "Understanding bias and AI limitations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="initial"
                whileInView="whileInView"
                viewport={{
                  once: true,
                  margin: "-100px"
                }}
                className="bg-card p-8 rounded-2xl border"
              >
                <h3 className="text-2xl font-bold mb-4">The Future Starts Today</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students who learn to use AI ethically and effectively today will be the leaders, innovators, 
                  and problem-solvers of tomorrow. The question isn't whether AI will transform education—it's 
                  whether we'll be ready for it.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Don't Wait. Start Today.</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Every day schools delay AI integration, their students fall further behind. Join the AI education revolution now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="bg-primary text-primary-foreground px-12 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started with AI
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="border border-primary text-primary px-12 py-4 rounded-xl font-semibold text-lg hover:bg-primary/5 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AI;
