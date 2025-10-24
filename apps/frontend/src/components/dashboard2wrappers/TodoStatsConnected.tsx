import { useTodoStats2 } from '../../stores/todoStore2'
import { TodoStatsPresentational } from '../components/TodoStatsPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const TodoStatsConnected = () => {
  const stats = useTodoStats2()
  return <TodoStatsPresentational total={stats.total} active={stats.active} completed={stats.completed} />
}
