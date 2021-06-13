import { createRef } from 'react';

export const navigationRef = createRef();

export default class NavigationController {
  static navigate(name, params) {
    navigationRef.current?.navigate(name, params);
  }
}
