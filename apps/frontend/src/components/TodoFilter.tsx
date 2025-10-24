/**
 * Component responsible for filtering todos by status
 */
export const TodoFilter = ({
  filter,
  onFilterChange
}: {
  filter: 'all' | 'active' | 'completed'
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void
}) => {
  return (
    <div className='todo-filter'>
      <h2>Filter Todos</h2>
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
