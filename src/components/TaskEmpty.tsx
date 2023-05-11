import { Clipboard } from '@phosphor-icons/react'

export default function TaskEmpty() {
	return (
		<div className='flex flex-col items-center py-16 text-gray-300 border-t-2 border-gray-400 rounded-lg '>
			<Clipboard size={56} />
			<p className='mt-4 font-bold'>Você ainda não tem tarefas cadastradas</p>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</div>
	)
}
