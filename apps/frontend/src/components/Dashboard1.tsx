import { useFilter1, useFilteredTodos1, useTodoActions1, useTodoStats1 } from '../stores/todoStore1'
import { AddTodoFormPresentational } from './components/AddTodoFormPresentational'
import { ClearCompletedButtonPresentational } from './components/ClearCompletedButtonPresentational'
import { TodoCounterPresentational } from './components/TodoCounterPresentational'
import { TodoFilterPresentational } from './components/TodoFilterPresentational'
import { TodoListPresentational } from './components/TodoListPresentational'
import { TodoStatsPresentational } from './components/TodoStatsPresentational'

/**
 * Dashboard 1: Original pattern with hooks used directly in the dashboard component
 * This pattern fetches all data from the store in the Dashboard component
 */
export const Dashboard1 = () => {
  // Fetch all data from the store
  const filteredTodos = useFilteredTodos1()
  const filter = useFilter1()
  const stats = useTodoStats1()
  const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = useTodoActions1()

  return (
    <div className='dashboard'>
      <header className='dashboard-header'>
        <h1>Todo Dashboard 1</h1>
        <p>Original Pattern: Hooks in Dashboard</p>
      </header>

      <div className='dashboard-grid'>
        {/* Stats Section */}
        <section className='stats-section'>
          <TodoCounterPresentational total={stats.total} />
          <TodoStatsPresentational total={stats.total} active={stats.active} completed={stats.completed} />
        </section>

        {/* Control Section */}
        <section className='control-section'>
          <AddTodoFormPresentational onAddTodo={addTodo} />
          <TodoFilterPresentational filter={filter} onFilterChange={setFilter} />
          <ClearCompletedButtonPresentational completed={stats.completed} onClearCompleted={clearCompleted} />
        </section>

        {/* List Section */}
        <section className='list-section'>
          <TodoListPresentational todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
      </div>
    </div>
  )
}
