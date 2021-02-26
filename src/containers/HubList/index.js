import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context/HubContext';
import HubInformation from '../../components/HubInformation';
import { discoverHueBridges, getBridgeInformation } from '../../utils/httpActions';

const HubList = ({ history }) => {
	const [hubList, setHubList] = useState(null);
	const { setIpAddress, setBackNavigation, setHeaderTitle } = useContext(HubContext);

	setBackNavigation('/');
	setHeaderTitle('Hubs');

	const handleSetIpAddress = async ipAddress => {
		setIpAddress(ipAddress);
		history.push('/groups');
	};

	useEffect(() => {
		const hubListFound = [];
		discoverHueBridges().then(hubFound => {
			if (hubFound.length === 1) {
				handleSetIpAddress(hubFound[0].internalipaddress);
				return null;
			}
			hubFound.forEach(item => {
				getBridgeInformation(item.internalipaddress).then(hub => {
					hubListFound.push(
						<HubInformation key={`${hub.name}_${hub.mac}`} hubName={hub.name} macAddress={hub.mac} apiVersion={hub.apiversion} ipAddress={item.internalipaddress} onClick={() => handleSetIpAddress(item.internalipaddress)} />
					);
					setHubList(hubListFound);
				});
			});
		});
	}, []);

	return hubList && hubList;
};

HubList.propTypes = {
	hubName: PropTypes.string,
	macAddress: PropTypes.string,
	apiVersio: PropTypes.string,
	history: PropTypes.object,
};

export default HubList;