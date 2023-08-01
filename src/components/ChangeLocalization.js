import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

const ChangeLocalization = () => {
	const { locale, onChangeLocale } = useConfig();

	const [, setLanguage] = useState(locale);

	const handleListItemClick = (event, lng) => {
		console.log('entra');
		setLanguage(lng);
		onChangeLocale(lng);
	};

	useEffect(() => {
		setLanguage(locale);
	}, [locale]);

	return (
		<>
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="lng" className="absolute left-[-9999px] peer" defaultChecked onChange={(event) => handleListItemClick(event, 'es')} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="lng-es" />
				</span>
			</label>
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="lng" className="absolute left-[-9999px] peer" onChange={(event) => handleListItemClick(event, 'en')} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="lng-en" />
				</span>
			</label>
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="lng" className="absolute left-[-9999px] peer" onChange={(event) => handleListItemClick(event, 'fr')} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="lng-fr" />
				</span>
			</label>
			<label className="flex cursor-pointer relative overflow-hidden mb-2">
				<input type="radio" name="lng" className="absolute left-[-9999px] peer" onChange={(event) => handleListItemClick(event, 'pt')} />
				<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio before:peer-checked:shadow-acc-main flex items-center py-[0.175em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1em] before:h-[1em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before before:shadow-acc-main">
					<FormattedMessage id="lng-pt" />
				</span>
			</label>
		</>
	);
};

export default ChangeLocalization;
