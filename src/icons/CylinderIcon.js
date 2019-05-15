import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path } from 'react-native-svg';

const icon = {
    icon: {
        svg: (
            <G>
                <Path d="M437.72 10.29c-162.3 8.81-251.22 33.53-263.09 73.2-3.26 10.92-3.26 821.48 0 832.4 8.24 27.4
                55.38 48.67 134.9 60.93 76.26 11.5 175.53 15.91 260.41 11.5 156.36-8.43 243.74-33.15 255.43-72.43
                3.26-10.92 3.26-821.48 0-832.4-13.22-44.46-127.23-71.47-310.04-73.2-35.26-.39-70.14-.39-77.61 0zM599.64
                53.4c82.59 5.75 158.85 20.69 180.89 35.64 3.45 2.11 2.68 2.87-9.2 8.24-77.22 35.07-317.32 45.42-465.44
                20.12-34.49-5.75-61.13-12.84-77.61-20.31l-12.84-5.75 5.75-3.64c19.16-12.07 87.95-26.44 156.17-32.77
                60.36-5.36 157.13-6.13 222.28-1.53zM234.6 142.31c32 10.73 82.2 19.35 144.86 25.29 53.08 4.79 187.98
                4.79 241.06 0 72.43-6.71 125.51-17.06 161.73-31.04 3.07-1.34 3.26 17.82 3.26 384.97v386.5l-11.88
                5.56c-32.96 15.14-93.32 26.44-177.82 32.77-38.52 2.88-153.3 2.88-192.58
                 0-83.16-6.13-154.25-19.16-181.46-32.96l-7.28-3.64V522.5c0-368.1.19-387.27 3.45-385.92 1.72.56 9.38 3.24 16.66 5.73z" />
                <Path style={{ color: "red" }} d="M437.72 10.29c-162.3 8.81-251.22 33.53-263.09 73.2-3.26 10.92-3.26 821.48 0 832.4 8.24 27.4
                55.38 48.67 134.9 60.93 76.26 11.5 175.53 15.91 260.41 11.5 156.36-8.43 243.74-33.15 255.43-72.43
                3.26-10.92 3.26-821.48 0-832.4-13.22-44.46-127.23-71.47-310.04-73.2-35.26-.39-70.14-.39-77.61 0zM599.64
                53.4c82.59 5.75 158.85 20.69 180.89 35.64 3.45 2.11 2.68 2.87-9.2 8.24-77.22 35.07-317.32 45.42-465.44
                20.12-34.49-5.75-61.13-12.84-77.61-20.31l-12.84-5.75 5.75-3.64c19.16-12.07 87.95-26.44 156.17-32.77
                60.36-5.36 157.13-6.13 222.28-1.53zM234.6 142.31c32 10.73 82.2 19.35 144.86 25.29 53.08 4.79 187.98
                4.79 241.06 0 72.43-6.71 125.51-17.06 161.73-31.04 3.07-1.34 3.26 17.82 3.26 384.97v386.5l-11.88
                5.56c-32.96 15.14-93.32 26.44-177.82 32.77-38.52 2.88-153.3 2.88-192.58
                 0-83.16-6.13-154.25-19.16-181.46-32.96l-7.28-3.64V522.5c0-368.1.19-387.27 3.45-385.92 1.72.56 9.38 3.24 16.66 5.93z" />

            </G>
        ),
        viewBox: '0 0 1000 1000'
    }
};

const CylinderIcon = props => <SvgIcon fill="#0000FF" name={'icon'} {...props} svgs={icon}>{props.children}</SvgIcon>;

export default CylinderIcon;
