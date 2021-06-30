import React from 'react';
import { useState, useRef } from 'react';

interface TodoFromProps {
	onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFromProps> = (props) => {
	// const [title, setTitle] = useState<string>('');

	const ref = useRef<HTMLInputElement>(null);

	// const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(e.target.value);
	// };

	const { onAdd } = props;
	const keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			onAdd(ref.current!.value);
			ref.current!.value = '';

			// setTitle('')
		}
	};
	return (
		<div className='input-field mt2'>
			<input
				ref={ref}
				// onChange={changeHandler}
				// value={title}
				type='text'
				id='title'
				placeholder='Введите название дела'
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor='title' className='active'>
				Введите название дела:
			</label>
		</div>
	);
};
