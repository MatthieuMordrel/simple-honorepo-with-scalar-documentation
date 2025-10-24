/**
 * Presentational component for displaying the total count of todos
 * Takes props only, no hooks or store access
 */
export const TodoCounterPresentational = ({ total }: { total: number }) => {
  return (
    <div className='todo-counter'>
      <h2>Todo Counter</h2>
      <p className='count-display'>Total Todos: {total}</p>
    </div>
  )
}
