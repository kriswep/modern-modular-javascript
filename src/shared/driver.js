const driver = state => ({
  // eslint-disable-next-line
  drive: () => (state.position += state.speed),
});

export default driver;
