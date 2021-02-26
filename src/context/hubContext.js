import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HubContext = React.createContext();

export const HubProvider = ({ children }) => {
	const [ipAddress, setIpAddress] = useState();
	const [backNavigation, setBackNavigation] = useState('/');
	const [headerTitle, setHeaderTitle] = useState('');

	return (
		<HubContext.Provider value={{ ipAddress, setIpAddress, backNavigation, setBackNavigation, headerTitle, setHeaderTitle }}>
			{children}
		</HubContext.Provider>
	);
};

HubProvider.propTypes = {
	children: PropTypes.object,
};

export default HubContext;