/**
 * Component responsible for clearing all completed todos
 */
export const ClearCompletedButton = ({ completed, onClearCompleted }: { completed: number; onClearCompleted: () => void }) => {
  if (completed === 0) {
    return null
  }

  return (
    <div className='clear-completed'>
      <button onClick={onClearCompleted} className='clear-button'>
        Clear Completed ({completed})
      </button>
    </div>
  )
}
