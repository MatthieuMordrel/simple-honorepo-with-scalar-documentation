import { useTodoActions2, useTodoStats2 } from '../../stores/todoStore2'
import { ClearCompletedButtonPresentational } from '../components/ClearCompletedButtonPresentational'

/**
 * Tiny wrapper component that uses hooks and passes props to presentational component
 */
export const ClearCompletedButtonConnected = () => {
  const stats = useTodoStats2()
  const { clearCompleted } = useTodoActions2()
  return <ClearCompletedButtonPresentational completed={stats.completed} onClearCompleted={clearCompleted} />
}
