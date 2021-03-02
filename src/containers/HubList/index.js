import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context/HubContext';
import HubInformation from '../../components/HubInformation';
import { discoverHueBridges, getBridgeInformation } from '../../utils/httpActions';

const HubList = ({ history }) => {
	const [hubFound, setHubFound] = useState(null);
	const [hubList, setHubList] = useState(null);
	const { setIpAddress, setBackNavigation, setHeaderTitle } = useContext(HubContext);

	const handleSetIpAddress = async ipAddress => {
		setIpAddress(ipAddress);
		history.push('/groups');
	};

	useEffect(() => {
		discoverHueBridges().then(response => {
			setHubFound(response);
		});
	}, []);

	useEffect(() => {
		setBackNavigation('/');
		setHeaderTitle('Hubs');
		const hubListFound = [];
		if (hubFound) {
			if (hubFound.length === 1) {
				handleSetIpAddress(hubFound[0].internalipaddress);
				return null;
			} else {
				hubFound.forEach(item => {
					getBridgeInformation(item.internalipaddress).then(hub => {
						hubListFound.push(
							<HubInformation key={`${hub.name}_${hub.mac}`} hubName={hub.name} macAddress={hub.mac} apiVersion={hub.apiversion} ipAddress={item.internalipaddress} onClick={() => handleSetIpAddress(item.internalipaddress)} />
						);
						setHubList(hubListFound);
					});
				});
			}
		}
	}, [hubFound]);

	return hubList && hubList;
};

HubList.propTypes = {
	hubName: PropTypes.string,
	macAddress: PropTypes.string,
	apiVersio: PropTypes.string,
	history: PropTypes.object,
};

export default HubList;