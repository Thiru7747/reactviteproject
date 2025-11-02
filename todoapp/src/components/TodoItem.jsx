function TodoItem({ item, todos, setTodos }) {
  function deleteTodo(item) {
    setTodos(todos.filter((todo) => todo != item));
  }
  return (
    <h3>
      {item}
      <span>
        <button onClick={() => deleteTodo(item)}>x</button>
      </span>
    </h3>
  );
}

export default TodoItem;
