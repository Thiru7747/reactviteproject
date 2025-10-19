function Cars() {
  //   const cars = ["BMW", "Ferrari", "Mercedes", "Audi"];
  const cars = [
    { name: "BMW", price: "70000" },
    { name: "Ferrari", price: "80000" },
    { name: "Mercedes", price: "90000" },
    { name: "Audi", price: "60000" },
  ];
  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car.name}>
            {car.name} ${car.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cars;
