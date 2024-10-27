import { HomeIcon, BookOpenIcon, UsersIcon, MessageSquareIcon } from "lucide-react";

export const navItems = [
  {
    title: "home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "learn more",
    to: "/learn-more",
    icon: <BookOpenIcon className="h-4 w-4" />,
  },
  {
    title: "get involved",
    to: "/get-involved",
    icon: <UsersIcon className="h-4 w-4" />,
  },
  {
    title: "communications",
    to: "/communications",
    icon: <MessageSquareIcon className="h-4 w-4" />,
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

export const youthNavItems = [
  {
    title: "home",
    to: "/youth",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "learn more",
    to: "/youth/learn-more",
    icon: <BookOpenIcon className="h-4 w-4" />,
  },
  {
    title: "get involved",
    to: "/youth/get-involved",
    icon: <UsersIcon className="h-4 w-4" />,
  },
  {
    title: "communications",
    to: "/youth/communications",
    icon: <MessageSquareIcon className="h-4 w-4" />,
  },
];