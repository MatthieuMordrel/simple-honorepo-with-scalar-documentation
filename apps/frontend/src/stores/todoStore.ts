import { create } from 'zustand'

// Types for our todo items
export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

// Store state interface
interface TodoState {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
}

// Actions interface
interface TodoActions {
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setFilter: (filter: 'all' | 'active' | 'completed') => void
  clearCompleted: () => void
}

// Combined store type
type TodoStore = TodoState & {
  actions: TodoActions
}

// Create the store (not exported directly)
const useTodoStore = create<TodoStore>(set => ({
  // State
  todos: [],
  filter: 'all',

  // Actions namespace
  actions: {
    addTodo: (title: string) =>
      set(state => ({
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            title,
            completed: false,
            createdAt: new Date()
          }
        ]
      })),

    toggleTodo: (id: string) =>
      set(state => ({
        todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
      })),

    deleteTodo: (id: string) =>
      set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),

    setFilter: (filter: 'all' | 'active' | 'completed') => set(() => ({ filter })),

    clearCompleted: () =>
      set(state => ({
        todos: state.todos.filter(todo => !todo.completed)
      }))
  }
}))

// Export atomic selectors for state
export const useTodos = () => useTodoStore(state => state.todos)
export const useFilter = () => useTodoStore(state => state.filter)

// Export actions as a single hook
export const useTodoActions = () => useTodoStore(state => state.actions)

// Computed selectors
export const useFilteredTodos = () => {
  const todos = useTodos()
  const filter = useFilter()

  return todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })
}

export const useTodoStats = () => {
  const todos = useTodos()

  return {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  }
}
