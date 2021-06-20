import React from 'react';
import { Text as Font, StyleSheet } from 'react-native';

function getStylesFromVariant(variant) {
  switch (variant) {
    case 'h1': {
      return { fontSize: 24, fontFamily: 'Quicksand_500' };
    }
    case 'h2': {
      return { fontSize: 19, fontFamily: 'Quicksand_700' };
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
      return { fontSize: 14, fontFamily: 'Quicksand_300' };
    }
    case 'button': {
      break;
    }
    default: {
      return { fontSize: 12, fontFamily: 'Quicksand_400' };
    }
  }
}

function getColorsFromTheme(colors) {
  return { ...colors };
}

export default function Text({ variant, color, children, style, ...rest }) {
  const styles = { ...getStylesFromVariant(variant), ...getColorsFromTheme(color), ...style };
  const appliedStyles = StyleSheet.create({ font: { fontFamily: 'Quicksand_400', ...styles } });

  return (
    <Font testID="text" style={appliedStyles.font} {...rest}>
      {children}
    </Font>
  );
}
