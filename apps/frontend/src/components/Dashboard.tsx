import { useFilter, useFilteredTodos, useTodoActions, useTodoStats } from '../stores/todoStore'
import { AddTodoForm } from './AddTodoForm'
import { ClearCompletedButton } from './ClearCompletedButton'
import { TodoCounter } from './TodoCounter'
import { TodoFilter } from './TodoFilter'
import { TodoList } from './TodoList'
import { TodoStats } from './TodoStats'

/**
 * Dashboard component that orchestrates all todo-related components
 */
export const Dashboard = () => {
  // Fetch all data from the store
  const filteredTodos = useFilteredTodos()
  const filter = useFilter()
  const stats = useTodoStats()
  const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = useTodoActions()

  return (
    <div className='dashboard'>
      <header className='dashboard-header'>
        <h1>Todo Dashboard</h1>
        <p>Zustand State Management Demo</p>
      </header>

      <div className='dashboard-grid'>
        {/* Stats Section */}
        <section className='stats-section'>
          <TodoCounter total={stats.total} />
          <TodoStats total={stats.total} active={stats.active} completed={stats.completed} />
        </section>

        {/* Control Section */}
        <section className='control-section'>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoFilter filter={filter} onFilterChange={setFilter} />
          <ClearCompletedButton completed={stats.completed} onClearCompleted={clearCompleted} />
        </section>

        {/* List Section */}
        <section className='list-section'>
          <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
      </div>
    </div>
  )
}
