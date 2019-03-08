import React, { Component } from 'react';
import { Content } from 'native-base';
import { ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { LayoutStyle } from '../assets/style';
import AppImages from '../assets/images/index';

const Screen = (props) => {
  const {children, style, ...rest} = props;
  return(
    <ImageBackground style={LayoutStyle.backgroundImage} source={AppImages.background}>
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
    </ImageBackground>
  )
}

export default Screen;
