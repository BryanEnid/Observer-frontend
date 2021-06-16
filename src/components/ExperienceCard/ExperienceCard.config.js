import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const MOCK_EXPERIENCE_CONFIG = [
    {
        icon: <Fontisto name="tesla" size={24} color="black" />,
        title: 'CEO & Product Architect',
        company: 'Tesla Motors, Inc',
        period: 'Feb 2003 - Present',
    },
    {
        icon: <AntDesign name="apple1" size={24} color="black" />,
        title: 'CEO & Chief Engineer',
        company: 'Apple Computers, Inc',
        period: 'Feb 2003 - Present',
    },
    {
        icon: <Entypo name="paypal" size={24} color="black" />,
        title: 'CEO & Executive Director',
        company: 'PayPal',
        period: 'Feb 1998 - Present',
    }
];


