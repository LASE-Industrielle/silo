import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path, Svg, Rect } from 'react-native-svg';
import { primary } from '../Colors';

const icon = {
  icon: {
    svg: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <G id="Group_581" data-name="Group 581" transform="translate(-326 -42)">
          <G id="Group_584" data-name="Group 584" transform="translate(329.869 44.381)">
            <Rect id="App_Icon" data-name="App Icon" width="24" height="24" transform="translate(-3.869 -2.381)" fill="#fff" opacity="0"/>
            <Path id="notification_1_" data-name="notification (1)" d="M15.273,14.7h-.727V9.5A6.675,6.675,0,0,0,9.891,3.1a2.175,2.175,0,0,0,.218-.953,2.11,2.11,0,1,0-4.218,0,2.175,2.175,0,0,0,.218.953A6.675,6.675,0,0,0,1.455,9.5v5.2H.727a.742.742,0,0,0,0,1.484H4.44A3.514,3.514,0,0,0,7.855,19h.291a3.514,3.514,0,0,0,3.414-2.82h3.713a.742.742,0,0,0,0-1.484ZM7.345,2.152A.655.655,0,1,1,8,2.82.662.662,0,0,1,7.345,2.152Zm.8,15.363H7.855a2.041,2.041,0,0,1-1.9-1.336h4.1A2.041,2.041,0,0,1,8.145,17.516ZM2.909,14.7V9.5A5.15,5.15,0,0,1,8,4.3a5.15,5.15,0,0,1,5.091,5.2v5.2Zm0,0" transform="translate(-1 0.119)" fill="#6cc799"/>
            <G id="Path_907" data-name="Path 907" transform="translate(6.131 -0.381)" fill="none" opacity="0.4">
              <Path d="M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z" stroke="none"/>
              <Path d="M 7 1 C 3.691590309143066 1 1 3.691590309143066 1 7 C 1 10.30840969085693 3.691590309143066 13 7 13 C 10.30840969085693 13 13 10.30840969085693 13 7 C 13 3.691590309143066 10.30840969085693 1 7 1 M 7 0 C 10.86598968505859 0 14 3.134010314941406 14 7 C 14 10.86598968505859 10.86598968505859 14 7 14 C 3.134010314941406 14 0 10.86598968505859 0 7 C 0 3.134010314941406 3.134010314941406 0 7 0 Z" stroke="none" fill="#6cc799"/>
            </G>
            <Path id="Path_771" data-name="Path 771" d="M3,0A3,3,0,1,1,0,3,3,3,0,0,1,3,0Z" transform="translate(10.131 3.619)" fill="#6cc799"/>
          </G>
        </G>
      </Svg>
    ),
    viewBox: '0 0 24 24'
  }
};

const NotificationActiveIcon = props => <SvgIcon fill={'white'} height={24} width={24} name={'icon'} {...props}
                                           svgs={icon}>{props.children}</SvgIcon>;

export default NotificationActiveIcon;