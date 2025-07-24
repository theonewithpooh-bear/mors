
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Printer } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { 
  shareViaWebAPI, 
  copyToClipboard, 
  openMailShare, 
  shareTo 
} from "@/utils/shareUtils";
import DOMPurify from 'dompurify';

const ArticleDetail = ({ article, onBack }) => {
  const { toast } = useToast();
  const articleContentRef = useRef(null);
  
  if (!article) return null;
  
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Educational Reform':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'AI in Education':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'MORS Updates':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Tech & Society':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  const handleShareArticle = async () => {
    const articleShareData = {
      title: article.title,
      text: article.description,
      url: window.location.href
    };
    
    if (navigator.share && navigator.canShare(articleShareData)) {
      try {
        await navigator.share(articleShareData);
        toast({
          title: "Shared successfully",
          description: "Thank you for sharing this article.",
          duration: 3000,
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          // Show dropdown instead
        }
      }
    }
  };
  
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
      toast({
        title: "Print Error",
        description: "Please allow pop-ups to print this article.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Sanitize content before printing
    const sanitizedContent = DOMPurify.sanitize(article.content);
    const sanitizedTitle = DOMPurify.sanitize(article.title);
    const sanitizedAuthor = DOMPurify.sanitize(article.author);
    const sanitizedCategory = DOMPurify.sanitize(article.category);
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${sanitizedTitle} - MORS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }
          .article-header {
            margin-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 1rem;
          }
          .article-title {
            font-size: 2.25rem;
            font-weight: bold;
            margin-bottom: 0.75rem;
          }
          .article-meta {
            font-size: 0.875rem;
            color: #666;
            margin-bottom: 1rem;
          }
          .article-category {
            display: inline-block;
            background-color: #f0f0f0;
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }
          .article-image {
            max-width: 100%;
            height: auto;
            margin: 1rem 0 2rem;
            border-radius: 0.5rem;
          }
          .article-content {
            font-size: 1.125rem;
          }
          .article-footer {
            margin-top: 2rem;
            font-size: 0.875rem;
            color: #666;
            border-top: 1px solid #eaeaea;
            padding-top: 1rem;
          }
          @media print {
            body {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="article-header">
          <div class="article-category">${sanitizedCategory}</div>
          <h1 class="article-title">${sanitizedTitle}</h1>
          <div class="article-meta">
            By ${sanitizedAuthor} | ${formattedDate} | ${article.readTime} min read
          </div>
        </div>
        
        <img src="${article.image}" alt="${sanitizedTitle}" class="article-image" />
        
        <div class="article-content">
          ${sanitizedContent}
        </div>
        
        <div class="article-footer">
          © ${new Date().getFullYear()} MORS (Movement of Real Skills) | mors.org.uk
        </div>
      </body>
      </html>
    `;
    
    // Use safer DOM manipulation instead of document.write
    printWindow.document.open();
    const parser = new DOMParser();
    const doc = parser.parseFromString(printContent, 'text/html');
    printWindow.document.documentElement.innerHTML = doc.documentElement.innerHTML;
    printWindow.document.close();
    
    printWindow.onload = () => {
      printWindow.print();
      // Some browsers will automatically close the window after printing
      // For those that don't, we'll close it after a short delay
      setTimeout(() => {
        if (!printWindow.closed) {
          printWindow.close();
        }
      }, 500);
    };
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <Button 
        variant="ghost" 
        className="mb-4 text-gray-600 hover:text-black"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to articles
      </Button>
      
      <div className="relative overflow-hidden rounded-xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10" />
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
          <Badge className={`${getCategoryColor(article.category)} border mb-4`}>
            {article.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <img 
              src={article.authorImage} 
              alt={article.author} 
              className="w-12 h-12 rounded-full border border-gray-200 mr-4"
            />
            <div>
              <p className="font-medium text-black">{article.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-3">{formattedDate}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white text-black border-gray-200">
                <DropdownMenuItem onClick={() => copyToClipboard(toast)} className="cursor-pointer hover:bg-gray-100">
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareTo.x} className="cursor-pointer hover:bg-gray-100">
                  Share to X
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareTo.linkedin} className="cursor-pointer hover:bg-gray-100">
                  Share to LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareTo.facebook} className="cursor-pointer hover:bg-gray-100">
                  Share to Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={openMailShare} className="cursor-pointer hover:bg-gray-100">
                  Share via Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrint}>
              <Printer className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <article className="prose prose-lg max-w-none mb-12" ref={articleContentRef}>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
        </article>
        
        <div className="my-12 border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full px-6" onClick={shareTo.x}>
              Share on X
            </Button>
            <Button variant="outline" className="rounded-full px-6" onClick={shareTo.linkedin}>
              Share on LinkedIn
            </Button>
            <Button variant="outline" className="rounded-full px-6" onClick={shareTo.facebook}>
              Share on Facebook
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetail;
