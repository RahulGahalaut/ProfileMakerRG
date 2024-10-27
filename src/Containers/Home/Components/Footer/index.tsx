import {
  LinkedIn,
  LocationOnOutlined,
  Phone,
  EmailOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
const IS_MOBILE = window.innerWidth < 768;

const linksData = [
  {
    href: "mailto:rahulgahalaut333@gmail.com",
    Icon: EmailOutlined,
    text: "rahulgahalaut333@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/rahul-gahalaut-049827193/",
    Icon: LinkedIn,
    text: "LinkedIn",
  },
  {
    href: "tel:9027237648",
    Icon: Phone,
    text: "9027237648",
  },
  {
    href: "https://www.google.co.in/maps/place/Gurugram",
    Icon: LocationOnOutlined,
    text: "Gurgaon, India",
  },
];

const ContactLinks = ({ href, Icon, text }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 md:gap-1 px-4 md:px-0 py-3 md:py-0 border-b md:border-b-0 last:border-b-0 text-sm md:text-base"
    >
      <Icon fontSize={"inherit"} />
      {text}
    </a>
  );
};

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-12 text-white md:w-full md:h-full bg-purple-900/70">
      {linksData.map((linksData) => (
        <ContactLinks {...linksData} />
      ))}
    </div>
  );
};

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return IS_MOBILE ? (
    <div className="fixed right-4 bottom-4">
      {showContact ? (
        <>
          <dialog
            open={true}
            className="flex flex-col rounded-lg bottom-[120%] left-[-500%] overflow-hidden"
            onClick={() => setShowContact(false)}
          >
            <Contacts />
          </dialog>
          <ArrowDropDown
            fontSize="large"
            className="absolute bottom-[70%] right-[8%] text-white/70"
          />
          <div className="px-2 py-2 bg-slate-900/40 rounded-full">
            <KeyboardDoubleArrowDownIcon
              fontSize={"medium"}
              onClick={() => setShowContact(false)}
              className="text-white"
            />
          </div>
        </>
      ) : (
        <div className="px-2 py-2 bg-slate-900/40 rounded-full animate-bounce">
          <PersonAddAlt1Icon
            fontSize="medium"
            onClick={() => setShowContact(true)}
            className="text-white"
          />
        </div>
      )}
    </div>
  ) : (
    <footer className="h-0 md:h-[10%] w-full bg-slate-900/90">
      <Contacts />
    </footer>
  );
};

export default Footer;
