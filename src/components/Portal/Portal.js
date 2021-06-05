/**
 *@flow weak
 */
import React, { useEffect } from 'react';
import mitt from 'mitt'; // DEPENDENCY #1
import PropTypes from 'prop-types'; // DEPENDENCY #2, sorta

if (!PropTypes) console.warn('<react-native-portal> no PropTypes available');

const oContextTypes = {
  portalSub: PropTypes.func,
  portalUnsub: PropTypes.func,
  portalSet: PropTypes.func,
  portalGet: PropTypes.func,
};

export function PortalProvider() {
  let _emitter;
  const childContextTypes = oContextTypes;
  const portals = new Map();

  useEffect(() => {
    _emitter = new mitt();
    return () => (_emitter = null);
  }, []);

  const getChildContext = () => {
    return {
      portalSub: this.portalSub,
      portalUnsub: this.portalUnsub,
      portalSet: this.portalSet,
      portalGet: this.portalGet,
    };
  };

  const portalSub = (name, callback) => {
    const emitter = this._emitter;
    if (emitter) {
      emitter.on(name, callback);
    }
  };

  const portalUnsub = (name, callback) => {
    const emitter = this._emitter;
    if (emitter) {
      emitter.off(name, callback);
    }
  };

  const portalSet = (name, value) => {
    this.portals.set(name, value);
    if (this._emitter) {
      this._emitter.emit(name);
    }
  };

  const portalGet = (name) => this.portals.get(name) || null;

  return this.props.children;
}

export class BlackPortal extends React.PureComponent {
  static contextTypes = oContextTypes;
  props;

  componentDidMount() {
    const { name, children } = this.props;
    const { portalSet } = this.context;
    portalSet && portalSet(name, children);
  }
  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    const { name, children } = newProps;
    const { portalSet } = this.context;
    if (oldProps.children != newProps.children) {
      portalSet && portalSet(name, children);
    }
  }
  componentWillUnmount() {
    const { name } = this.props;
    const { portalSet } = this.context;
    portalSet && portalSet(name, null);
  }
  render() {
    const { name } = this.props;
    return null;
  }
}

export class WhitePortal extends React.PureComponent {
  static contextTypes = oContextTypes;
  props;

  componentWillMount() {
    const { name } = this.props;
    const { portalSub } = this.context;
    portalSub && portalSub(name, this.forceUpdater);
  }
  componentWillUnmount() {
    const { name } = this.props;
    const { portalUnsub } = this.context;
    portalUnsub && portalUnsub(name, this.forceUpdater);
  }
  forceUpdater = () => this.forceUpdate();

  render() {
    const { name, children, childrenProps } = this.props;
    const { portalGet } = this.context;
    const portalChildren = (portalGet && portalGet(name)) || children;
    return (childrenProps && portalChildren ? React.cloneElement(React.Children.only(portalChildren), childrenProps) : portalChildren) || null;
  }
}
