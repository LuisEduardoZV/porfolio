import { FormattedMessage } from 'react-intl';
import { Outlet } from 'react-router-dom';
import profile from './assets/profile.jpg';
import AsideMenu from './components/AsideMenu';
import ChangeLocalization from './components/ChangeLocalization';
import ChangeTheme from './components/ChangeTheme';
import useConfig from './hooks/useConfig';

//<FormattedMessage id="tittle" />
const App = () => {
	const { theme } = useConfig();

	return (
		<main className={`${theme} min-h-screen flex flex-row`}>
			<AsideMenu />
			<section className="flex w-5/6 h-full min-h-screen bg-bg-100">
				<Outlet />
			</section>
		</main>
	);
};

export default App;
