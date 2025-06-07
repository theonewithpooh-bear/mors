
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, DollarSign, CheckCircle, XCircle, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AIComparison = () => {
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

  // Placeholder data - user will fill this in manually
  const aiModels = [
    {
      name: "Google Gemini",
      freeTier: "Free tier details here",
      paidTier: "Paid tier details here",
      educationalStrengths: "Educational strengths here",
      limitations: "Limitations here",
      rating: 5
    },
    {
      name: "ChatGPT",
      freeTier: "Free tier details here",
      paidTier: "Paid tier details here",
      educationalStrengths: "Educational strengths here",
      limitations: "Limitations here",
      rating: 4
    },
    {
      name: "Claude",
      freeTier: "Free tier details here",
      paidTier: "Paid tier details here",
      educationalStrengths: "Educational strengths here",
      limitations: "Limitations here",
      rating: 4
    },
    {
      name: "Grok",
      freeTier: "Free tier details here",
      paidTier: "Paid tier details here",
      educationalStrengths: "Educational strengths here",
      limitations: "Limitations here",
      rating: 3
    }
  ];

  const features = [
    "Research Assistance",
    "Essay Writing Support",
    "Math Problem Solving",
    "Code Learning",
    "Language Translation",
    "Study Planning",
    "Quick Explanations",
    "Document Analysis"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Brain className="w-16 h-16 text-primary" />
              <GraduationCap className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Models for Education
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Compare the top AI models and find the best one for your educational needs. 
              From free tiers to premium features, make an informed choice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Tabs */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid gap-6">
                  {aiModels.map((model, index) => (
                    <motion.div
                      key={model.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card p-8 rounded-2xl border shadow-lg"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < model.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">Educational Rating</span>
                          <p className="text-2xl font-bold">{model.rating}/5</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Educational Strengths
                          </h4>
                          <p className="text-muted-foreground">{model.educationalStrengths}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                            <XCircle className="w-4 h-4 mr-2" />
                            Limitations
                          </h4>
                          <p className="text-muted-foreground">{model.limitations}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Pricing Tab */}
              <TabsContent value="pricing" className="space-y-8">
                <div className="bg-card p-2 rounded-2xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-48">AI Model</TableHead>
                        <TableHead>Free Tier</TableHead>
                        <TableHead>Paid Tier</TableHead>
                        <TableHead className="text-center">Best For Students</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aiModels.map((model) => (
                        <TableRow key={model.name}>
                          <TableCell className="font-semibold">{model.name}</TableCell>
                          <TableCell>{model.freeTier}</TableCell>
                          <TableCell>{model.paidTier}</TableCell>
                          <TableCell className="text-center">
                            {model.rating >= 4 ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">Good</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 p-8 rounded-2xl border">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold">Cost Comparison Tips</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">For Students on Budget</h4>
                      <p className="text-muted-foreground text-sm">
                        Most AI models offer generous free tiers perfect for educational use. 
                        Start with free options and upgrade only when needed.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Schools & Teachers</h4>
                      <p className="text-muted-foreground text-sm">
                        Consider educational discounts and volume licensing. 
                        Many providers offer special rates for educational institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features" className="space-y-8">
                <div className="bg-card p-2 rounded-2xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        {aiModels.map((model) => (
                          <TableHead key={model.name} className="text-center">{model.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {features.map((feature) => (
                        <TableRow key={feature}>
                          <TableCell className="font-medium">{feature}</TableCell>
                          {aiModels.map((model) => (
                            <TableCell key={`${model.name}-${feature}`} className="text-center">
                              {/* Placeholder - user will fill this manually */}
                              <span className="text-muted-foreground">TBD</span>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 rounded-2xl border">
                    <h3 className="text-xl font-bold mb-4">Key Educational Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ability to explain complex concepts simply</li>
                      <li>• Support for multiple subjects and disciplines</li>
                      <li>• Code generation and debugging assistance</li>
                      <li>• Language learning and translation support</li>
                      <li>• Research and fact-checking capabilities</li>
                      <li>• Study plan generation and organization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50/50 to-yellow-50/50 p-8 rounded-2xl border">
                    <h3 className="text-xl font-bold mb-4">What to Look For</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Accuracy and reliability of information</li>
                      <li>• Clear citation and source transparency</li>
                      <li>• Ability to adapt to different learning styles</li>
                      <li>• Safety features and content filtering</li>
                      <li>• Integration with educational tools</li>
                      <li>• Regular updates and improvements</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Choose Your AI Learning Companion?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start with the free tiers and find the AI model that best fits your learning style and needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {aiModels.map((model) => (
                <motion.div
                  key={model.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border px-6 py-4 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Try {model.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIComparison;
