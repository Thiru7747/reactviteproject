import TodoItem from "./TodoItem";
function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
