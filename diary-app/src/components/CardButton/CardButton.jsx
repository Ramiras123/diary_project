import './CardButton.css';
import cn from 'classnames';

function CardButton({ children, className }) {
	const cl = cn('card-button', {
		[`${className}`]: className
	});
	return <button className={cl}>{children}</button>;
}

export default CardButton;
