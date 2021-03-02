import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from './theme';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HubProvider } from './context';
import HubList from './containers/HubList';
import GroupList from './containers/GroupList';
import LightList from './containers/LightList';
import SingleLight from './containers/SingleLight';
import './App.css';
import Navigation from './containers/Navigation';

function App() {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={Theme}>
				<HubProvider>					<Navigation>
					<Switch>
						<Route exact path="/" component={HubList} />
						<Route exact path="/groups" component={GroupList} />
						<Route exact path="/lights/:groupId" component={LightList} />
						<Route exact path="/lights/:groupId/:lightId" component={SingleLight} />
					</Switch>
				</Navigation>
				</HubProvider>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
