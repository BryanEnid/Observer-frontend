import * as React from 'react';
import { PortalContext } from './PortalContext';

function PortalGate(props) {
  const { gateName, children } = props;
  return (
    <PortalContext.Consumer>
      {(value) => {
        return (
          <React.Fragment>
            {value.gates[gateName]}
            {children && children(value.teleport)}
          </React.Fragment>
        );
      }}
    </PortalContext.Consumer>
  );
}

export default PortalGate;
