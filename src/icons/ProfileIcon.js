import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { Svg, Defs, ClipPath, Ellipse, G, Path, Rect } from 'react-native-svg';
import { primary } from '../Colors';

const icon = {
  icon: {
    svg: (
      <Svg>
        <Defs>
          <ClipPath id="clip-path">
            <Rect id="Rectangle_1627" data-name="Rectangle 1627" width="14" height="16.4" transform="translate(1485 19)" fill="white" stroke="white" stroke-width="1"/>
          </ClipPath>
        </Defs>
        <G id="Group_586" data-name="Group 586" transform="translate(-1471.966 -16)">
          <Rect id="App_Icon" data-name="App Icon" width="24" height="24" transform="translate(1471.967 16)" fill="white" opacity="0"/>
          <G id="Mask_Group_15" data-name="Mask Group 15" transform="translate(-8.034 1)" clip-path="url(#clip-path)">
            <G id="Group_588" data-name="Group 588" transform="translate(1485.001 19.419)">
              <G id="Ellipse_292" data-name="Ellipse 292" transform="translate(3.206 0)" fill="none" stroke="white" stroke-width="1.3">
                <Ellipse cx="3.673" cy="3.688" rx="3.673" ry="3.688" stroke="none"/>
                <Ellipse cx="3.673" cy="3.688" rx="3.023" ry="3.038" fill="none"/>
              </G>
              <G id="Path_912" data-name="Path 912" transform="translate(0 21.942) rotate(-90)">
                <Path id="Path_913" data-name="Path 913" d="M6.908,0A6.88,6.88,0,1,1,0,6.879,6.894,6.894,0,0,1,6.908,0Z" transform="translate(0 0)" fill="none"/>
                <Path id="Path_914" data-name="Path 914" d="M.811,0a6.88,6.88,0,1,1,0,13.759H.646a.661.661,0,0,1,.017-1.322H.679l.132,0a5.557,5.557,0,1,0,0-11.115A.661.661,0,1,1,.811,0Z" transform="translate(6.096)" fill="white"/>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),
    viewBox: '0 0 24 24'
  }
};

const ProfileIcon = props => <SvgIcon fill={'white'} height={24} width={24} name={'icon'} {...props}
                                      svgs={icon}>{props.children}</SvgIcon>;

export default ProfileIcon;
