import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({

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

export { Theme };