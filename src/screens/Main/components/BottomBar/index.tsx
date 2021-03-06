//import liraries
import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from "react-native";

//  Icons image
import icon from "../../../../assets/caveira.png";
import Bottom from "../../../../assets/bottomFill.svg";

// define your styles
import * as S from "./styles";

// Interface
interface Props {
    tintColor: string;
  }

// create a component
const BottomBar = ({ tintColor }: Props) => {

    const { width } = useWindowDimensions();
    const [translateY, setTranslateY] = useState(100);

    useEffect(() => {
        setTimeout(() => setTranslateY(0), 1000); 
    },[]);

    return (
        <S.BottomContainer
        from={{ translateY }}
        animate={{ translateY: 0 }}
        delay={1000}
        transition={{ type: "timing", duration: 600 }}
      >
        <S.BottomCircle>
          <S.BottomCircleIcon
            source={icon}
            tintColor={tintColor}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            delay={1600}
          />
        </S.BottomCircle>
        <Bottom width={width} color="white" style={{ position: "absolute" }} />
        <S.BottomContent
          delay={1000}
          from={{ translateY: 80, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "timing", duration: 800 }}
        >
          <S.BottomText>Let's Go</S.BottomText>
          <S.ArrowsView>
            <S.Arrow color="#4d4d4d" />
            <S.Arrow color="gray" />
            <S.Arrow color="white" />
          </S.ArrowsView>
        </S.BottomContent>
      </S.BottomContainer>
    );
};



//make this component available to the app
export default BottomBar;
