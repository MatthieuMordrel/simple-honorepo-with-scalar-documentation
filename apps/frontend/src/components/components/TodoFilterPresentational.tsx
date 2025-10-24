/**
 * Presentational component for filtering todos by status
 * Takes props only, no hooks or store access
 */
export const TodoFilterPresentational = ({
  filter,
  onFilterChange
}: {
  filter: 'all' | 'active' | 'completed'
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void
}) => {
  return (
    <div className='todo-filter'>
      <h2>Filter Todos</h2>
      <p>This should not re-render when a todo is added or deleted, only when the filter is changed</p>
      <div className='filter-buttons'>
        <button onClick={() => onFilterChange('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>
          All
        </button>
        <button onClick={() => onFilterChange('active')} className={`filter-button ${filter === 'active' ? 'active' : ''}`}>
          Active
        </button>
        <button onClick={() => onFilterChange('completed')} className={`filter-button ${filter === 'completed' ? 'active' : ''}`}>
          Completed
        </button>
      </div>
    </div>
  )
}
