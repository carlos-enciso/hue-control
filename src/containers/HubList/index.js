import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HubInformation from '../../components/HubInformation';
import { discoverHueBridges, getBridgeInformation } from '../../utils/httpActions';

const HubList = () => {
	const [hubList, setHubList] = useState(null);

	useEffect(() => {
		const hubListFound = [];
		discoverHueBridges().then(hubFound => {
			hubFound.forEach(item => {
				getBridgeInformation(item.internalipaddress).then(hub => {
					hubListFound.push(
						<HubInformation key={`${hub.name}_${hub.mac}`} hubName={hub.name} macAddress={hub.mac} apiVersion={hub.apiversion} ipAddress={item.internalipaddress} />
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
};

export default HubList;