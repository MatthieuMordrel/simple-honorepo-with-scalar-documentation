import { create } from 'zustand'
import type { TodoStore } from './types'

// Create the store for Dashboard 1
const useTodoStore1 = create<TodoStore>(set => ({
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
export const useTodos1 = () => useTodoStore1(state => state.todos)
export const useFilter1 = () => useTodoStore1(state => state.filter)

// Export actions as a single hook
export const useTodoActions1 = () => useTodoStore1(state => state.actions)

// Computed selectors
export const useFilteredTodos1 = () => {
  const todos = useTodos1()
  const filter = useFilter1()

  return todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })
}

export const useTodoStats1 = () => {
  const todos = useTodos1()

  return {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  }
}
