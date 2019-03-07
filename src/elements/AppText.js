import React from "react";
import { StyleSheet, Text } from 'react-native';

const AppText = (props) => {
    const { style = {},text } = props;
    return (
        <Text style={[styles.textStyle, style]}>
            {text}
        </Text>
    );

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});
export default AppText;