import { HStack, IconButton, Spacer, Input,Checkbox } from '@chakra-ui/react'
import React, {useEffect, useRef, useState} from 'react'
import { FaTrash } from 'react-icons/fa'
import {Todo} from '../../hooks/useTodo'

type Props = {
    todo: Todo
    deleteTodo: (id: string) => void
    updateTodo: (todo: Todo) => void
  }

const SingleTodo = ({todo, deleteTodo, updateTodo}: Props) => {

    const buttonProps = {
        icon: <FaTrash />,
        isRound: false,
        'aria-label': 'delete',
      }

      const [todoTitle, setTodoTitle] = useState(() => todo.title)
      const [todoStatus, setTodoStatus] = useState(todo.done || false)

      const todoTitleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

      useEffect(()=> {
        updateTodo({id:todo.id, title:todoTitle, done: todoStatus })
      },[todoTitle, todoStatus])


    
    return (
        <HStack>
            <Checkbox 
                isChecked={todoStatus} 
                colorScheme='green' 
                onChange={() => {
                    setTodoStatus(()=>!todoStatus)
                }}
            />
            <Input 
                variant='unstyled' 
                placeholder='Add your task' 
                value={todoTitle} 
                onChange={() => {
                    setTodoTitle(todoTitleRef.current.value)
                }}
                ref={todoTitleRef}
            />
            <Spacer />
            <IconButton 
                onClick={() => deleteTodo(todo.id)} 
                {...buttonProps} 
            />
        </HStack>
    )
}

export {SingleTodo}