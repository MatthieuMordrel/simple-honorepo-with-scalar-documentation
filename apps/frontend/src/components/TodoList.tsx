import type { Todo } from '../stores/todoStore'
import { TodoItem } from './TodoItem'

/**
 * Component responsible for displaying the list of filtered todos
 */
export const TodoList = ({ todos, onToggle, onDelete }: { todos: Todo[]; onToggle: (id: string) => void; onDelete: (id: string) => void }) => {
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
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  )
}
