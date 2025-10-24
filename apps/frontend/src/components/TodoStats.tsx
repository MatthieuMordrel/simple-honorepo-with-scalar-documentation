/**
 * Component responsible for displaying detailed statistics about todos
 */
export const TodoStats = ({ total, active, completed }: { total: number; active: number; completed: number }) => {
  return (
    <div className='todo-stats'>
      <h2>Statistics</h2>
      <div className='stats-grid'>
        <div className='stat-item'>
          <span className='stat-label'>Total:</span>
          <span className='stat-value'>{total}</span>
        </div>
        <div className='stat-item'>
          <span className='stat-label'>Active:</span>
          <span className='stat-value active'>{active}</span>
        </div>
        <div className='stat-item'>
          <span className='stat-label'>Completed:</span>
          <span className='stat-value completed'>{completed}</span>
        </div>
      </div>
    </div>
  )
}
