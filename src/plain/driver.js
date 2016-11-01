const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

export default driver;
