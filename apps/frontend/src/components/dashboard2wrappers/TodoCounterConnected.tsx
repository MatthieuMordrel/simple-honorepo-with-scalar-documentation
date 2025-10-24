import { useTodoStats2 } from '../../stores/todoStore2'
import { TodoCounterPresentational } from '../components/TodoCounterPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const TodoCounterConnected = () => {
  const stats = useTodoStats2()
  return <TodoCounterPresentational total={stats.total} />
}
