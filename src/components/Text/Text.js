import React from 'react';
import { StyleSheet, Text as Font } from 'react-native';

function getStylesFromVariant(variant) {
  switch (variant) {
    case 'h1': {
      return { fontSize: 30 };
      break;
    }
    case 'h2': {
      break;
    }
    case 'h3': {
      break;
    }
    case 'h4': {
      break;
    }
    case 'h5': {
      break;
    }
    case 'h6': {
      break;
    }
    case 'subtitle1': {
      break;
    }
    case 'subtitle2': {
      break;
    }
    case 'body1': {
      break;
    }
    case 'body2': {
      break;
    }
    case 'caption': {
      break;
    }
    case 'button': {
      break;
    }
    default: {
      return {};
      break;
    }
  }
}

function getColorsFromTheme(colors) {
  return {};
}

export default function Text({ variant, color, children, ...rest }) {
  let style = { ...getStylesFromVariant(variant), ...getColorsFromTheme(color) };

  // const styles = StyleSheet.create(obj);

  return (
    <Font style={style} {...rest}>
      {children}
    </Font>
  );
}
