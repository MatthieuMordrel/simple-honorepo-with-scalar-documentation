import type { Todo } from '../../stores/types.ts'
import { TodoItemPresentational } from './TodoItemPresentational.tsx'

/**
 * Presentational component for displaying the list of filtered todos
 * Takes props only, no hooks or store access
 */
export const TodoListPresentational = ({
  todos,
  onToggle,
  onDelete
}: {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}) => {
  if (todos.length === 0) {
    return (
      <div className='todo-list'>
        <h2>Todo List</h2>
        <p className='empty-message'>No todos to display</p>
      </div>
    )
  }

  return (
    <div className='todo-list'>
      <h2>Todo List</h2>
      <ul className='todos'>
        {todos.map(todo => (
          <TodoItemPresentational key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  )
}
