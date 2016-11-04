const killer = state => ({
  // eslint-disable-next-line no-console
  kill: () => `${state.name} is killing now! Better keep away from position ${state.position}!`,
});

export default killer;
