import { Badge, StackDivider, VStack } from '@chakra-ui/react'
import { Todo } from '../../hooks/useTodo'
import { SingleTodo } from '../SingleToDo'

type Props = {
  todos: Todo[]
  deleteTodo: (id: string) => void
  updateTodo: (todo: Todo) => void
}

function TodoList({ todos, deleteTodo, updateTodo }: Props) {
  if (todos.length === 0)
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No task, yay!!!
      </Badge>
    )

  const vStackProps = {
    p: '4',
    w: '100%',
    maxW: { base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' },
    borderColor: 'gray.100',
    borderWidth: '2px',
    borderRadius: 'lg',
    alignItems: 'stretch',
    divider: <StackDivider />
  }

  return (
    <VStack {...vStackProps}>
      {todos && todos.map(todo => (
        <SingleTodo 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo}
        />
      ))}
    </VStack>
  )
}

export {TodoList}
