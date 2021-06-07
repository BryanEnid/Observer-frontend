import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Defs, Stop, G, Path, LinearGradient } from 'react-native-svg';
import { arc } from 'd3-shape';
import range from 'lodash/range';
// import PropTypes from 'prop-types';

function calculateStopColor(i) {
  return [
    Math.round(beginColor[0] + ((endColor[0] - beginColor[0]) * i) / noOfSeg),
    Math.round(beginColor[1] + ((endColor[1] - beginColor[1]) * i) / noOfSeg),
    Math.round(beginColor[2] + ((endColor[2] - beginColor[2]) * i) / noOfSeg),
  ];
}

const beginColor = [0x00, 0x00, 0x00];
const endColor = [0xff, 0xff, 0xff];
const noOfSeg = 4; // Number of Segments
const LINEAR_GRADIENT_PREFIX_ID = 'gradientRing';
const r1 = 82; // Inner width
const r2 = 87; // Outer width

const point1 = 1;
const point2 = 1;
const point3 = 1;

export default class CircularProgress extends Component {
  renderLinearGradients() {
    let startAngle = 0;
    let stopAngle = (2 * Math.PI) / noOfSeg;

    return [
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 1}
        key={LINEAR_GRADIENT_PREFIX_ID + 1}
        x1={r1 * Math.sin(startAngle)}
        y1={-r1 * Math.cos(startAngle)}
        x2={r1 * Math.sin(stopAngle)}
        y2={-r1 * Math.cos(stopAngle)}
      >
        <Stop offset="0" stopColor={'#C7F954'} />
      </LinearGradient>,
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 2}
        key={LINEAR_GRADIENT_PREFIX_ID + 2}
        x1={r1 * Math.sin(startAngle)}
        y1={-r1 * Math.cos(startAngle)}
        x2={r1 * Math.sin(stopAngle)}
        y2={-r1 * Math.cos(stopAngle)}
      >
        <Stop offset="0" stopColor={'#A1F7A1'} />
      </LinearGradient>,
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 3}
        key={LINEAR_GRADIENT_PREFIX_ID + 3}
        x1={r1 * Math.sin(startAngle)}
        y1={-r1 * Math.cos(startAngle)}
        x2={r1 * Math.sin(stopAngle)}
        y2={-r1 * Math.cos(stopAngle)}
      >
        <Stop offset="0" stopColor={'#14C2DD'} />
      </LinearGradient>,
      <LinearGradient
        id={LINEAR_GRADIENT_PREFIX_ID + 4}
        key={LINEAR_GRADIENT_PREFIX_ID + 4}
        x1={r1 * Math.sin(startAngle)}
        y1={-r1 * Math.cos(startAngle)}
        x2={r1 * Math.sin(stopAngle)}
        y2={-r1 * Math.cos(stopAngle)}
      >
        <Stop offset="0" stopColor={'#FF5C4D'} />
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
        <Path
          x={this.props.size / 2}
          y={this.props.size / 2}
          key={fill + i}
          d={circlePath()}
          fill={'url(#' + LINEAR_GRADIENT_PREFIX_ID + (noOfSeg - i + 1) + ')'}
        />
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
      <>
        <View
          style={{
            position: 'absolute',
            top: 100,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
        <View
          style={{
            position: 'absolute',
            top: 100,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Svg width={size} height={size}>
            <Defs>{this.renderLinearGradients()}</Defs>
            <G rotate={rotation - 90}>{this.renderCirclePaths()}</G>
          </Svg>
        </View>
      </>
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
