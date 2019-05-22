import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path } from 'react-native-svg';
import {primary} from "../Colors";

const icon = {
    icon: {
        svg: (
            <G>
                <Path d="M91.53 122H8.3a8.33 8.33 0 0 1-8.3-8.32c0-26.07 19.49-38.82 49.92-38.82s49.91
                 12.75 49.91 38.82a8.32 8.32 0 0 1-8.3 8.32zM49.92 86c-23.77 0-37.4 8.13-38.72
                  25h77.42c-1.31-16.91-14.93-25-38.7-25zm0-16.64c-16.27 0-27.73-17.7-27.73-36C22.19
                   15.49 33.55 0 49.92 0s27.7 15.49 27.7 33.27c0 18.35-11.44 36.05-27.7
                   36.05zm0-11.09c8.87 0 16.63-12 16.63-25 0-12.27-7.27-22.18-16.63-22.18S33.28 21
                   33.28 33.27c0 12.97 7.76 24.96 16.64 24.96z"/>
            </G>
            ),
        viewBox: '0 0 99.82 122.01'
    }
};

const ProfileIcon = props => <SvgIcon fill={primary} height={27} width={27} name={'icon'} {...props}
                                       svgs={icon}>{props.children}</SvgIcon>;

export default ProfileIcon;
