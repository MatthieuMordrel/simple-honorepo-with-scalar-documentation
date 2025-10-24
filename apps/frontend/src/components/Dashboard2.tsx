import {
  AddTodoFormConnected,
  ClearCompletedButtonConnected,
  TodoCounterConnected,
  TodoFilterConnected,
  TodoListConnected,
  TodoStatsConnected
} from './dashboard2wrappers'

/**
 * Dashboard 2: New pattern with tiny wrapper components
 * This pattern uses wrapper components that handle hooks internally
 * Each wrapper component is a tiny "connected" component that uses hooks
 * and passes props to the presentational component
 */
export const Dashboard2 = () => {
  return (
    <div className='dashboard'>
      <header className='dashboard-header'>
        <h1>Todo Dashboard 2</h1>
        <p>New Pattern: Tiny Wrapper Components</p>
      </header>

      <div className='dashboard-grid'>
        {/* Stats Section */}
        <section className='stats-section'>
          <TodoCounterConnected />
          <TodoStatsConnected />
        </section>

        {/* Control Section */}
        <section className='control-section'>
          <AddTodoFormConnected />
          <TodoFilterConnected />
          <ClearCompletedButtonConnected />
        </section>

        {/* List Section */}
        <section className='list-section'>
          <TodoListConnected />
        </section>
      </div>
    </div>
  )
}
