import React, { useState } from 'react';
import { PortalContext } from './PortalContext';

export default function PortalProvider({ children }) {
  const [gates, setGates] = useState({});

  const teleport = (gateName, element) => this.setState({ gates: { ...gates, [gateName]: element } });

  return <PortalContext.Provider value={{ gates: gates, teleport: teleport }}>{children}</PortalContext.Provider>;
}
