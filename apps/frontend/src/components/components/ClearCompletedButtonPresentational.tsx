/**
 * Presentational component for clearing all completed todos
 * Takes props only, no hooks or store access
 */
export const ClearCompletedButtonPresentational = ({ completed, onClearCompleted }: { completed: number; onClearCompleted: () => void }) => {
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
