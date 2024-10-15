import { HomeIcon, BookOpenIcon, UsersIcon, GraduationCapIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import SubjectReforms from "./pages/SubjectReforms.jsx";

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
  {
    title: "Subject Reforms",
    to: "/subject-reforms",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <SubjectReforms />,
  },
];