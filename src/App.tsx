import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoxContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const addTodoHandler = (text: string) => {
  //   const newTodo = new Todo(text);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const onRemoveTodo = (todoId: string) => {
  //   setTodos((prevTodo) => {
  //     return prevTodo.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodoxContextProvider>
      <NewTodo />
      <Todos />
    </TodoxContextProvider>
    // {/* <NewTodo onAddTodo={addTodoHandler} /> */}

    // {/* <Todos items={todos} onRemoveTodo={onRemoveTodo} /> */}
  );
}

export default App;
