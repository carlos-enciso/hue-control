import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HubContext = React.createContext();

export const HubProvider = ({ children }) => {
	const [ipAddress, setIpAddress] = useState();

	return (
		<HubContext.Provider value={{ ipAddress, setIpAddress }}>
			{children}
		</HubContext.Provider>
	);
};

HubProvider.propTypes = {
	children: PropTypes.object,
};

export default HubContext;