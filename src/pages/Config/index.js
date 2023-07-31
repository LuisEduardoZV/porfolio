import { FormattedMessage } from 'react-intl';
import ChangeLocalization from '../../components/ChangeLocalization';
import ChangeTheme from '../../components/ChangeTheme';

const Config = () => {
	return (
		<section className="w-full h-full flex flex-col px-10">
			<header className="w-full h-fit py-10 px-5">
				<h1 className="text-2xl font-bold text-gray-text">Configuración</h1>
			</header>
			<div className="w-full h-fit flex flex-col mt-4 bg-bg-200 rounded-2xl border border-gray-border items-center p-3 text-gray-text">
				<div className="w-full flex justify-between px-2 py-5">
					<h2>Aspecto</h2>
					<div className="flex w-fit h-fit">
						<div className="flex flex-col p-3 justify-center items-center">
							<label>Claro</label>
						</div>
						<div className="flex flex-col p-3 justify-center items-center">
							<label>Obscuro</label>
						</div>
					</div>
				</div>
				<div className="w-[97%] h-[0.05rem] bg-bg-100" />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>Color principal</h2>
					<div className="flex w-fit h-fit gap-x-3 items-start justify-center">
						<div className="w-fit flex flex-col items-center gap-y-1 mr-2">
							<span className="h-5 w-5 bg-gray-500 rounded-full" />
							<label>Default</label>
						</div>
						<span className="h-5 w-5 bg-blue-icon-full rounded-full" />
						<span className="h-5 w-5 bg-green-icon-full rounded-full" />
						<span className="h-5 w-5 bg-red-icon-full rounded-full" />
						<span className="h-5 w-5 bg-orange-icon-full rounded-full" />
						<span className="h-5 w-5 bg-purple-icon-full rounded-full" />
						<span className="h-5 w-5 bg-yellow-900 rounded-full" />
					</div>
				</div>
				<div className="w-[97%] h-[0.05rem] bg-bg-100" />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>Tipo de letra</h2>
					<div className="flex w-fit h-fit gap-x-3 items-center justify-center">
						<div className="flex">
							<input type="radio" value="bold" name="font" />
							<label>Negritas</label>
						</div>
						<div className="flex">
							<input type="radio" value="normal" name="font" />
							<label>Normal</label>
						</div>
					</div>
				</div>
				<div className="w-[97%] h-[0.05rem] bg-bg-100" />
				<div className="w-full flex justify-between px-2 py-5">
					<h2>Permitir las transparencias en el sistema</h2>
					<div className="flex w-fit h-fit gap-x-3 items-center justify-center">
						<label class="relative flex justify-between items-center p-2 text-xl">
							<input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
							<span class="w-16 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-500 ease-in-out peer-checked:bg-green-icon-full after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-500 peer-checked:after:translate-x-9"></span>
						</label>
					</div>
				</div>
			</div>
			<div className="w-full h-fit flex flex-col mt-4 bg-bg-200 rounded-2xl border border-gray-border items-center p-3 text-gray-text">
				<div className="w-full flex-col justify-between px-2 py-5">
					<h2>Seleccionar idioma</h2>
					<label className="flex cursor-pointer relative overflow-hidden mb-2">
						<input type="radio" name="lng" className="absolute left-[-9999px] peer" />
						<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio flex items-center py-[0.375em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1.5em] before:h-[1.5em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before">Español</span>
					</label>
					<label className="flex cursor-pointer relative overflow-hidden mb-2">
						<input type="radio" name="lng" className="absolute left-[-9999px] peer" />
						<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio flex items-center py-[0.375em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1.5em] before:h-[1.5em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before">Español</span>
					</label>
					<label className="flex cursor-pointer relative overflow-hidden mb-2">
						<input type="radio" name="lng" className="absolute left-[-9999px] peer" />
						<span className="peer-checked:bg-transparent before:peer-checked:shadow-input-radio flex items-center py-[0.375em] px-[0.75em] rounded-full duration-200 ease-in before:flex before:shrink-0 before:content-[''] before:w-[1.5em] before:h-[1.5em] before:rounded-[50%] before:mr-[0.375em] before:duration-200 before:ease-linear before:shadow-input-radio-before">Español</span>
					</label>
				</div>
			</div>
		</section>
	);
};

export default Config;
