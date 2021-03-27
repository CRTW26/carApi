const carSearch = (carsToSearch, id) => {
  for (let i = 0; i < carsToSearch.cars.length; i++) {
    if (carsToSearch.cars[i].id === id) {
      return i;
    }
  }
}

export default carSearch