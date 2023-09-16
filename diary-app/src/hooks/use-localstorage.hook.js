import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) {
			setData(res);
		} else {
			localStorage.setItem('data', JSON.stringify([]));
		}
	}, [key]);
	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
