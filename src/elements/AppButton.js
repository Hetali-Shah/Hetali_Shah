import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StyleConfig } from '../assets/style';

const AppButton = (props) => {
    const { buttonStyle = {}, name = '', nameStyle = {}, onPress = () => {}, disabled = false } = props;
    return (
        <TouchableOpacity style={[styles.buttonH1, buttonStyle, (disabled) ? styles.btnDisabled : styles.btnEnabled]} disabled={disabled} onPress={() => onPress()}>
            <Text style={[styles.buttonH1Text, (disabled) ? { opacity:0.75 } : { opacity: 1 }, nameStyle ]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonH1: {
        justifyContent:'center',
        alignItems:'center',
        // width:'100%',
        padding: StyleConfig.countPixelRatio(10),
        paddingLeft: StyleConfig.countPixelRatio(20),
        paddingRight: StyleConfig.countPixelRatio(20),
        // height: StyleConfig.buttonHeightH1,
        shadowColor: StyleConfig.black,
        shadowOffset:{ width: 0, height: StyleConfig.countPixelRatio(2) },
        shadowOpacity: 0.25,
        shadowRadius: StyleConfig.countPixelRatio(2),
        borderRadius: StyleConfig.buttonHeightH1,
        backgroundColor: StyleConfig.white,
        elevation: 1
    },
    buttonH1Text: {
        fontFamily: StyleConfig.medium,
        fontSize: StyleConfig.fontSizeH3,
        // lineHeight: StyleConfig.countPixelRatio(20),
        //letterSpacing:StyleConfig.countPixelRatio(1.5),
        color:StyleConfig.white,
        backgroundColor: 'transparent'
    },
    btnDisabled: {

    },
    btnEnabled: {

    }
});

export default AppButton;