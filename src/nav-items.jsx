import { HomeIcon, BookOpenIcon, UsersIcon, MessageSquareIcon, FolderIcon, Globe2Icon, NewspaperIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const useNavItems = () => {
  const { t } = useTranslation();
  
  return [
    {
      name: t("nav.home"),
      url: "/",
      icon: HomeIcon,
    },
    {
      name: t("nav.learn_more"),
      url: "/learn-more",
      icon: BookOpenIcon,
    },
    {
      name: t("nav.get_involved"),
      url: "/get-involved",
      icon: UsersIcon,
    },
    {
      name: t("nav.communications"),
      url: "/communications",
      icon: MessageSquareIcon,
    },
    {
      name: t("nav.manifesto"),
      url: "/manifesto",
      icon: FolderIcon,
    },
    {
      name: "newsroom",
      url: "/newsroom",
      icon: NewspaperIcon,
    },
    {
      name: "positions",
      url: "/positions_to_be_released",
      icon: Globe2Icon,
    },
    // Hidden from navigation but still accessible
    {
      name: "subject reforms",
      url: "/subject-reforms",
      icon: null,
      hidden: true,
    },
    {
      name: "privacy policy",
      url: "/privacy-policy",
      icon: null,
      hidden: true,
    },
    {
      name: "ai usage",
      url: "/ai-usage",
      icon: null,
      hidden: true,
    },
  ];
};