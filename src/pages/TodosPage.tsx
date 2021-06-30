import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interface';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const saved = JSON.parse(
			localStorage.getItem('todos') || '[]'
		) as ITodo[];

		setTodos(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title,
			id: Date.now(),
			completed: false,
		};

		// setTodos([newTodo, ...todos])
		setTodos((prev) => [newTodo, ...prev]);
	};

	const toggleHandler = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};
	const removeHandler = (id: number) => {
		const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?');
		if (shoudRemove) {
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		}
	};
	return (
		<>
			<TodoForm onAdd={addHandler} />

			<TodoList
				todos={todos}
				onToggle={toggleHandler}
				onRemove={removeHandler}
			/>
		</>
	);
};

export default TodosPage;
