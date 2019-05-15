import React from 'react';
import {View} from 'react-native';

import {Text} from 'native-base';

import styles from '../Styles';
import CylinderIcon from "../icons/CylinderIcon";
import Svg, {Polygon} from "react-native-svg";

const SiloDetails = (props) => {

    return (
        <View style={styles.default}>
            <Text>{`${props.percentage}%`}</Text>
            <View>
                <View>
                    <CylinderIcon width={200} height={200}/>
                </View>
                <View style={styles.behind}>
                    <Svg
                        width="120"
                        height="200"
                    >
                        <Polygon
                            points={"0," + (190 - 180 * props.percentage / 100) + " 120," + (190 - 180 * props.percentage / 100) + " 120,190 0,190"}
                            fill="red"
                            strokeWidth="0"
                            stroke="rgb(0,0,0)"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

export default SiloDetails;