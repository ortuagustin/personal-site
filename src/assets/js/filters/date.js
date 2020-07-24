export default value => {
  const date = new Date(v)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
