function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function named() {
    console.log("named function");
  };
}
function returnsAnAnonymousFunction() {
  return () => {
    console.log("fnonymous function");
  };
}
