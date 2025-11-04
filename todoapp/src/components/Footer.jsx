function Footer({ completedTodos, totalTodos }) {
  return (
    <div style={{ display: "flex" }}>
      <h4>Completed Todos: {completedTodos}</h4>
      <h4>Total Todos: {totalTodos}</h4>
    </div>
  );
}

export default Footer;
