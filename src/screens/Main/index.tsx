//import liraries
import React, { useState, useEffect } from 'react';
import { ImageSourcePropType, StatusBar} from 'react-native';
import { GestureDetector, Directions, Gesture } from 'react-native-gesture-handler';
import { useDynamicAnimation } from 'moti';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';


// Components
import Header from './components/Header/index';

// Define styles
import * as S from './styles';

// Data
import data from '../../data';
import HeaderText from './components/HeaderText';
import Start from './components/Start/index';
import Avatar from './components/Avatar';
import BottomContent from './components/BottomContent';

// Properties types
export interface GnomeProps {
    name: string;
    description: string;
    wins: number;
    stars: number;
    avatar: ImageSourcePropType;
    color: string;
    tintBlack?: boolean;
    offsetX?: number;
    offsetY?: number;
    height?: number;
}


// create a component
const Main = () => {

    // State
    const [gnome, setGnome] = useState<GnomeProps>(data[0]);
    const [index, setIndex] = useState(0);
    const [firstSlide, setFisrtSlide] = useState(false);
    const [tinColor, setTinColor] = useState('#000');

    // shared value
    const  backgroundColor = useSharedValue(gnome.color);

    const transition = useDynamicAnimation();
    const animationContainer = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value,
    }));

    useEffect(() => {
        setTimeout(() => {
            setTinColor('#000');
        }, 800);
    }, []);

    useEffect(() => {
        if (firstSlide) {
            transition.animateTo({ scale: [3,0] });
            setTimeout(() => ( backgroundColor.value = gnome.color), 500);
            setTimeout(() => setTinColor( gnome.tintBlack ? "#000" : "#fff"), 200);
        } 
    }, [gnome, firstSlide]);

    function handleSlide() {
        if (!firstSlide) setFisrtSlide(true);
        setIndex((prev) => {
          if (prev < data.length - 1) {
            setGnome(data[prev + 1]);
            return prev + 1;
          }
          setGnome(data[0]);
          return 0;
        });
      }
    
      const flingGestureLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(handleSlide);

    return (
        <S.Container style={animationContainer}>
            <StatusBar barStyle={gnome.tintBlack ? "dark-content" : "light-content"} />
            <GestureDetector gesture={flingGestureLeft}>
                <S.Content>
                    <S.Transition 
                        from={{ scale: 0}}
                        state={transition}
                        transition={{ type: "timing", duration: 500}}
                        tinColor={gnome.color}
                    />
                    <Header  tinColor={tinColor} />
                    <HeaderText data={data} index={index} tintColor={tinColor} />
                    <Start stars={gnome.stars}/>
                    <Avatar data={data} index={index} />
                    <BottomContent currentWins={gnome.wins}  tintColor={tinColor}/>
                </S.Content>
            </GestureDetector>
        </S.Container>
    );
};



//make this component available to the app
export default Main;
