import { IoMdHome } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { BsCartCheck, BsCartX, BsClipboard2Check } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

import { CiShop } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";


import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-03.png';
import UserThree from '../images/user/user-05.png';
import UserFour from '../images/user/user-06.png';
import UserFive from '../images/user/user-07.png';

interface DashboardCardsItem {
  id: string;
  title: string;
  icon: JSX.Element;
  desc: string,
  rate: string,
  levelUp: Boolean,
  bgColor: string,
  textColor: string
}

interface SidebarMenuItem {
  id: string;
  name: string;
  icon: JSX.Element;
  href: string;
}
interface OurServicesItem {
  id: string;
  title: string;
  icon: JSX.Element;
  href: string;
  bgColor: string;
  textColor: string
}

interface NotificationItem {
  id: string;
  title: string;
  date: string;
  notification: string
}

interface Messageitem {
  id: string;
  name: string;
  time: string;
  message: string;
  profile: any
}

interface RecentOrdersItems {
  id: string;
  name: string;
  orderNumber: string;
  profile: any;
  amount: string;
  status: string
}
interface CustomerFeedbackItems {
  id: string;
  name: string;
  rating: string;
  profile: any;
  feedback: string;
}

export const CustomerFeedback: CustomerFeedbackItems[] = [
  {
    id: "1",
    name: " Wade Warren",
    profile: UserOne,
    rating: "4",
    feedback: "The food was so excellent and so was the service"
  },
  {
    id: "2",
    name: "Jane Cooper",
    profile: UserTwo,
    rating: "5",
    feedback: ""
  },
  {
    id: "3",
    name: "Guy Hawkins",
    profile: UserThree,
    rating: "4",
    feedback: "The food was so excellent and so was the service"
  },
  {
    id: "4",
    name: "Kristin Watson",
    profile: UserFour,
    rating: "4",
    feedback: "The food was so excellent and so was the service"
  },
  {
    id: "5",
    name: "Cody Fisher",
    profile: UserFive,
    rating: "4",
    feedback: "The food was so excellent and so was the service"
  },

]

export const RecentOrders: RecentOrdersItems[] = [
  {
    id: "1",
    name: " Wade Warren",
    profile: UserOne,
    orderNumber: "154321 ",
    amount: "$124.00",
    status: "Delivered"
  },
  {
    id: "2",
    name: "Jane Cooper",
    profile: UserTwo,
    orderNumber: "4891234 ",
    amount: "$345.02",
    status: "Delivered"
  },
  {
    id: "3",
    name: "Guy Hawkins",
    profile: UserThree,
    orderNumber: "789345 ",
    amount: "$45.88",
    status: "Cancelled"
  },
  {
    id: "4",
    name: "Kristin Watson",
    profile: UserFour,
    orderNumber: "2096744 ",
    amount: "$65.00",
    status: "Pending"
  },
  {
    id: "5",
    name: "Cody Fisher",
    profile: UserFive,
    orderNumber: "9675566",
    amount: "$565.00",
    status: "Delivered"
  },

]

export const DashboardCards: DashboardCardsItem[] = [
  {
    id: "1",
    title: "Total Orders",
    desc: "75",
    rate: "3%",
    levelUp: true,
    icon: <CiShop size={"30px"} />,
    bgColor: "bg-blue-200",
    textColor: "text-blue-800"
  },
  {
    id: "2",
    title: "Total Delivered",
    desc: "70",
    rate: "3%",
    levelUp: false,
    icon: <BsCartCheck size={"30px"} />,
    bgColor: "bg-green-200",
    textColor: "text-green-800"
  },
  {
    id: "3",
    title: "Total Cancelled",
    desc: "05",
    rate: "3%",
    levelUp: true,
    icon: <BsCartX size={"30px"} />,
    bgColor: "bg-red-200",
    textColor: "text-red-800"
  },
  {
    id: "4",
    title: "Total Revenue",
    desc: "$12k",
    rate: "3%",
    levelUp: false,
    icon: <GiReceiveMoney size={"30px"} />,
    bgColor: "bg-pink-200",
    textColor: "text-pink-800"
  },
];

export const sidebarMenu: SidebarMenuItem[] = [
  {
    id: "1",
    name: "Home",
    icon: <IoMdHome size={"30px"} />,
    href: "/"
  },
  {
    id: "2",
    name: "Stats",
    icon: <IoStatsChart size={"25px"} />,
    href: "/stats"
  }
  ,
  {
    id: "3",
    name: "orders",
    icon: <BsClipboard2Check size={"25px"} />,
    href: "/orders"
  }
  ,
  {
    id: "4",
    name: "wallet",
    icon: <CiWallet size={"25px"} />,
    href: "/wallet"
  },
  {
    id: "4",
    name: "shop",
    icon: <FiShoppingBag size={"25px"} />,
    href: "/shop"
  }
];

export const Messages: Messageitem[] = [
  {
    id: "1",
    name: " Robert Jhon",
    profile: UserOne,
    message: "are you available ? ",
    time: "20 minutes ago"
  },
  {
    id: "2",
    name: " John Doe",
    profile: UserTwo,
    message: "good work .. ",

    time: "10 minutes ago"
  },
  {
    id: "3",
    name: " Robert Jhon",
    profile: UserOne,
    message: "can we talk? ",
    time: "40 minutes ago"
  },
  {
    id: "4",
    name: " John Doe",
    profile: UserTwo,
    message: "okay... ",
    time: "2 hours ago"
  },

]

export const Notiffications: NotificationItem[] = [
  {
    id: "1",
    title: "Edit your information in a swipe",
    notification: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2024"
  },
  {
    id: "2",
    title: "It is a long established fact ",
    notification: "that a reader will be distracted by the readable.",
    date: "11 Dec, 2024"

  },
  {
    id: "3",
    title: "There are many variations",
    notification: " of passages of Lorem Ipsum available, but the majority have suffered",
    date: "11 Dec, 2024"
  },
  {
    id: "4",
    title: "varitries",
    notification: "lorem ipsum",
    date: "11 Dec, 2024"

  }

]

export const OurServicesItems: OurServicesItem[] = [
  {
    id: "1",
    title: "Goals",
    icon: <AiOutlineAim size={"30px"} />,
    bgColor: "bg-orange-200",
    textColor: "text-orange-600",
    href: ""
  },
  {
    id: "2",
    title: "Popular Dishes",
    icon: <PiHamburgerBold size={"30px"} />,
    bgColor: "bg-blue-200",
    textColor: "text-blue-600",
    href: ""

  },
  {
    id: "3",
    title: "Menus",
    icon: <BiDish size={"30px"} />,
    bgColor: "bg-green-200",
    textColor: "text-green-800",
    href: ""

  },
]