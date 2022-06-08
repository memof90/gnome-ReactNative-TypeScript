//import liraries
import React, { useState, useEffect } from 'react';
import { CountUp } from 'use-count-up';

// define your styles
import * as S from './styles';

// Interface
interface Props {
    currentWins: number;
    tintColor: string;
}


// create a component
const BottomContent = ({ currentWins, tintColor }: Props) => {

    const [counting, setCounting] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCounting(true);
        }, 1600);
    },[counting]);

    return (
       <S.Container>
           <S.RateTitleView
            delay={2000}
            from={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ type: "timing" ,duration: 600 }}
           >
            <S.RateTitleText tintColor={tintColor}>Win rate</S.RateTitleText>
           </S.RateTitleView>
           <S.RateValueView
            delay={1700}
            from={{ height: 0 }}
            animate={{ height: 55 }}
            transition={{ type: "timing" ,duration: 600 }}
           >
            <S.RateValueText tintColor={tintColor}>
                <CountUp 
                    key={`${currentWins}`}
                    isCounting={counting}
                    start={currentWins -40 }
                    end={currentWins}
                    duration={1}
                />
                %
            </S.RateValueText>
           </S.RateValueView>
       </S.Container> 
    );
};

//make this component available to the app
export default BottomContent;
