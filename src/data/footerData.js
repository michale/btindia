import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Boundless Tours",
  about:
    "Welcome to our Trip and Tour Agency. Boundless Tours is one of the leading Travel Management companies in Chennai, Tamil Nadu, India offering 360 degree travel solutions for individuals and corporates.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+91 98840 29234",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "sales@btindia.co.in",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Boundless Tours \n Shop No : 325, 3rd Floor Plaza Centre \n No. 129  G.N Chetty Road, Chennai - 600006. \n Landmark: Near Gemini Flyover \nTN India.",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
