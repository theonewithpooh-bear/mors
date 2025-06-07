
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Users, BookOpen, Target, Shield, ArrowRight, Sparkles } from 'lucide-react';

const AI = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
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
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Brain className="w-20 h-20 mx-auto text-primary mb-6" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            >
              AI in Education
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Transforming learning through intelligent technology that adapts, inspires, and empowers every student to reach their full potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Future of Learning is Here</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're witnessing a revolution in education. Artificial Intelligence isn't just changing how we teach—it's fundamentally reimagining what's possible when technology meets human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Learning Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered education creates personalized pathways that adapt to each learner's unique needs, pace, and learning style.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-500">
                <div className="mb-6">
                  <Lightbulb className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4">Personalized Learning</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AI algorithms analyze learning patterns and adapt content delivery in real-time, ensuring every student receives the perfect challenge level to maximize growth and engagement.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-500">
                <div className="mb-6">
                  <Users className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4">Teacher Empowerment</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Intelligent tools handle routine tasks like grading and progress tracking, freeing educators to focus on what matters most—inspiring, mentoring, and connecting with students.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-500">
                <div className="mb-6">
                  <BookOpen className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4">Universal Access</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Break down barriers with instant translation, accessibility features, and 24/7 learning support that makes quality education available to every student, everywhere.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-500">
                <div className="mb-6">
                  <Target className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4">Intelligent Assessment</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced analytics provide deep insights into learning progress, identifying strengths and growth opportunities with precision that guides effective intervention strategies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div {...slideInLeft}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-bold">Adaptive Intelligence</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our AI systems learn and evolve with each interaction, creating increasingly sophisticated models of how students learn best. This continuous adaptation ensures that educational experiences become more effective over time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time learning pattern analysis</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Predictive difficulty adjustment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Emotional state recognition</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...slideInRight}>
              <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-12 rounded-3xl">
                <div className="text-center space-y-8">
                  <Brain className="w-24 h-24 mx-auto text-primary" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Machine Learning at Scale</h3>
                    <p className="text-muted-foreground">
                      Processing millions of learning interactions to understand what makes education truly effective for each individual student.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Ethical AI in Education</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Building trust through transparency, privacy protection, and human-centered design principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={slideInLeft}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Our Commitment</h3>
                <div className="space-y-4">
                  {[
                    "Student privacy and data protection",
                    "Transparent AI decision-making processes",
                    "Equity and inclusion in AI-powered tools",
                    "Maintaining human connection in learning"
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
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card p-8 rounded-2xl border"
              >
                <h3 className="text-2xl font-bold mb-4">Human-AI Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI enhances human capability rather than replacing it. Teachers remain at the heart of education, supported by intelligent tools that amplify their impact and deepen their connection with students.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Shape the Future of Education</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join us in creating an educational future where AI empowers every learner to achieve their dreams and reach their full potential.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-12 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AI;
