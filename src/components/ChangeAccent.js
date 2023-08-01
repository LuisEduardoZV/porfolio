import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

const ChangeAccent = () => {
	const { accent, onChangeAccent } = useConfig();

	const [, setAccentSelected] = useState(accent);

	const handleListItemClick = (event, acc) => {
		setAccentSelected(acc);
		onChangeAccent(acc);
	};

	useEffect(() => {
		setAccentSelected(accent);
	}, [accent]);

	return (
		<div className="flex w-fit h-fit gap-x-3 items-start justify-center">
			<div className="w-fit flex flex-col items-center gap-y-1 mr-2">
				<span className="h-5 w-5 bg-blue-icon-full rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-default')} />
				<label>
					<FormattedMessage id="acc-default" />
				</label>
			</div>
			<span className="h-5 w-5 bg-green-icon-full rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-green')} />
			<span className="h-5 w-5 bg-red-icon-full rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-red')} />
			<span className="h-5 w-5 bg-orange-icon-full rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-orange')} />
			<span className="h-5 w-5 bg-purple-icon-full rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-purple')} />
			<span className="h-5 w-5 bg-yellow-900 rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-brown')} />
			<span className="h-5 w-5 bg-yellow-window rounded-full cursor-pointer" onClick={(event) => handleListItemClick(event, 'acc-yellow')} />
		</div>
	);
};

export default ChangeAccent;
