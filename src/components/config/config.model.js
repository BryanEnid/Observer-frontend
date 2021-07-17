import React from 'react';
import { 
    MaterialCommunityIcons, 
    FontAwesome, 
    FontAwesome5, 
    Fontisto,
    AntDesign, 
    Entypo,
} from '@expo/vector-icons';

export const ACHIEVEMENTS_CONFIG = [
    {
        icon: <FontAwesome5 name="award" size={24} color="black" />,
        title: '1st place best overall',
        institution: 'mlh swios hack',
        obtained: 'december 2020',
    },
    {
        icon: <FontAwesome5 name="award" size={24} color="black" />,
        title: '1st place best overall',
        institution: 'engineeringUSA',
        obtained: 'frebruary 2019',
    },
    {
        icon: <FontAwesome5 name="award" size={24} color="black" />,
        title: 'Honorable Mention',
        institution: 'global mathematics',
        obtained: 'april 2018',
    },
];


export const CERTIFICATIONS_CONFIG =  [
    {
        icon: <MaterialCommunityIcons name="microsoft-azure" size={24} color="black" />,
        company: 'microsoft',
        title: 'microsoft azure essentials',
        obtained: 'obtained december 2021',
    },
    {
        icon: <FontAwesome name="google" size={24} color="black" />,
        company: 'google',
        title: 'google cloud expert',
        obtained: 'obtained october 2020',
    },
    {
        icon: <Fontisto name="oracle" size={45} color="black" />,
        company: 'oracle',
        title: 'java OCA certificate',
        obtained: 'obtained january 2019',
    },
];

export const SKILLS_CONFIG = [
    {
      skill: "Java",
      image: <FontAwesome5 name="java" size={36} color="black" />,
    },
    {
      skill: "JavaScript",
      image: <FontAwesome5 name="js" size={36} color="black" />,
    },
    {
      skill: "React",
      image: <FontAwesome5 name="react" size={36} color="black" />,
    },
    {
      skill: "SEO",
      image: <FontAwesome5 name="html5" size={36} color="black" />,
    },
];

const img = require('../../assets/school.jpg');

export const MOCK_EXPERIENCE_CONFIG =  [
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

  