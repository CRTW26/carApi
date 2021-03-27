import colourList from '../../colours';

const validateColour = (id) => {

  console.log(colourList.colours.length)
  for (let i = 0; i < colourList.colours.length; i ++) {
    if (colourList.colours[i].id === parseInt(id)) {
      return true;
    }
  }
}

export default validateColour