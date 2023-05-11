import { createContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { produce, original } from 'immer'

export type TaskItem = {
	id: string
	content: string
	isCompleted: boolean
}

export type TaskContextType = {
	taskItems: TaskItem[]
	addTask: (Task: TaskItem) => void
	removeTask: (Task: TaskItem) => void
	changeComplete: (Task: TaskItem) => void
}

export const TasksContext = createContext({} as TaskContextType)

export const TasksContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [taskItems, setTaskItems] = useLocalStorage<TaskItem[]>('TASK_ITEMS_KEY', [])

	const addTask = (task: TaskItem) => {
		const newTask = produce(taskItems, (draft) => {
			draft.push(task)
		})

		setTaskItems(newTask)
	}

	const removeTask = (task: TaskItem) => {
		const index = taskItems.findIndex((taskItem) => taskItem.id === task.id)

		const newTask = produce(taskItems, (draft) => {
			draft.splice(index, 1)
		})

		setTaskItems(newTask)
	}

	const changeComplete = (task: TaskItem) => {
		const index = taskItems.findIndex((taskItem) => taskItem.id === task.id)

		if (index >= 0) {
			const handleTask = produce(taskItems, (draft) => {
				draft[index].isCompleted = !draft[index].isCompleted
			})

			setTaskItems(handleTask)
		}
	}

	return (
		<TasksContext.Provider value={{ taskItems, addTask, removeTask, changeComplete }}>{children}</TasksContext.Provider>
	)
}
