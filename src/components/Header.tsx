import { useState, useContext } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { TaskItem, TasksContext } from '../context/TasksContext'
import { v4 as uuidv4 } from 'uuid'

export const Header = () => {
	const { addTask } = useContext(TasksContext)
	const [currentTask, setCurrentTask] = useState('')

	const newTask: TaskItem = {
		id: uuidv4(),
		content: currentTask,
		isCompleted: false,
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (currentTask !== '') {
			addTask(newTask)
			setCurrentTask('')
		}
	}

	return (
		<header className='relative bg-gray-700 h-[200px]'>
			<div className='container flex flex-col items-center justify-center pt-[72px]'>
				<img src='/logo.png' alt='Logo da ToDo List' />

				<form
					className='container absolute inline-flex items-center w-full gap-2 -translate-x-1/2 -bottom-7 left-1/2'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						autoFocus
						placeholder='Adicione uma nova tarefa'
						className='flex-1 p-4 bg-gray-500 border border-gray-700 rounded-lg placeholder:text-gray-300 focus:ring-1 focus:ring-purple-dark focus:border-purple-dark focus:outline-none'
						value={currentTask}
						onChange={(e) => {
							setCurrentTask(e.target.value)
						}}
					/>

					<button className='flex items-center justify-center gap-2 p-4 text-gray-100 rounded-lg bg-blue-dark hover:bg-blue'>
						<span className='text-sm font-bold'>Criar</span>
						<PlusCircle size={22} />
					</button>
				</form>
			</div>
		</header>
	)
}
