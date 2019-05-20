import React from 'react';
import {View} from 'react-native';

import {Text} from 'native-base';

import styles from '../Styles';
import CylinderIcon from "../icons/CylinderIcon";
import Svg, {Polygon} from "react-native-svg";

import {primary} from '../Colors';

const SiloOverview = (props) => {

    const {silo} = props;

    return (
        <View style={styles.default}>
            <Text>{`${silo.percentage}%`}</Text>
            <View>
                <View>
                    <CylinderIcon width={200} height={200} fill="black"/>
                </View>
                <View style={styles.behind}>
                    <Svg
                        width="120"
                        height="200"
                    >
                        <Polygon
                            points={"0," + (190 - 180 * silo.percentage / 100) + " 120," + (190 - 180 * silo.percentage / 100) + " 120,190 0,190"}
                            fill={primary}
                            strokeWidth="0"
                            stroke="rgb(0,0,0)"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

export default SiloOverview;
