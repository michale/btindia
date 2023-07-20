import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: []
  },
  {
    id: 4,
    name: "About Us",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+91 98840 29234",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "sales@btindia.co.in",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
