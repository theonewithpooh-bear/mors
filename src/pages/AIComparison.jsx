
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

  const aiModels = [
    {
      name: "Claude 4 (Sonnet 4)",
      freeTier: "Sonnet 4 with 200k-token window, tool-use capabilities",
      paidTier: "Claude Pro ($20/month) - 5x more usage, priority access, early features",
      educationalStrengths: "State-of-the-art coding (72% on SWE-bench), excellent multi-step math reasoning",
      limitations: "Live web search limited without extended thinking mode",
      rating: 5
    },
    {
      name: "Gemini 2.5 Flash",
      freeTier: "1M-token window, Deep Research mode, fast output",
      paidTier: "Gemini Advanced ($20/month) - Higher usage limits, Gemini Ultra access",
      educationalStrengths: "Excellent research capabilities, superior language translation, massive context window",
      limitations: "Slightly lower coding performance compared to Claude 4",
      rating: 5
    },
    {
      name: "ChatGPT 4o mini",
      freeTier: "Full ChatGPT toolbelt: browsing, Python interpreter, file uploads",
      paidTier: "ChatGPT Plus ($20/month) - GPT-4o access, DALL-E 3, advanced data analysis",
      educationalStrengths: "Comprehensive tool integration, reliable across broad tasks, excellent explanations",
      limitations: "Falls back to smaller model (4o-mini) when flagship usage runs out",
      rating: 4
    },
    {
      name: "Grok 3",
      freeTier: "Excellent STEM performance, DeepSearch option",
      paidTier: "X Premium+ ($16/month) - Higher quotas, real-time data access",
      educationalStrengths: "Outstanding mathematical reasoning, strong on AIME 2025 benchmarks",
      limitations: "Tight free quotas (~15 messages/hour), knowledge cutoff Nov 2024",
      rating: 4
    }
  ];

  const freeFeatures = [
    { name: "Research assistance", claude: 7, gemini: 8, chatgpt: 8, grok: 7 },
    { name: "Essay-writing support", claude: 8, gemini: 7, chatgpt: 8, grok: 6 },
    { name: "Math problem solving", claude: 9, gemini: 8, chatgpt: 8, grok: 9 },
    { name: "Code learning / debugging", claude: 9, gemini: 8, chatgpt: 7, grok: 7 },
    { name: "Language translation", claude: 7, gemini: 9, chatgpt: 8, grok: 6 },
    { name: "Study planning & schedules", claude: 8, gemini: 7, chatgpt: 8, grok: 6 },
    { name: "Quick explanations (ELI5, TL;DR)", claude: 7, gemini: 7, chatgpt: 8, grok: 6 },
    { name: "Document / file analysis", claude: 8, gemini: 9, chatgpt: 7, grok: 6 }
  ];

  const paidFeatures = [
    { name: "Research assistance", claude: 9, gemini: 9, chatgpt: 9, grok: 8 },
    { name: "Essay-writing support", claude: 9, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Math problem solving", claude: 10, gemini: 9, chatgpt: 9, grok: 10 },
    { name: "Code learning / debugging", claude: 10, gemini: 9, chatgpt: 8, grok: 8 },
    { name: "Language translation", claude: 8, gemini: 10, chatgpt: 9, grok: 7 },
    { name: "Study planning & schedules", claude: 9, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Quick explanations (ELI5, TL;DR)", claude: 8, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Document / file analysis", claude: 9, gemini: 10, chatgpt: 8, grok: 7 },
    { name: "Real-time web access", claude: 8, gemini: 9, chatgpt: 9, grok: 9 },
    { name: "Advanced reasoning", claude: 10, gemini: 8, chatgpt: 9, grok: 9 },
    { name: "Image generation", claude: 6, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Extended conversations", claude: 9, gemini: 9, chatgpt: 8, grok: 8 }
  ];

  const getScoreColor = (score) => {
    if (score >= 9) return "text-green-600 font-bold";
    if (score >= 7) return "text-blue-600 font-semibold";
    if (score >= 5) return "text-yellow-600";
    return "text-red-600";
  };

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
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="free-features">Free Tier</TabsTrigger>
                <TabsTrigger value="paid-features">Paid Tier</TabsTrigger>
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

              {/* Free Features Tab */}
              <TabsContent value="free-features" className="space-y-8">
                <div className="bg-card p-2 rounded-2xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead className="text-center">Claude 4</TableHead>
                        <TableHead className="text-center">Gemini 2.5 Flash</TableHead>
                        <TableHead className="text-center">ChatGPT 4o mini</TableHead>
                        <TableHead className="text-center">Grok 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {freeFeatures.map((feature) => (
                        <TableRow key={feature.name}>
                          <TableCell className="font-medium">{feature.name}</TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.claude)}`}>
                            {feature.claude}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.gemini)}`}>
                            {feature.gemini}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.chatgpt)}`}>
                            {feature.chatgpt}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.grok)}`}>
                            {feature.grok}/10
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 rounded-2xl border">
                  <h3 className="text-xl font-bold mb-4">Free Tier Scale</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-600 rounded"></div>
                          <span className="font-semibold text-green-600">9-10:</span>
                          <span>Top of the class – rarely needs a second tool</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-600 rounded"></div>
                          <span className="font-semibold text-blue-600">7-8:</span>
                          <span>Very good – reliable day-to-day</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                          <span className="font-semibold text-yellow-600">5-6:</span>
                          <span>Adequate – works, but expect occasional limits</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-600 rounded"></div>
                          <span className="font-semibold text-red-600">≤4:</span>
                          <span>Use another chatbot for that task</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Paid Features Tab */}
              <TabsContent value="paid-features" className="space-y-8">
                <div className="bg-card p-2 rounded-2xl border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead className="text-center">Claude Pro</TableHead>
                        <TableHead className="text-center">Gemini Advanced</TableHead>
                        <TableHead className="text-center">ChatGPT Plus</TableHead>
                        <TableHead className="text-center">X Premium+</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paidFeatures.map((feature) => (
                        <TableRow key={feature.name}>
                          <TableCell className="font-medium">{feature.name}</TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.claude)}`}>
                            {feature.claude}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.gemini)}`}>
                            {feature.gemini}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.chatgpt)}`}>
                            {feature.chatgpt}/10
                          </TableCell>
                          <TableCell className={`text-center ${getScoreColor(feature.grok)}`}>
                            {feature.grok}/10
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50/50 to-yellow-50/50 p-8 rounded-2xl border">
                    <h3 className="text-xl font-bold mb-4">Paid Tier Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Higher usage limits and priority access</li>
                      <li>• Access to flagship models (GPT-4o, Gemini Ultra)</li>
                      <li>• Real-time web browsing and data access</li>
                      <li>• Advanced features like image generation</li>
                      <li>• Extended conversation memory</li>
                      <li>• Enhanced reasoning capabilities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 rounded-2xl border">
                    <h3 className="text-xl font-bold mb-4">Worth the Upgrade?</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Heavy users: Definitely worth $16-20/month</li>
                      <li>• Casual users: Free tiers often sufficient</li>
                      <li>• Students: Consider educational discounts</li>
                      <li>• Researchers: Paid tiers offer better web access</li>
                      <li>• Coders: Claude Pro and ChatGPT Plus excel</li>
                      <li>• Try free first, upgrade when you hit limits</li>
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
                  Try {model.name.split(' ')[0]}
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
