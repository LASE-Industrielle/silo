import React, {useEffect, useReducer, useContext} from 'react';
import {View, Text} from 'react-native';

import {statusReducer} from '../Reducers';
import downloadData from '../services/StatusService';
import UserContext from '../context/UserContext';

import styles from '../Styles';
import CylinderIcon from "../icons/CylinderIcon";
import Svg, {Polygon} from "react-native-svg";

const initialState = {
    percentage: 0,
    errorMessage: '',
    loading: false,
};


const HomeScreen = () => {
    const [state, dispatch] = useReducer(statusReducer, initialState);
    const {token} = useContext(UserContext);

    useEffect(() => {
        downloadData(dispatch, token);
    }, []);

    return (
        <View style={styles.default}>
            <Text>{`${state.percentage}%`}</Text>
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
                            points={"0," + (190 - 180 * state.percentage / 100) + " 120," + (190 - 180 * state.percentage / 100) + " 120,190 0,190"}
                            fill="red"
                            strokeWidth="0"
                            stroke="rgb(0,0,0)"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;
