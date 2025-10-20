function Car({ car }) {
  return (
    <>
      <li>
        {car.name} ${car.price}
      </li>
    </>
  );
}

export default Car;
