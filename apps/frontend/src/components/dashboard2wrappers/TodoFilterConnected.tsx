import { useFilter2, useTodoActions2 } from '../../stores/todoStore2'
import { TodoFilterPresentational } from '../components/TodoFilterPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const TodoFilterConnected = () => {
  const filter = useFilter2()
  const { setFilter } = useTodoActions2()
  return <TodoFilterPresentational filter={filter} onFilterChange={setFilter} />
}
