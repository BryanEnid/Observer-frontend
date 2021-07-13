import React from 'react';

export const PortalContext = React.createContext({
  gates: {},
  teleport: () => {},
  clean: () => {},
});

export class PortalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gates: {},
    };
  }

  teleport = (name, element) => this.setState({ gates: { ...this.state.gates, [name]: element } });

  clean = (name) => this.setState({ gates: { ...this.state.gates, [name]: null } });

  render() {
    const { children } = this.props;
    return (
      <PortalContext.Provider
        value={{ gates: this.state.gates, teleport: this.teleport, clean: this.clean }}
      >
        {children}
      </PortalContext.Provider>
    );
  }
}

export function Portal({ name, children }) {
  return (
    <PortalContext.Consumer>
      {(value) => (
        <>
          {value.gates[name]}
          {children && children(value.teleport)}
        </>
      )}
    </PortalContext.Consumer>
  );
}
