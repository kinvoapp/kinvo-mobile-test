const rtdb = () => ({
  ref: childName => ({
    add: objData => new Promise((resolve) => {
      resolve('ok');
    }),
  }),
});

const firebase = {
  rtdb,
};

export default jest.fn(() => firebase);
