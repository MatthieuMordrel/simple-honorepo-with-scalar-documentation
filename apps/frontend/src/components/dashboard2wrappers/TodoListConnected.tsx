import { useFilteredTodos2, useTodoActions2 } from '../../stores/todoStore2'
import { TodoListPresentational } from '../components/TodoListPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const TodoListConnected = () => {
  const filteredTodos = useFilteredTodos2()
  const { toggleTodo, deleteTodo } = useTodoActions2()
  return <TodoListPresentational todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
}
