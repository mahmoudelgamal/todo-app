import { Heading, VStack } from "@chakra-ui/react";
import { TodoList } from '../TodoList'
import { AddTodo } from "../AddTodo";
import useTodo  from '../../hooks/useTodo'
const TodoApp = () => {
    const [todos, addTodo, deleteTodo, updateTodo] = useTodo()
    
    return (
        <VStack>
            <Heading as='h1' size='xl'>
                TODO APP
            </Heading>  
            <AddTodo addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}
            />
        </VStack>
    )

}

export { TodoApp }