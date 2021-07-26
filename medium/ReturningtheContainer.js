// Find the Bug: Returning the Container
// The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
// Original
function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
		default:
			container = null
	}

	return container
}

// fixed
function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
			break
		default:
			container = null
	}