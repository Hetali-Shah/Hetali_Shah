import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StyleConfig, LayoutStyle } from '../assets/style';
import AppIcon from  './AppIcon';

const CircleButton = (props) => {
    const { style = {}, iconStyle = {}, name = '', family = '', onPress = () => {} } = props;
    return (
        <TouchableOpacity style={[styles.circles, style]} onPress={() => onPress()}>
            <AppIcon name={name} family={family} style={iconStyle}/>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    circles: {
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        borderRadius: StyleConfig.countPixelRatio(25),
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default CircleButton;