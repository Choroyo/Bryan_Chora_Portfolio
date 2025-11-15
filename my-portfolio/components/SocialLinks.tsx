"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { RiMailSendLine } from "react-icons/ri";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Choroyo",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bryanchora/",
    icon: FaLinkedinIn,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1vs_I7zWrNRrxrP00sxtL5dQcMzOJFXe-/view?usp=sharing",
    icon: HiOutlineDocumentArrowDown,
  },
  {
    label: "Email",
    href: "mailto:bryanchora@gmail.com",
    icon: RiMailSendLine,
  },
];

const SocialLinks = () => (
  <motion.ul
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="flex flex-wrap gap-3"
  >
    {links.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 transition hover:border-accent hover:text-white"
        >
          <Icon className="text-lg" />
          {label}
        </a>
      </li>
    ))}
  </motion.ul>
);

export default SocialLinks;
