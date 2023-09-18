import { useCallback, useState } from 'react';
import SelectUser from '../SelectUser/SelectUser';
import style from './Header.module.css';
import Button from '../Button/Button';

const INIT_LOGO = ['/logo.svg', '/vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const setLogoClick = useCallback(() => {
		setLogoIndex((li) => Number(!li));
	}, []);
	return (
		<>
			<SelectUser></SelectUser>
			<img
				className={style.logo}
				src={INIT_LOGO[logoIndex]}
				alt="Логотип проекта"
			/>
			<Button onClick={setLogoClick}>Поменять лого</Button>
		</>
	);
}

export default Header;
