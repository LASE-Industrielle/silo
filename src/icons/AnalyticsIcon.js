import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path } from 'react-native-svg';

const icon = {
  icon: {
    svg: (
      <G>
        <Path d="M198.88 22.11l-37.74 103.08a11.33 11.33 0 0 1 2.5 7.1 10.62 10.62 0 1 1-21.22 0 11.4 11.4
                 0 0 1 2.23-6.77l-18-43.82a10.19 10.19 0 0 1-5-1.86l-16.79 8.69a4.89 4.89 0 0 1-4 .26 5.22 5.22
                  0 0 1-3-2.77L78.52 43.35l-26.7 72.87a11.35 11.35 0 0 1 2.47 7 10.89 10.89 0 0 1-10.61 11.14 10.89
                   10.89 0 0 1-10.61-11.14 11.47 11.47 0 0 1 1.82-6.22l-8.67-17.75A10.12 10.12 0 0 1 20 96.76L7
                    102.2a5.06 5.06 0 0 1-6.69-3 5.48 5.48 0 0 1 2.86-7l13-5.47a10.76 10.76 0 0 1 10.47-9.64A10.87
                     10.87 0 0 1 37.33 88.2a11.49 11.49 0 0 1-1.88 6.32l7.6 15.56 26.84-73.24a11.36 11.36 0 0 1-2.42-7
                      10.62 10.62 0 1 1 21.22 0 11.42 11.42 0 0 1-2 6.44L105 76.43l12.12-6.28a10.59 10.59 0 1
                      1 21.17.52 11.4 11.4 0 0 1-2.16 6.67L152.76 118l36.52-99.74a11.37 11.37 0 0 1-2.5-7.1 10.62
                      10.62 0 1 1 21.22 0 10.93 10.93 0 0 1-9.12 10.95z"/>
      </G>
    ),
    viewBox: '0 0 208 143.42'
  }
};

const AnalyticsIcon = props => <SvgIcon fill="white" height={27} width={27} name={'icon'} {...props}
                                        svgs={icon}>{props.children}</SvgIcon>;

export default AnalyticsIcon;