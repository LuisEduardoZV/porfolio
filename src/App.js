import { FormattedMessage } from 'react-intl';
import { Outlet } from 'react-router-dom';
import ChangeLocalization from './components/ChangeLocalization';
import ChangeTheme from './components/ChangeTheme';
import useConfig from './hooks/useConfig';
//<FormattedMessage id="tittle" />
const App = () => {
	const { theme } = useConfig();

	return (
		<main className={`${theme} min-h-screen flex flex-row`}>
			<aside className="flex flex-col w-1/5 h-full min-h-screen bg-gray-200 px-5">
				<div className="w-full h-fit py-5 flex flex-row justify-start gap-x-3">
					<span className="h-4 w-4 bg-red-400 rounded-full"></span>
					<span className="h-4 w-4 bg-yellow-400 rounded-full"></span>
					<span className="h-4 w-4 bg-green-400 rounded-full"></span>
				</div>
				<section className="flex flex-col gap-y-3 w-full h-fit">
					<div className="flex w-full h-fit gap-x-5 items-center">
						<div>Foto</div>
						<div className="flex flex-col">
							<label>Luis E. Zúñiga V.</label>
							<span>Front End Developer</span>
						</div>
					</div>
				</section>
			</aside>
			<section className="flex w-4/5 h-full min-h-screen bg-gray-50"></section>
		</main>
	);
};

export default App;
