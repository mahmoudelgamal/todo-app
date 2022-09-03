import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { FormEvent, useRef } from 'react'
import { Todo } from '../../hooks/useTodo'

type Props = {
  addTodo: (todo: Todo) => void
}

function AddTodo({ addTodo }: Props) {
  
  const contentRef = useRef<HTMLInputElement>(null)

  const toast = useToast()

  const toastError = (title: string) => toast({
    title: title,
    status: 'error',
    duration: 2000,
    isClosable: true,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (contentRef.current === null)
      return

    if (!contentRef.current.value) {
      toastError('No content')
      return
    }

    const todo: Todo = {
      id: nanoid(),
      title: contentRef.current.value,
      done: false
    }

    addTodo(todo)
    contentRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack m='8'>
        <Input 
          variant='filled' 
          placeholder='Add your task' 
          ref={contentRef} 
        />
        <Button 
          type='submit' 
          colorScheme='green' 
          px='8'>
            Add Task
          </Button>
      </HStack>
    </form>
  )
}

export {AddTodo}
