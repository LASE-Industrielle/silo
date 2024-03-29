import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { Svg, Defs, ClipPath, Ellipse, G, Path, Rect } from 'react-native-svg';
import { primary } from '../Colors';

const icon = {
  icon: {
    svg: (
        <G transform="translate(0.039 1)">
          <Path fill={"#fff"}
                d="M2.5,3.125V.625a.625.625,0,1,1,1.25,0v2.5a.625.625,0,0,1-1.25,0Zm10.625.625a.625.625,0,0,0,.625-.625V.625a.625.625,0,0,0-1.25,0v2.5A.625.625,0,0,0,13.126,3.75ZM20,15a5,5,0,1,1-5-5A5,5,0,0,1,20,15Zm-1.25,0A3.75,3.75,0,1,0,15,18.75,3.754,3.754,0,0,0,18.751,15ZM5,7.5H2.5V10H5ZM2.5,13.75H5v-2.5H2.5ZM6.251,10h2.5V7.5h-2.5Zm0,3.75h2.5v-2.5h-2.5Zm-5,1.126V6.25H15v2.5h1.25V3.875A1.364,1.364,0,0,0,14.9,2.5h-.521v.625a1.25,1.25,0,1,1-2.5,0V2.5h-7.5v.625a1.25,1.25,0,1,1-2.5,0V2.5H1.355A1.364,1.364,0,0,0,0,3.875v11A1.366,1.366,0,0,0,1.355,16.25h7.4V15h-7.4A.118.118,0,0,1,1.251,14.876ZM12.5,10V7.5H10V10Zm4.375,5H15V13.125a.625.625,0,0,0-1.25,0v2.5a.625.625,0,0,0,.625.625h2.5a.625.625,0,0,0,0-1.25Z"
                transform="translate(-0.04 -1)"/>
        </G>
    ),
    viewBox: '0 0 20 20'
  }
};

const CalendarIcon = props => <SvgIcon fill={'white'} height={20} width={20} name={'icon'} {...props}
                                      svgs={icon}>{props.children}</SvgIcon>;

export default CalendarIcon;
