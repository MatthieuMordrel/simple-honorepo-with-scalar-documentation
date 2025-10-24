// Shared types for todo items
export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

// Store state interface
export interface TodoState {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
}

// Actions interface
export interface TodoActions {
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setFilter: (filter: 'all' | 'active' | 'completed') => void
  clearCompleted: () => void
}

// Combined store type
export type TodoStore = TodoState & {
  actions: TodoActions
}
