/* eslint-disable no-undef */
import LivingRoom from './HueIconPack2019/roomsLiving.svg';
import Kitchen from './HueIconPack2019/roomsKitchen.svg';
import Office from './HueIconPack2019/roomsOffice.svg';
import Dining from './HueIconPack2019/roomsDining.svg';
import BulbClassic from './HueIconPack2019/bulbsClassic.svg';
export const images = {
	LivingRoom,
	Kitchen,
	Office,
	Dining,
	BulbClassic
};

/**
 * Get the svg icon from the class name assigned
 * @param {String} className Class name from Hue specs
 */
const getImageByClass = className => {
	className = className.replace(/(\w)(\w*)/g,
		function (g0, g1, g2) { return `${g1.toUpperCase()}${g2.toLowerCase()}`; }).replace(' ', '');
	return images[className];
};

export default getImageByClass;