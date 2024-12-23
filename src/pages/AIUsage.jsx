import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Separator } from "@/components/ui/separator";
import { Bot, Brain, Coins, Zap, Target, Shield } from 'lucide-react';

const AIUsage = () => {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "cost-effective",
      description: "as a grassroots movement, we operate on minimal resources. AI tools allow us to create professional-quality content at a fraction of traditional costs."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "rapid iteration",
      description: "AI enables us to quickly generate and refine our materials, helping us respond promptly to the evolving educational landscape."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "quality results",
      description: "modern AI tools produce high-quality visual and written content that effectively communicates our message."
    }
  ];

  const principles = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "human oversight",
      description: "while we use AI for content generation, every piece of content is reviewed and refined by our team to ensure accuracy and alignment with our mission."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "ethical considerations",
      description: "we carefully consider the ethical implications of AI usage and ensure transparency about which content is AI-assisted."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "continuous learning",
      description: "we stay updated with the latest AI developments to ensure we're using these tools responsibly and effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mt-24"
        >
          <h1 className="text-4xl font-bold mb-8">why we use AI</h1>
          
          <p className="text-xl text-gray-300 mb-12">
            at mors, we embrace artificial intelligence as a powerful tool to amplify our impact 
            in educational reform. our approach combines innovative technology with human oversight 
            to create meaningful change.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">key benefits</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4 text-blue-400">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="text-2xl font-semibold mb-8">our principles</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4 text-green-400">{principle.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mt-12">
            <p className="text-gray-300 italic">
              by leveraging AI technology, we can focus our limited resources on what matters most: 
              advocating for meaningful educational reform and building our community. we believe 
              that embracing innovation responsibly is key to creating lasting change in education.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default AIUsage;