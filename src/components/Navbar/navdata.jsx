import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <AiIcons.AiFillHome size={50} />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoIosPaper size={50} />,
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <FaIcons.FaCartPlus size={50} />,
  },
  {
    title: 'News',
    path: '/news',
    icon: <IoIcons.IoMdPeople size={50} />,
  },
  {
    title: 'Store',
    path: '/store',
    icon: <FaIcons.FaEnvelopeOpenText size={50} />,
  },
];