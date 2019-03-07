import React, { Component } from 'react';
import { Content } from 'native-base';
import { ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { LayoutStyle } from '../assets/style';

const Screen = (props) => {
    const {children, style, ...rest} = props;
    return(
        <SafeAreaView style={[{flex: 1}, style]}>
          <Content {...rest} style={[LayoutStyle.content, style]}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            {children}
          </Content>
        </SafeAreaView>
    )
}

export default Screen;
