import PropTypes from 'prop-types';
import { createContext } from 'react';
import defaultConfig from '../config.js';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
	...defaultConfig,
	onChangeLocale: () => {},
	onChangeTheme: () => {},
};

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
	const [config, setConfig] = useLocalStorage('portfolio-config', {
		locale: initialState.locale,
		theme: initialState.theme,
	});

	const onChangeLocale = (locale) => {
		setConfig({
			...config,
			locale,
		});
	};

	const onChangeTheme = (theme) => {
		setConfig({
			...config,
			theme,
		});
	};

	return (
		<ConfigContext.Provider
			value={{
				...config,
				onChangeLocale,
				onChangeTheme,
			}}>
			{children}
		</ConfigContext.Provider>
	);
}

ConfigProvider.propTypes = {
	children: PropTypes.node,
};

export { ConfigContext, ConfigProvider };
