const barker = state => ({
  bark: () => `Woof, I am ${state.name}!`,
});

export default barker;
