import axios from 'axios';

// eslint-disable-next-line no-undef
const hubUserName = process.env.REACT_APP_HUB_USER_NAME;

/**
 * discoverHueBridges
 * Get the list of the bridges in the local network
 */
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

/**
 * getBridgeInformation
 * Gets the specific information of a Hub
 * @param {string} ipAddress ip Addess of the selected Hub
 */
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

/**
 * getGroupsList
 * Gets the list of a Scenes of a Hub
 * @param {string} ipAddress ip Addess of the selected Hub
 */
export const getGroupsList = ipAddress => {
	console.log('[getGroupsList]', ipAddress, hubUserName);
	return new Promise((resolve, reject) => {
		axios.get(`https://${ipAddress}/api/${hubUserName}/groups`).then(response => {
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

/**
 * setGroupState
 * Set the state of a Scene
 * @param {string} ipAddress ip Addess of the selected Hub
 * @param {string} group Gropu number/name
 * @param {Object} state New state for the group
 */
export const setGroupState = (ipAddress, group, state) => {
	console.log('[setGroupState]', ipAddress, hubUserName);
	return new Promise((resolve, reject) => {
		axios.put(`https://${ipAddress}/api/${hubUserName}/groups/${group}/action`, state).then(response => {
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