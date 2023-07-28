import { FormattedMessage } from 'react-intl';
import { Outlet } from 'react-router-dom';
import ChangeLocalization from './components/ChangeLocalization';

const App = () => {
	return (
		<main className="w-full h-full min-h-screen bg-bg-100">
			<FormattedMessage id="hello" />
			<ChangeLocalization />
			<Outlet />
		</main>
	);
};

export default App;
