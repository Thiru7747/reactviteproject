function Cars() {
  const cars = ["BMW", "Ferrari", "Mercedez", "Audi"];
  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
    </>
  );
}

export default Cars;
