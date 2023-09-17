import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);
	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};
	return (
		<select
			name="userSelect"
			id="userSelect"
			value={userId}
			onChange={changeUser}
		>
			<option value="1">User1</option>
			<option value="2">User2</option>
			<option value="3">User3</option>
		</select>
	);
}

export default SelectUser;
