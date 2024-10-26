import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, LineChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const words = ["movement", "of", "real", "skills"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-8xl font-bold mb-16 tracking-tight leading-none">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    movement of real skills
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-white/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              <p className="text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
              </p>
            </motion.div>
          </div>

          <div className="space-y-48">
            {[
              { number: "70%", text: "of employers value skills over degrees" },
              { number: "85%", text: "of jobs in 2030 don't exist yet" },
              { number: "92%", text: "of students want practical education" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.03] transition-all duration-700"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <div className="relative text-center transform transition-transform duration-700 hover:scale-110">
                  <h3 className="text-9xl font-bold text-white mb-6 [text-shadow:_0_4px_12px_rgb(255_255_255_/_10%)]">
                    {stat.number}
                  </h3>
                  <p className="text-3xl text-gray-400">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Principles */}
          <div className="space-y-32 my-48">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-24"
            >
              key principles
            </motion.h2>
            <div className="grid grid-cols-1 gap-24">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "experiential learning",
                  description: "hands-on experience through real-world projects"
                },
                {
                  icon: <GraduationCap className="h-8 w-8" />,
                  title: "skill certification",
                  description: "recognized credentials for practical abilities"
                },
                {
                  icon: <LineChart className="h-8 w-8" />,
                  title: "industry alignment",
                  description: "curriculum designed with industry partners"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "collaborative growth",
                  description: "peer learning and mentorship programs"
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500">
                    <CardHeader>
                      <div className="mb-2 text-white">{principle.icon}</div>
                      <CardTitle className="text-white text-3xl">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 text-xl">
                        {principle.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-48"
          >
            <Separator className="my-16 bg-white/10" />
            <h2 className="text-3xl font-bold mb-8">ready to make a difference?</h2>
            <Link to="/get-involved">
              <Button 
                variant="outline" 
                className="group text-xl px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                join our movement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
