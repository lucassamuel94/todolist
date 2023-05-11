import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import TaskEmpty from './TaskEmpty'
import { Task } from './Task'

export const Tasks = () => {
	const { taskItems } = useContext(TasksContext)

	const totalTasks = taskItems.length
	const completedTasks = taskItems.filter((item) => item.isCompleted).length

	return (
		<div className='container mt-[90px]'>
			<header className='flex items-center justify-between mb-6 font-bold'>
				<div className='inline-flex items-center gap-2'>
					<p className='text-sm text-blue'>Tarefas criadas</p>
					<p className='rounded-full text-xs py-[2px] px-2 bg-gray-400 text-gray-200 text-center'>{taskItems.length}</p>
				</div>
				<div className='inline-flex items-center gap-2'>
					<p className='text-sm text-purple'>Concluídas</p>
					<p className='rounded-full text-xs py-[2px] px-2 bg-gray-400 text-gray-200 text-center'>
						{completedTasks}
						<span> de </span>
						{totalTasks}
					</p>
				</div>
			</header>

			{totalTasks === 0 && <TaskEmpty />}

			<div className='space-y-4'>
				{taskItems.map((taskItem) => (
					<Task task={taskItem} key={taskItem.id} />
				))}
			</div>
		</div>
	)
}
