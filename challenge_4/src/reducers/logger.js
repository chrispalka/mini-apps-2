/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
export const loggerMiddleware = (store) => {
  (next) => {
    (action) => {
      console.log(action);
      next(action);
      console.log(store.getState());
    };
  };
};
