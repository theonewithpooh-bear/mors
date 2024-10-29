import { HomeIcon, BookOpenIcon, UsersIcon, MessageSquareIcon, FolderIcon } from "lucide-react";
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
      title: t("nav.articles"),
      to: "/articles",
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
    {
      title: t("nav.file_store"),
      to: "/file-store",
      icon: <FolderIcon className="h-4 w-4" />,
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
  ];
};