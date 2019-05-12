const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};

export { INCREMENT, DECREMENT, increment, decrement };
