import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Defs, Stop, G, Path, LinearGradient } from 'react-native-svg';
import { arc } from 'd3-shape';
import range from 'lodash/range';
import PropTypes from 'prop-types';

function calculateStopColor(i) {
  return [
    Math.round(beginColor[0] + ((endColor[0] - beginColor[0]) * i) / noOfSeg),
    Math.round(beginColor[1] + ((endColor[1] - beginColor[1]) * i) / noOfSeg),
    Math.round(beginColor[2] + ((endColor[2] - beginColor[2]) * i) / noOfSeg),
  ];
}

const beginColor = [0x00, 0x00, 0x00];
const endColor = [0xff, 0xff, 0xff];
const noOfSeg = 2; // Number of Segments
const LINEAR_GRADIENT_PREFIX_ID = 'gradientRing';
const r1 = 80; // Inner width
const r2 = 100; // Outer width

const point1 = 1;
const point2 = 1;
const point3 = 1;
const point4 = 1;

export default class CircularProgress extends Component {
  renderLinearGradients() {
    let stopAngle1 = (2 * Math.PI) / point1;
    let stopAngle2 = (2 * Math.PI) / point2;
    let stopAngle3 = (2 * Math.PI) / point3;
    let stopAngle4 = (2 * Math.PI) / point4;

    let startAngle1 = 0;
    let startAngle2 = stopAngle1;
    let startAngle3 = stopAngle2;
    let startAngle4 = stopAngle3;

    return [
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 1}
        key={LINEAR_GRADIENT_PREFIX_ID + 1}
        x1={r1 * Math.sin(startAngle1)}
        y1={-r1 * Math.cos(startAngle1)}
        x2={r1 * Math.sin(stopAngle1)}
        y2={-r1 * Math.cos(stopAngle1)}
      >
        <Stop offset="0" stopColor={'red'} />
        <Stop offset="1" stopColor={'red'} />
      </LinearGradient>,
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 2}
        key={LINEAR_GRADIENT_PREFIX_ID + 2}
        x1={r1 * Math.sin(startAngle2)}
        y1={-r1 * Math.cos(startAngle2)}
        x2={r1 * Math.sin(stopAngle2)}
        y2={-r1 * Math.cos(stopAngle2)}
      >
        <Stop offset="0" stopColor={'blue'} />
      </LinearGradient>,
    ];
  }

  renderCirclePaths() {
    const fill = this.extractFill();

    let numberOfPathsToDraw = Math.floor((2 * Math.PI * (fill / 100)) / ((2 * Math.PI) / noOfSeg));
    let rem = ((2 * Math.PI * (fill / 100)) / ((2 * Math.PI) / noOfSeg)) % 1;
    if (rem > 0) {
      numberOfPathsToDraw++;
    }
    let startAngle = 0;
    let stopAngle = -(2 * Math.PI) / noOfSeg;

    return range(1, numberOfPathsToDraw + 1).map((i) => {
      if (i === numberOfPathsToDraw && rem) {
        stopAngle = -2 * Math.PI * (fill / 100);
      }
      const circlePath = arc()
        .innerRadius(r1)
        .outerRadius(r2)
        .startAngle(startAngle)
        .endAngle(stopAngle - 0.005);

      const path = (
        <Path x={this.props.size / 2} y={this.props.size / 2} key={fill + i} d={circlePath()} fill={'url(#' + LINEAR_GRADIENT_PREFIX_ID + (noOfSeg - i + 1) + ')'} />
      );
      startAngle = stopAngle;
      stopAngle -= (2 * Math.PI) / noOfSeg;

      return path;
    });
  }

  extractFill() {
    return Math.min(100, Math.max(0, this.props.fill));
  }

  renderBackgroundPath() {
    // const { size, width, backgroundColor } = this.props;
    // const backgroundPath = arc()
    //   .innerRadius(r1)
    //   .outerRadius(r2)
    //   .startAngle(0)
    //   .endAngle(2 * Math.PI);
    // return <Path x={size / 2} y={size / 2} d={backgroundPath()} fill={backgroundColor} />;
  }

  render() {
    const { size, rotation, style, children } = this.props;
    const fill = this.extractFill();

    return (
      <View style={style}>
        <Svg width={size} height={size}>
          <Defs>{this.renderLinearGradients()}</Defs>
          <G rotate={rotation - 90}>
            {/* {this.renderBackgroundPath()} */}
            {this.renderCirclePaths()}
          </G>
        </Svg>
        {/* {children && children(fill)} */}
      </View>
    );
  }
}

// CircularProgress.propTypes = {
//   backgroundColor: PropTypes.string,
//   children: PropTypes.func,
//   fill: PropTypes.number.isRequired,
//   rotation: PropTypes.number,
//   size: PropTypes.number.isRequired,
//   style: View.propTypes.style,
//   tintColor: PropTypes.string,
//   width: PropTypes.number.isRequired,
//   linecap: PropTypes.string,
// };

// CircularProgress.defaultProps = {
//   tintColor: 'black',
//   backgroundColor: '#e4e4e4',
//   rotation: 90,
//   linecap: 'butt',
// };
