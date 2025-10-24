import { useState } from 'react'

/**
 * Component responsible for adding new todos to the store
 */
export const AddTodoForm = ({ onAddTodo }: { onAddTodo: (title: string) => void }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTodo(input.trim())
      setInput('')
    }
  }

  return (
    <div className='add-todo-form'>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Enter todo title...' className='todo-input' />
        <button type='submit' className='add-button'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
