import { createMuiTheme } from '@material-ui/core/styles';
const Colors = {
	white: '#ffffff',
	black: '#000000',
	primaryLight: '#62d390',
	primaryDark: '#179048',
	mountainMeadow: '#20c161',
	alizarinCrimson: '#db544a',
};

const Theme = createMuiTheme({
	palette: {
		primary: {
			light: Colors.primaryLight,
			main: Colors.mountainMeadow,
			dark: Colors.primaryDark,
			contrastText: Colors.white,
		},
		error: {
			main: Colors.alizarinCrimson,
		},
	},
	typography: {
		htmlFontSize: 16,
		fontSize: 16,
		h1: {
			fontSize: '1.5rem',
			fontWeight: 500,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
		},
		h2: {
			fontSize: '1.25rem',
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: '-0.12px',
		},
		h3: {
			fontSize: '1rem',
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: '-0.1px',
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 'normal',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: '1.5',
			letterSpacing: '-0.1px',
		},
		caption: {
			fontSize: '0.875rem',
			fontWeight: 'normal',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: '-0.1px',
		},
		subtitle1: {
			fontSize: '1rem',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 'normal',
			letterSpacing: '-0.08px',
		},
		fontWeightBold: 600,
	},
});

export { Theme, Colors };