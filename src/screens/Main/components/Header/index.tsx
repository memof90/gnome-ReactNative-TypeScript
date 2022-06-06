//import liraries
import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from "./styles";

import profile from "../../../../assets/profile.jpg";

// Properties 

interface Props {
    tinColor: string;
}

// create a component
const Header = ({ tinColor } : Props ) => {
    return (
        <S.Container
            delay={1000}
            from={{ top: -50 }}
            animate={{ top: 40 }}
            transition={{ type: "timing", duration: 500 }}
        >
            <Feather name='chevron-left' size={30} color={tinColor} />
            <S.Profile source={profile} />
        </S.Container>
    );
};

//make this component available to the app
export default Header;
