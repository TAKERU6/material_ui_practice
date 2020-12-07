const receiveData = (data) => {
  return {
    type: "RECEIVEDATA",
    payload: data,
  };
};

const getUrls = (dataArea, dataDate, dataGenre) => {
  return (dispatch) => {
    return dispatch(receiveData());
  };
};

export default getUrls;
