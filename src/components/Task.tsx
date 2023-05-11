import { Trash } from '@phosphor-icons/react'
import { TaskItem, TasksContext } from '../context/TasksContext'
import clsx from 'clsx'
import { useContext } from 'react'

export function Task({ task }: { task: TaskItem }) {
	const { removeTask, changeComplete } = useContext(TasksContext)

	return (
		<div className='flex items-start gap-3 p-4 bg-gray-500 border border-gray-400 rounded-lg'>
			<input
				type='checkbox'
				className='w-4 h-4 mt-1 bg-gray-500 rounded-full cursor-pointer form-checkbox text-purple-dark border-blue focus:ring-blue'
				onChange={() => changeComplete(task)}
			/>

			<p
				className={clsx('flex-1 ', {
					'text-gray-300 line-through': task.isCompleted === true,
				})}
			>
				{task.content}
			</p>

			<button
				className='mt-[2px] text-gray-300 w-6 h-6 rounded hover:bg-gray-400 transition-colors hover:text-danger flex items-center justify-center'
				onClick={() => removeTask(task)}
			>
				<Trash />
			</button>
		</div>
	)
}
