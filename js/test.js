let sayHi = () => {
  console.log('hello');
};

export default {
  sayHi: () => {
    sayHi();
  }
};
