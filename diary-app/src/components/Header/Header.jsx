import SelectUser from '../SelectUser/SelectUser';
import style from './Header.module.css';

function Header() {
	return (
		<>
			<SelectUser></SelectUser>
			<img className={style.logo} src="/logo.svg" alt="Логотип проекта" />;
		</>
	);
}

export default Header;
