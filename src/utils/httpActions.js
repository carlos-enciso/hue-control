import axios from 'axios';

// eslint-disable-next-line no-undef
const hubUserName = process.env.REACT_APP_HUB_USER_NAME;

/**
 * discoverHueBridges
 * Get the list of the bridges in the local network
 */
export const discoverHueBridges = () => {
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
	return new Promise((resolve, reject) => {
		axios.get(`http://${ipAddress}/api/${hubUserName}/config`).then(response => {
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
 * Gets the list of a Groups of a Hub
 * @param {string} ipAddress ip Addess of the selected Hub
 */
export const getGroupsList = ipAddress => {
	return new Promise((resolve, reject) => {
		axios.get(`http://${ipAddress}/api/${hubUserName}/groups`).then(response => {
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
 * @param {string} group Group number/name
 * @param {Object} state New state for the group
 */
export const setGroupState = (ipAddress, group, state) => {
	return new Promise((resolve, reject) => {
		axios.put(`http://${ipAddress}/api/${hubUserName}/groups/${group}/action`, state).then(response => {
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
 * getGroupInformation
 * Get the information of a Group
 * @param {string} ipAddress ip Addess of the selected Hub
 * @param {string} groupId Group number/name
 */
export const getGroupInformation = (ipAddress, groupId) => {
	return new Promise((resolve, reject) => {
		axios.get(`http://${ipAddress}/api/${hubUserName}/groups/${groupId}`).then(response => {
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
 * getLightInformation
 * Get the information of a Light
 * @param {string} ipAddress ip Addess of the selected Hub
 * @param {string} lightId Light number/name
 * @param {Object} state New state for the group
 */
export const getLightInformation = (ipAddress, lightId) => {
	return new Promise((resolve, reject) => {
		axios.get(`http://${ipAddress}/api/${hubUserName}/lights/${lightId}`).then(response => {
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
 * setLightState
 * Set the state of a Light
 * @param {string} ipAddress ip Addess of the selected Hub
 * @param {string} light Light number/name
 * @param {Object} state New state for the light
 */
export const setLightState = (ipAddress, light, state) => {
	return new Promise((resolve, reject) => {
		axios.put(`http://${ipAddress}/api/${hubUserName}/lights/${light}/state`, state).then(response => {
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