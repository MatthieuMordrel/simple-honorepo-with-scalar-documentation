import { create } from 'zustand'
import type { TodoStore } from './types'

// Create the store for Dashboard 2
const useTodoStore2 = create<TodoStore>(set => ({
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
export const useTodos2 = () => useTodoStore2(state => state.todos)
export const useFilter2 = () => useTodoStore2(state => state.filter)

// Export actions as a single hook
export const useTodoActions2 = () => useTodoStore2(state => state.actions)

// Computed selectors
export const useFilteredTodos2 = () => {
  const todos = useTodos2()
  const filter = useFilter2()

  return todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })
}

export const useTodoStats2 = () => {
  const todos = useTodos2()

  return {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  }
}
