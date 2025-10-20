import Car from "./Car";

function Cars() {
  //   const cars = ["BMW", "Ferrari", "Mercedes", "Audi"];
  const cars = [
    { name: "BMW", price: "70000", soldout: true },
    { name: "Ferrari", price: "80000", soldout: false },
    { name: "Mercedes", price: "90000", soldout: true },
    { name: "Audi", price: "60000", soldout: false },
  ];
  return (
    <>
      <ul>
        {cars.map((car) => (
          <Car key={car.name} car={car} />
        ))}
      </ul>
    </>
  );
}

export default Cars;
