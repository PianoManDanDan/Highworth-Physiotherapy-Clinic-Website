import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {
	Home,
	Animals,
	Contact,
	Error,
	Facilities,
	People,
	Physiotherapy,
	Faqs,
} from './pages';
import { Banner } from './components/Banner/src';
import { Footer } from './components/Footer/src';
import { bannerData, footerData } from './pages/data';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Banner {...bannerData} />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/animals">
					<Animals />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="/facilities">
					<Facilities />
				</Route>
				<Route exact path="/people">
					<People />
				</Route>
				<Route exact path="/physiotherapy">
					<Physiotherapy />
				</Route>
				<Route exact path="/faqs">
					<Faqs />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			<Footer {...footerData} />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
