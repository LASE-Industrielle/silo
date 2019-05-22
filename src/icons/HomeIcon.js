import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path } from 'react-native-svg';
import {primary} from "../Colors";

const icon = {
    icon: {
        svg: (
            <G>
                <Path d="M20.54 24.7a2.68 2.68 0 0 0 1 .3 2.55 2.55 0 0 0 1.93-1A19.12 19.12 0 0 1 40 14.43 2.23
                 2.23 0 0 0 40 10a23.56 23.56 0 0 0-20.36 11.73 2.25 2.25 0 0 0 .9 2.97z"/>
                <Path d="M78.12 120.54h-4.61V33.48a33.34 33.34 0 0 0-66.66-1v88.1H2.23a2.23 2.23 0 1 0 0
                4.46h76a2.29 2.29 0 0 0 2.24-2.23 2.33 2.33 0 0 0-2.35-2.27zM40.18 4.46a29.06 29.06 0 0 1 28.87
                26.05H11.31A29.06 29.06 0 0 1 40.18 4.46zM34.52 92H25.3V81.85h9.22zm0-14.43H25.3V67.41h9.22zM25.3
                 96.43h9.22v10.12H25.3zM34.52 63H25.3V52.83h9.22zm-9.22 48h9.22v9.53H25.3zm13.7 9.54V41.67a2.24
                  2.24 0 1 0-4.47 0v6.69H25.3v-6.69a2.24 2.24 0 1 0-4.47 0v78.87h-9.67V35h58v85.57z" />
                <Path d="M59.67 39.43a2.29 2.29 0 0 0-2.23 2.24v69.64a2.23 2.23 0 1 0 4.46 0V41.67a2.29 2.29
                 0 0 0-2.23-2.24z" />

            </G>
        ),
        viewBox: '0 0 80.51 125'
    }
};

const HomeIcon = props => <SvgIcon fill={primary} height={22} width={22}  name={'icon'} {...props}
                                      svgs={icon}>{props.children}</SvgIcon>;

export default HomeIcon;
