const killer = (state) => ({
  kill: () => console.log(`${state.name} is killing now! Better keep away from position ${state.position}`)
})

export default killer;
