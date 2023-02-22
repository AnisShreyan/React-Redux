export const IncNum = () => {
  return {
    type: "INCREASE",
    payload: 1,
  };
};

export const DecNum = () => {
  return {
    type: "DECREASE",
    payload: 1,
  };
};
