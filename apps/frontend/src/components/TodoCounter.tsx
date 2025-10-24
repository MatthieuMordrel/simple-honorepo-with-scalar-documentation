/**
 * Component responsible for displaying the total count of todos
 */
export const TodoCounter = ({ total }: { total: number }) => {
  return (
    <div className='todo-counter'>
      <h2>Todo Counter</h2>
      <p className='count-display'>Total Todos: {total}</p>
    </div>
  )
}
