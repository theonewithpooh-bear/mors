
/**
 * Utility functions for sharing content across different platforms
 */

// Base website URL
export const websiteUrl = "https://mors.org.uk";

// Share data for Web Share API and other sharing methods
export const getShareData = () => ({
  title: 'Movement for Real Skills',
  text: 'Join the movement for real skills and help shape the future of education. #RealSkills #EducationReform',
  url: websiteUrl,
});

// Share via Web Share API if available
export const shareViaWebAPI = async (toast) => {
  const shareData = getShareData();
  
  if (navigator.share && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      toast({
        title: "Shared successfully!",
        description: "Thank you for spreading the word.",
        duration: 3000,
      });
      return true;
    } catch (error) {
      if (error.name !== 'AbortError') {
        return false;
      }
      return true; // User canceled, don't show fallback
    }
  }
  return false;
};

// Copy link to clipboard
export const copyToClipboard = (toast) => {
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

// Share via email
export const openMailShare = () => {
  const subject = encodeURIComponent('Movement for Real Skills');
  const body = encodeURIComponent(`Join the movement for real skills and help shape the future of education.\n\n${websiteUrl}\n\n#RealSkills #EducationReform`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};

// Share via SMS/message
export const openMessageShare = () => {
  const body = encodeURIComponent(`Join the movement for real skills: ${websiteUrl}`);
  window.location.href = `sms:?&body=${body}`;
};

// Share to Instagram (copies to clipboard with instructions)
export const openInstagramShare = (toast) => {
  navigator.clipboard.writeText(websiteUrl).then(() => {
    toast({
      title: "Link copied for Instagram",
      description: "Open Instagram app and paste the link in your story or message",
      duration: 4000,
    });
  });
};

// Share to social platforms
export const shareTo = {
  x: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Join the movement for real skills and help shape the future of education.')} ${encodeURIComponent(websiteUrl)} %23RealSkills %23EducationReform`, '_blank'),
  linkedin: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(websiteUrl)}`, '_blank'),
  facebook: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`, '_blank')
};
