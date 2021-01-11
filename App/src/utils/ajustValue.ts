const formateValue = (value: string) => {
  if (value) {
    const splitValue = value.split('.')
    const resolveValue = `${(splitValue[0], splitValue[1])}`
    return resolveValue
  }
}

export default formateValue
