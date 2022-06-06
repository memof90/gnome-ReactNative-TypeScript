//import liraries
import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useAnimationState } from "moti";

//  styles
import * as S from './styles';

//  interface 
export interface Props {
    stars: number;
}

// create a component
const Start = ({ stars }: Props) => {

    const [scale, setScale] = useState(0);

    const contentAnimation = useAnimationState({
        expand: {
            height: 80,
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setScale(1);
            contentAnimation.transitionTo("expand");
        }, 300);
    },[])

    return (
        <S.StartContent
            delay={2000}
            from={{ scale, height: 60}}
            animate={{ scale: 1}}
            state={contentAnimation}
            transition={{ type: "timing"}}
        >
        <Fontisto name="star" size={22} />
        <S.StarText 
            delay={2200}
            from={{ opacity: 0, top: 20 }}
            animate={{ opacity: 1, top: 45 }}
            transition={{ type: "timing", duration: 300 }}
        >
            {stars}
        </S.StarText>

        </S.StartContent>
    );
};

//make this component available to the app
export default Start;
