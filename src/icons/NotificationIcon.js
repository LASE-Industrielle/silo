import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import {
  Svg, G, Path, Rect,
} from 'react-native-svg';

const icon = {
  icon: {
    svg: (
      <G id="Group_719" data-name="Group 719" transform="translate(3.869 2.381)">
        <Rect
          id="App_Icon"
          data-name="App Icon"
          width="24"
          height="24"
          transform="translate(-3.869 -2.381)"
          //fill="#fff"
          opacity="0"
        />
        <Path
          id="notification_1_"
          data-name="notification (1)"
          d="M15.273,14.7h-.727V9.5A6.675,6.675,0,0,0,9.891,3.1a2.175,2.175,0,0,0,.218-.953,2.11,2.11,0,1,0-4.218,0,2.175,2.175,0,0,0,.218.953A6.675,6.675,0,0,0,1.455,9.5v5.2H.727a.742.742,0,0,0,0,1.484H4.44A3.514,3.514,0,0,0,7.855,19h.291a3.514,3.514,0,0,0,3.414-2.82h3.713a.742.742,0,0,0,0-1.484ZM7.345,2.152A.655.655,0,1,1,8,2.82.662.662,0,0,1,7.345,2.152Zm.8,15.363H7.855a2.041,2.041,0,0,1-1.9-1.336h4.1A2.041,2.041,0,0,1,8.145,17.516ZM2.909,14.7V9.5A5.15,5.15,0,0,1,8,4.3a5.15,5.15,0,0,1,5.091,5.2v5.2Zm0,0"
          transform="translate(-0.869 0.119)"
          //fill="white"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
};

const NotificationIcon = props => (
  <SvgIcon fill={props.fill} height={24} width={24} name="icon" {...props} svgs={icon}>
    {props.children}
  </SvgIcon>
);

export default NotificationIcon;
