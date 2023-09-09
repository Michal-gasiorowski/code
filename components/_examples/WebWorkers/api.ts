const api = {
  addArrayItems: (array: number[]) => {
    return array.reduce((a, b) => a + b, 0);
  },
};

export default api;
