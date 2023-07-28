import PropTypes from 'prop-types';
import { createContext } from 'react';
import defaultConfig from '../config.js';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
	...defaultConfig,
	onChangeLocale: () => {},
};

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
	const [config, setConfig] = useLocalStorage('portfolio-config', {
		locale: initialState.locale,
	});

	const onChangeLocale = (locale) => {
		setConfig({
			...config,
			locale,
		});
	};

	return (
		<ConfigContext.Provider
			value={{
				...config,
				onChangeLocale,
			}}>
			{children}
		</ConfigContext.Provider>
	);
}

ConfigProvider.propTypes = {
	children: PropTypes.node,
};

export { ConfigContext, ConfigProvider };
