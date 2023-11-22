import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaRegLightbulb size={30} />,
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <MdIcons.MdContactPage size={30} />,
  },
  {
    title: 'News',
    path: '/news',
    icon: <Fa6Icons.FaNewspaper size={30} />,
  },
  {
    title: 'Store',
    path: '/store',
    icon: <Fa6Icons.FaCartShopping size={30} />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaStar size={30} />,
  },
];

export const ContactData = [
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/camisavines",
    icon: <FaIcons.FaLinkedin size={30} />
  },
  {
    title: "Github",
    path: "https://www,github.com/camisavines",
    icon: <FaIcons.FaGithub size={30} />
  }
]