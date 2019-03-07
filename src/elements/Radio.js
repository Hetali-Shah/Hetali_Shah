import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { StyleConfig } from '../assets/style';

export default class RadioButton extends Component {

  render() {
    const { onPress, value, currentValue, outerCircleSize, outerCircleWidth, outerCircleColor, outerCircleBackground, innerCircleSize, innerCircleColor } = this.props;

    return(
      <TouchableWithoutFeedback onPress={() => (onPress) ? onPress(value) : {}}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={[{
            height: outerCircleSize || StyleConfig.countPixelRatio(20),
            width: outerCircleSize || StyleConfig.countPixelRatio(20),
            borderRadius: outerCircleSize / 2 || StyleConfig.countPixelRatio(12),
            // borderWidth: outerCircleWidth || StyleConfig.countPixelRatio(2),
            // borderColor: outerCircleColor || StyleConfig.white,
            backgroundColor: outerCircleBackground || 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }]}>
            {
              value === currentValue ?
                <View style={{
                  height: innerCircleSize || StyleConfig.countPixelRatio(16),
                  width: innerCircleSize || StyleConfig.countPixelRatio(16),
                  borderRadius: innerCircleSize / 2 || StyleConfig.countPixelRatio(8),
                  backgroundColor: innerCircleColor || StyleConfig.white,
                }}/>
                : null
            }
          </View>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
