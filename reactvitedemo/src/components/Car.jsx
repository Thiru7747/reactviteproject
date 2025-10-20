function Car({ car }) {
  return (
    <>
      <li>
        {car.name} ${car.price} {car.soldout ? "soldout" : ""}
      </li>
    </>
  );
}

export default Car;
