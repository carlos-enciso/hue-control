import React from 'react';
import PropTypes from 'prop-types';

const HubContext = React.createContext();

export const HubProvider = ({ children }) => {
	const [selectedIp, setSelectedIp] = React.useState();

	return (
		<HubContext.Provider value={{ selectedIp, setSelectedIp }}>
			{children}
		</HubContext.Provider>
	);
};

HubProvider.propTypes = {
	children: PropTypes.object,
};

export const HubConsumer = HubContext.Consumer;

export default HubContext;