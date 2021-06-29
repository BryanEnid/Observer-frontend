import React from 'react';
import { Fontisto, AntDesign, Entypo } from '@expo/vector-icons';

const img = require('../../assets/school.jpg');

export default [
  {
    icon: <Fontisto name="tesla" size={24} color="black" />,
    title: 'CEO & Product Architect',
    company: 'Tesla Motors, Inc',
    period: 'Feb 2003 - Present',
    bgImg: img,
  },
  {
    icon: <AntDesign name="apple1" size={24} color="black" />,
    title: 'CEO & Chief Engineer',
    company: 'Apple Computers, Inc',
    period: 'Feb 2003 - Present',
    bgImg: img,
  },
  {
    icon: <Entypo name="paypal" size={24} color="black" />,
    title: 'CEO & Executive Director',
    company: 'PayPal',
    period: 'Feb 1998 - Present',
    bgImg: img,
  },
];
