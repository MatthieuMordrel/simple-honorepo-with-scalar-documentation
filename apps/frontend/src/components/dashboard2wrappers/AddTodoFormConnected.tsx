import { useTodoActions2 } from '../../stores/todoStore2'
import { AddTodoFormPresentational } from '../components/AddTodoFormPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const AddTodoFormConnected = () => {
  const { addTodo } = useTodoActions2()
  return <AddTodoFormPresentational onAddTodo={addTodo} />
}
