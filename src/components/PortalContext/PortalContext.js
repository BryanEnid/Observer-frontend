import * as React from 'react';

export default PortalContext = React.createContext({
  gates: {},
  teleport: (gateName, element) => {},
});
