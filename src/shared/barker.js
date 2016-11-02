const barker = state => ({
  // eslint-disable-next-line no-console
  bark: () => console.log(`Woof, I am ${state.name}`),
});

export default barker;
