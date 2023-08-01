import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

const ChangeFont = () => {
	const { font, onChangeFont } = useConfig();

	const [, setFontSelected] = useState(font);

	const handleListItemClick = (event, fnt) => {
		setFontSelected(fnt);
		onChangeFont(fnt);
	};

	useEffect(() => {
		setFontSelected(font);
	}, [font]);

	return (
		<div className="flex w-fit h-fit gap-x-3 items-center justify-center">
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="font" className="absolute left-[-9999px] peer" onChange={(event) => handleListItemClick(event, false)} defaultChecked={!font} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="font-bold" />
				</span>
			</label>
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="font" className="absolute left-[-9999px] peer" defaultChecked={font} onChange={(event) => handleListItemClick(event, true)} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="font-normal" />
				</span>
			</label>
		</div>
	);
};

export default ChangeFont;
