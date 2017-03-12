const killer = state => ({
  kill: () => `${state.name} is killing now! Better keep away from position ${state.position}!`,
});

export const unusedThing = (params) => {
  // eslint-disable-next-line no-console
  console.log(`unused extra thingy: ${params}`);
};

export default killer;
