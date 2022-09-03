import { useEffect, useState } from 'react'
import axios from 'axios'

export type Todo = { 
  id: string,
  title: string,
  done: boolean
}

const backendUrl = 'http://localhost:3000'

function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const getAllTodos = async () => {
      const response = await axios(`${backendUrl}/tasks`)
      const allTodos = response.data
      setTodos(allTodos)
    }
    getAllTodos()
  }, [])


  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos])
    axios.post(
      `${backendUrl}/tasks`,
      todo
    )

  }

  const deleteTodo = (id: string) => {
    axios.delete(
      `${backendUrl}/tasks/${id}`
    )
    
    setTodos(()=>todos.filter(todo => todo.id !== id))
  }


  const updateTodo = (todo:Todo) => {
    axios.put(
      `${backendUrl}/tasks/${todo.id}`,
      {title: todo.title, done: todo.done}
    )
  }

  return [todos, addTodo, deleteTodo, updateTodo] as const
}

export default useTodo
