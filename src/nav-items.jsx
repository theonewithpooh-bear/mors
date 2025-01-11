import { HomeIcon, BookOpenIcon, UsersIcon, MessageSquareIcon, FolderIcon, Globe2Icon, NewspaperIcon, GraduationCapIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const useNavItems = () => {
  const { t } = useTranslation();
  
  return [
    {
      title: t("nav.home"),
      to: "/",
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      title: t("nav.learn_more"),
      to: "/learn-more",
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
    {
      title: t("nav.get_involved"),
      to: "/get-involved",
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      title: t("nav.communications"),
      to: "/communications",
      icon: <MessageSquareIcon className="h-4 w-4" />,
    },
    {
      title: "For Schools",
      icon: <GraduationCapIcon className="h-4 w-4" />,
      dropdown: true,
      items: [
        {
          title: "Implementation Guide",
          to: "/for-schools/implementation",
          description: "Step-by-step guide for schools adopting our program"
        },
        {
          title: "Resources",
          to: "/for-schools/resources",
          description: "Educational materials and tools"
        },
        {
          title: "Case Studies",
          to: "/for-schools/case-studies",
          description: "Success stories from partner schools"
        },
        {
          title: "Support",
          to: "/for-schools/support",
          description: "Get help with implementation and ongoing assistance"
        }
      ]
    },
    {
      title: t("nav.manifesto"),
      to: "/manifesto",
      icon: <FolderIcon className="h-4 w-4" />,
    },
    {
      title: "newsroom",
      to: "/newsroom",
      icon: <NewspaperIcon className="h-4 w-4" />,
    },
    {
      title: "positions",
      to: "/positions",
      icon: <Globe2Icon className="h-4 w-4" />,
    },
    // Hidden from navigation but still accessible
    {
      title: "subject reforms",
      to: "/subject-reforms",
      icon: null,
      hidden: true,
    },
    {
      title: "privacy policy",
      to: "/privacy-policy",
      icon: null,
      hidden: true,
    },
    {
      title: "ai usage",
      to: "/ai-usage",
      icon: null,
      hidden: true,
    },
  ];
};