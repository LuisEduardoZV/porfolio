import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useConfig from '../hooks/useConfig';

const ChangeTheme = () => {
	const { theme, onChangeTheme } = useConfig();

	const [, setThemeSelected] = useState(theme);

	const handleListItemClick = (event, thm) => {
		setThemeSelected(thm);
		onChangeTheme(thm);
	};

	useEffect(() => {
		setThemeSelected(theme);
	}, [theme]);

	return (
		<>
			<div className="ml-2">
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							<FormattedMessage id="themes" />
						</Menu.Button>
					</div>
					<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
						<Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="px-1 py-1 ">
								<Menu.Item>
									{({ active }) => (
										<button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={(event) => handleListItemClick(event, 'default')}>
											Default
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={(event) => handleListItemClick(event, 'my-theme')}>
											Purple
										</button>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</>
	);
};

export default ChangeTheme;