const checkDate = (carBuildDate) => {
  let dateArray = carBuildDate.split('/')
  let carBuildDateObject = new Date(dateArray[2], dateArray[1], dateArray[0])
  let now = new Date()
  let diff = Math.abs(now - carBuildDateObject)
  let days = (diff / (1000 * 3600 * 24))
  return days
}

export default checkDate;