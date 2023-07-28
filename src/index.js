import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from './context/ConfigContext';
import './index.css';
import Locales from './utils';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Locales>
				<App />
			</Locales>
		),
		errorElement: <div>Error</div>,
		children: [{}],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ConfigProvider>
		<RouterProvider router={router} />
	</ConfigProvider>
);
