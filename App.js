import React from 'react';
import {Button} from 'react-native';
// import { Svg, Path, Rect } from 'react-native-svg';
// import Animated, { runOnUI, useDerivedValue, withTiming } from 'react-native-reanimated';
// import { measure, useSharedValue, Easing, useAnimatedProps, useAnimatedReaction, useAnimatedRef } from 'react-native-reanimated';

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// const d = "M66.039,133.545c0,0-21-57,18-67s49-4,65,8s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41C46.039,146.545,53.039,128.545,66.039,133.545z"



const App = () => {
    // let refPath = React.useRef();
    // let [length, setLength] = React.useState(0);
    // let progress = useSharedValue(0);
    // let [state, setState] = React.useState(1);
    // let refAni = useAnimatedRef();

    // let doubleProgress = useDerivedValue(() => {
    //     return progress.value * 2 * state
    // });


    // let animatedProps = useAnimatedProps((data) => {
        
    //     return ({
    //         strokeDashoffset: length - length * doubleProgress.value
    //     })
    // })
    
    // useDerivedValue(() => {
    //     try {
    //         let res = measure(refAni)
    //         console.log(res)
    
    //     } catch(e) {
    
    //     }
    
      
        
    //   });


    // const x = useSharedValue(0);
    // const x2 = useSharedValue(0);
    
    // const maxX2 = 80;
    // useAnimatedReaction(
    //   () => {
    //     return progress.value * 2;
    //   },
    //   (data) => { // data holds what was returned from the first worklet's execution
    //     console.log({data})
    //     // if (progress.value < 0.3) {
    //         doubleProgress.value = data

    //     // }
    //   },
    //   []
    // );

    

    return <>
        {/* <Button title="Next" onPress={() => 
             {
                progress.value = withTiming(0.5, {
                duration: 3000,
                easing: Easing.linear
            })
        }
        }/>
        <Button title="Previous" onPress={() => 
             progress.value = withTiming(0, {
                duration: 3000,
                easing: Easing.linear
            })
        }/>
        <Button title="Change State" onPress={() => setState(0.5)} ref={refAni}/>
        <Svg width={800} height={800}>
            <AnimatedPath 
                d={d}
                stroke='#f00'
                strokeWidth={3}
                ref={refPath}
                onLayout={() => setLength(refPath.current.getTotalLength())}
                strokeDasharray={length}
                animatedProps={animatedProps}
                // strokeDashoffset={}
               
            />

            <Rect 
                x={100}
                y={100}
                width={300}
                height={100}
                stroke='#0f0'
            />

            <Animated.View />

        </Svg> */}
    </>
}

export default App;