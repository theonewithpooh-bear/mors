import { HomeIcon, BookOpenIcon, UsersIcon, GraduationCapIcon, MessageSquareIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import SubjectReforms from "./pages/SubjectReforms.jsx";
import Communications from "./pages/Communications.jsx";

export const navItems = [
  {
    title: "home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "learn more",
    to: "/learn-more",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <LearnMore />,
  },
  {
    title: "get involved",
    to: "/get-involved",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <GetInvolved />,
  },
  {
    title: "subject reforms",
    to: "/subject-reforms",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <SubjectReforms />,
  },
  {
    title: "communications",
    to: "/communications",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    page: <Communications />,
  },
];