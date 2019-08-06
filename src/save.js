export const getSave = () => {
  const localSave = localStorage.getItem('save');

  if (localSave) {
    return JSON.parse(localSave);
  }
  return {
    index: 0,
    username: '',
    state: {
      squad: [],
      encounters: [],
      image: '',
      dialogue: '',
    },
  };
};

export const setSave = (data) => {
  localStorage.setItem('save', JSON.stringify(data));
};
