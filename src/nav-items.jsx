import { HomeIcon, BookOpenIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Learn More",
    to: "/learn-more",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <LearnMore />,
  },
  {
    title: "Get Involved",
    to: "/get-involved",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <GetInvolved />,
  },
];