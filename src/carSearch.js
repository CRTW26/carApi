const carSearch = (carsToSearch, id) => {
  let result;
  for (let i = 0; i < carsToSearch.cars.length; i++) {
    if (carsToSearch.cars[i].id === id) {
      result = carsToSearch.cars[i];
    }
  }
  return result;
}

export default carSearch