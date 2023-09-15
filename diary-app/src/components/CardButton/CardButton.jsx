import styles from './CardButton.module.css';
import cn from 'classnames';

function CardButton({ children, className }) {
	const cl = cn(styles['card-button'], {
		[`${className}`]: className
	});
	return <button className={cl}>{children}</button>;
}

export default CardButton;
