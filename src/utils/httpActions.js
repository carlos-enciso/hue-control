import axios from 'axios';

// eslint-disable-next-line no-undef
const hubUserName = process.env.REACT_APP_HUB_USER_NAME;

export const discoverHueBridges = () => {
	console.log('[discoverHueBridges]');
	return new Promise((resolve, reject) => {
		axios.get('https://discovery.meethue.com/').then(response => {
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject(response);
			}
		})
			.catch(error => {
				reject(error);
			});
	});
};

export const getBridgeInformation = ipAddress => {
	console.log('[getBridgeInformation]', ipAddress, hubUserName);
	return new Promise((resolve, reject) => {
		axios.get(`https://${ipAddress}/api/${hubUserName}/config`).then(response => {
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject(response);
			}
		})
			.catch(error => {
				reject(error);
			});
	});
};