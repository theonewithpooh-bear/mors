import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, DollarSign, CheckCircle, XCircle, Star, Users, Crown } from 'lucide-react';
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

  const pricingData = [
    {
      provider: "Claude (Anthropic)",
      plans: [
        { name: "Free", monthly: "$0", annual: "—", details: "Claude 4 Haiku (short context) with daily message limits" },
        { name: "Claude Pro", monthly: "$20", annual: "$200 ($17/mo)", details: "5× more usage than free tier; access to Opus 4 (when available)" },
        { name: "Claude Team", monthly: "$30/seat (min 5)", annual: "—", details: "Shared work-spaces, higher rate-limits, admin console" }
      ]
    },
    {
      provider: "Gemini (Google)",
      plans: [
        { name: "Free", monthly: "$0", annual: "—", details: "Gemini 1.5 Flash with standard limits" },
        { name: "Google One AI Premium", monthly: "$19.99", annual: "—", details: "2TB Google One storage, Gemini Advanced (Ultra/2.5 Pro), Workspace AI features" }
      ]
    },
    {
      provider: "Grok 3 (xAI)",
      plans: [
        { name: "X Premium+", monthly: "$40", annual: "$395 ($32.92/mo)", details: "Unlimited Grok 3 queries inside X; higher model limits than lower tiers" }
      ]
    },
    {
      provider: "ChatGPT (OpenAI)",
      plans: [
        { name: "Free", monthly: "$0", annual: "—", details: "GPT-3.5 + limited GPT-4o burst" },
        { name: "ChatGPT Plus", monthly: "$20", annual: "—", details: "Priority access & GPT-4o, Code Interpreter, DALL·E and browsing" },
        { name: "ChatGPT Team", monthly: "$30/seat", annual: "$300/yr ($25/seat)", details: "Min 2 seats, shared custom GPTs, higher caps" },
        { name: "ChatGPT Pro", monthly: "$200", annual: "—", details: "Unlimited o1 & GPT-4o, expanded voice & analysis tools" },
        { name: "ChatGPT Enterprise", monthly: "Custom (~$60-100/seat)", annual: "Contractual", details: "Unlimited GPT-4o, dedicated data-privacy guarantees, admin & SSO" }
      ]
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
    { name: "Research assistance", claude: 8, gemini: 9, chatgpt: 9, grok: 8 },
    { name: "Essay-writing support", claude: 9, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Math problem solving", claude: 9, gemini: 9, chatgpt: 10, grok: 9 },
    { name: "Code learning / debugging", claude: 10, gemini: 9, chatgpt: 9, grok: 8 },
    { name: "Language translation", claude: 8, gemini: 10, chatgpt: 8, grok: 6 },
    { name: "Study planning & schedules", claude: 8, gemini: 8, chatgpt: 9, grok: 7 },
    { name: "Quick explanations (ELI5, TL;DR)", claude: 8, gemini: 7, chatgpt: 9, grok: 7 },
    { name: "Document / file analysis", claude: 9, gemini: 9, chatgpt: 9, grok: 7 }
  ];

  const getScoreColor = (score) => {
    if (score >= 9) return "text-green-600 font-bold";
    if (score >= 7) return "text-blue-600 font-semibold";
    if (score >= 5) return "text-yellow-600";
    return "text-red-600";
  };

  const getPlanIcon = (planName) => {
    if (planName.includes('Free')) return null;
    if (planName.includes('Pro') || planName.includes('Premium') || planName.includes('Plus')) return <Crown className="w-4 h-4 text-yellow-500" />;
    if (planName.includes('Team') || planName.includes('Enterprise')) return <Users className="w-4 h-4 text-blue-500" />;
    return null;
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

              {/* Updated Pricing Tab */}
              <TabsContent value="pricing" className="space-y-8">
                <div className="space-y-8">
                  {pricingData.map((provider, providerIndex) => (
                    <motion.div
                      key={provider.provider}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: providerIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card p-6 rounded-2xl border shadow-lg"
                    >
                      <h3 className="text-xl font-bold mb-4 text-primary">{provider.provider}</h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Plan</TableHead>
                              <TableHead>Monthly</TableHead>
                              <TableHead>Annual</TableHead>
                              <TableHead>Key Details</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {provider.plans.map((plan, planIndex) => (
                              <TableRow key={planIndex}>
                                <TableCell className="font-semibold">
                                  <div className="flex items-center space-x-2">
                                    {getPlanIcon(plan.name)}
                                    <span>{plan.name}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="font-medium text-green-600">{plan.monthly}</TableCell>
                                <TableCell className="font-medium text-blue-600">{plan.annual}</TableCell>
                                <TableCell className="text-sm text-muted-foreground">{plan.details}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing Insights */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 p-8 rounded-2xl border">
                    <div className="flex items-center space-x-3 mb-4">
                      <DollarSign className="w-8 h-8 text-green-600" />
                      <h3 className="text-2xl font-bold">Key Takeaways</h3>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-1">Lowest Personal Paywall</h4>
                        <p className="text-muted-foreground">
                          Google's AI Premium at $19.99 beats Anthropic and OpenAI by a penny, 
                          but Claude Pro and ChatGPT Plus sit close behind at $20.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-1">Cheapest Multi-Seat Plan</h4>
                        <p className="text-muted-foreground">
                          ChatGPT Team's annual $25/seat beats Claude Team's $30, 
                          though Claude offers larger context windows.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50/50 to-yellow-50/50 p-8 rounded-2xl border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Crown className="w-8 h-8 text-purple-600" />
                      <h3 className="text-2xl font-bold">Premium Insights</h3>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-1">Highest Individual Tier</h4>
                        <p className="text-muted-foreground">
                          ChatGPT Pro's $200/mo dwarfs others—aimed at researchers needing unlimited compute.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">Recent Price Changes</h4>
                        <p className="text-muted-foreground">
                          X Premium+ jumped from $22 → $40 in Feb 2025 when Grok 3 launched, 
                          nearly doubling cost for new subscribers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-2xl border">
                  <h3 className="text-lg font-bold mb-3">Important Notes</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• All figures are USD before tax. Conversions and local taxes vary by country (UK users typically see ~£ price × 0.79).</p>
                    <p>• All providers bill taxes separately in many regions, and seat-based plans enforce minimum user counts.</p>
                    <p>• Pricing as of June 2025 - check provider websites for current rates.</p>
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
                        <TableHead className="text-center">Claude Opus 4</TableHead>
                        <TableHead className="text-center">Gemini 2.5 Pro</TableHead>
                        <TableHead className="text-center">OpenAI o3 + GPT-4.1</TableHead>
                        <TableHead className="text-center">Grok 3 (SuperGrok)</TableHead>
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
                    <h3 className="text-xl font-bold mb-4">Paid Tier Highlights</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground">Claude Opus 4</h4>
                        <p>Extended-thinking mode with web search, 72% SWE-bench coding score, 200k+ context</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Gemini 2.5 Pro</h4>
                        <p>1M-token context, multimodal capabilities, Google Translate backbone for translation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">OpenAI o3 + GPT-4.1</h4>
                        <p>98%+ AIME math scores, full tool integration, 1M-token window</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Grok 3 (SuperGrok)</h4>
                        <p>93% AIME 2025, real-time X/Twitter integration, STEM powerhouse</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8 rounded-2xl border">
                    <h3 className="text-xl font-bold mb-4">Paid Tier Scale</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-600 rounded"></div>
                        <span className="font-semibold text-green-600">9-10:</span>
                        <span>Practically the best you'll find today</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded"></div>
                        <span className="font-semibold text-blue-600">7-8:</span>
                        <span>Very reliable for day-to-day needs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                        <span className="font-semibold text-yellow-600">5-6:</span>
                        <span>Works, but expect the odd hiccup or quota limit</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Benchmarks move fast - think of these as today's feel rather than forever numbers.
                    </p>
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
