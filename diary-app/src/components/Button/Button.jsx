import './Button.css';
import { useState } from 'react';

function Button() {
	const [text, setText] = useState('Сохранить');
	const clicked = () => {
		if (text === 'Закрыть') {
			setText('Сохранить');
		} else setText('Закрыть');
		console.log(text);
	};
	return (
		<button onClick={clicked} className="button accent">
			{text}
		</button>
	);
}

export default Button;
