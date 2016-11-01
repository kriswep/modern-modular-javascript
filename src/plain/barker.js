const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

export default barker;
