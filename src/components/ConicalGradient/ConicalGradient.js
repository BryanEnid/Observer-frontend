import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AnimatedCircularProgress from './Animation';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { fill: 100 };
  }
  render() {
    return (
      <View>
        <AnimatedCircularProgress size={200} width={10} fill={this.state.fill} prefill={100}>
          {this.props.children}
        </AnimatedCircularProgress>
      </View>
    );
  }
}
