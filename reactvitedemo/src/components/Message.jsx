function Message() {
  function handleClick() {
    console.log("button is clicked");
  }

  return (
    <>
      <button onClick={handleClick}>click here for the message</button>
    </>
  );
}

export default Message;
