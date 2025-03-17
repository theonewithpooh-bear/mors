
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, Linkedin, Facebook, Mail, MessageCircle, Instagram, Share, ArrowRight } from 'lucide-react';
import { X } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  shareViaWebAPI, 
  copyToClipboard, 
  openMailShare, 
  openMessageShare, 
  openInstagramShare,
  shareTo
} from "@/utils/shareUtils";

const ShareDropdown = ({ toast }) => {
  const handleShare = async (e) => {
    if (navigator.share) {
      e.preventDefault();
      const shared = await shareViaWebAPI(toast);
      if (!shared) {
        showSharingOptions();
      }
    }
  };

  const showSharingOptions = () => {
    // This is handled by the dropdown opening
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="group text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
          onClick={handleShare}
        >
          share now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-white/10 text-white">
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => copyToClipboard(toast)}>
          <Link className="mr-2 h-4 w-4" />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={shareTo.x}>
          <X className="mr-2 h-4 w-4" />
          Share to X
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={shareTo.linkedin}>
          <Linkedin className="mr-2 h-4 w-4" />
          Share to LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={shareTo.facebook}>
          <Facebook className="mr-2 h-4 w-4" />
          Share to Facebook
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={openMailShare}>
          <Mail className="mr-2 h-4 w-4" />
          Share via Email
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={openMessageShare}>
          <MessageCircle className="mr-2 h-4 w-4" />
          Share via Message
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => openInstagramShare(toast)}>
          <Instagram className="mr-2 h-4 w-4" />
          Share to Instagram
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer" onClick={() => openInstagramShare(toast)}>
          <Share className="mr-2 h-4 w-4" />
          Share to Threads
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareDropdown;
