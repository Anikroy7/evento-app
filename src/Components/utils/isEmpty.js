const isEmpty = (data) => {
  let v;
  v = Object.values(data).includes("");
  if (v) {
    return v;
  } else {
    v = Object.values(data.guests).every((e) => e === 0);
  }
 
  return v
};

export default isEmpty;
