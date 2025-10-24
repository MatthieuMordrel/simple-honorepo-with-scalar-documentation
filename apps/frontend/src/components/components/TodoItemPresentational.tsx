import type { Todo } from '../../stores/types'

/**
 * Presentational component for displaying a single todo item and its actions
 * Takes props only, no hooks or store access
 */
export const TodoItemPresentational = ({
  todo,
  onToggle,
  onDelete
}: {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className='todo-content'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className='todo-checkbox'
          aria-label={`Toggle ${todo.title}`}
        />
        <span className='todo-title'>{todo.title}</span>
      </div>
      <button onClick={() => onDelete(todo.id)} className='delete-button' aria-label='Delete todo'>
        Delete
      </button>
    </li>
  )
}
