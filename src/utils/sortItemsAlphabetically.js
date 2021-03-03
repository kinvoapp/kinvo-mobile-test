function sortItemsAlphabetically(item1, item2) {
	const item1Name = item1.name.toUpperCase()
	const item2Name = item2.name.toUpperCase()
	if (item1Name < item2Name) return -1
	else if (item1Name > item2Name) return 1
	return 0
}

export default sortItemsAlphabetically
