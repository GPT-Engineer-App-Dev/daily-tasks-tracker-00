import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading, VStack, HStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <HStack>
        <Input placeholder="Add a new task" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <Button onClick={handleAddTodo} colorScheme="blue" px={8}>
          Add <ListIcon as={FaPlus} />
        </Button>
      </HStack>
      <Box w="100%" mt={4}>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
              {todo}
              <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" onClick={() => handleDeleteTodo(index)} aria-label="Delete task" float="right" />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
