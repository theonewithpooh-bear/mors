
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GetInvolved = () => {
  const { toast } = useToast();
  const websiteUrl = "https://mors.org.uk";

  const handleShare = async () => {
    // Share content details
    const shareData = {
      title: 'Movement for Real Skills',
      text: 'Join the movement for real skills and help shape the future of education. #RealSkills #EducationReform',
      url: websiteUrl,
    };

    // Check if Web Share API is supported
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Thank you for spreading the word.",
          duration: 3000,
        });
      } catch (error) {
        // Only show toast on actual error, not when user cancels
        if (error.name !== 'AbortError') {
          showSharingOptions();
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      showSharingOptions();
    }
  };

  const showSharingOptions = () => {
    toast({
      title: "Share this page",
      description: "Spread the word about our mission",
      duration: 5000,
      action: (
        <div className="flex space-x-2 mt-2">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => copyToClipboard()}
          >
            <Link className="h-4 w-4 mr-1" />
            Copy Link
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Join the movement for real skills and help shape the future of education.')} ${encodeURIComponent(websiteUrl)} %23RealSkills %23EducationReform`, '_blank')}
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(websiteUrl)}`, '_blank')}
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`, '_blank')}
          >
            <Facebook className="h-4 w-4" />
          </Button>
        </div>
      ),
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
        duration: 2000,
      });
    }).catch(() => {
      toast({
        title: "Failed to copy link",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
        duration: 2000,
      });
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">get involved</h1>
          
          <div className="space-y-12">
            <section className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed">
                join the movement for real skills and help shape the future of education. there are many ways to get involved and make a difference:
              </p>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">become a volunteer</h3>
                  <p className="text-gray-300 mb-4">
                    contribute your skills and expertise to our various initiatives and working groups.
                  </p>
                  <a 
                    href="/positions" 
                  >
                    <Button 
                      variant="outline" 
                      className="group text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      apply now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">spread the word</h3>
                  <p className="text-gray-300 mb-4">
                    share our mission with your network and help us grow the movement.
                  </p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="group text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                        onClick={(e) => {
                          // Prevent the dropdown from opening if we can use the Share API directly
                          if (navigator.share) {
                            e.preventDefault();
                            handleShare();
                          }
                        }}
                      >
                        share now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-900 border-white/10 text-white">
                      <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => copyToClipboard()}>
                        <Link className="mr-2 h-4 w-4" />
                        Copy link
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Join the movement for real skills and help shape the future of education.')} ${encodeURIComponent(websiteUrl)} %23RealSkills %23EducationReform`, '_blank')}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Share to Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(websiteUrl)}`, '_blank')}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        Share to LinkedIn
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`, '_blank')}>
                        <Facebook className="mr-2 h-4 w-4" />
                        Share to Facebook
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default GetInvolved;
