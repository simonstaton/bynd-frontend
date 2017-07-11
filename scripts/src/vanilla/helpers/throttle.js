// window.addEventListener('resize', throttle(() => {
//   console.log('resize');
// }, 500));

export default function throttle(func, ms = 50, context = window) {
  let to;
  let wait = false;
  return (...args) => {
    let later = () => {
      func.apply(context, args);
    };
    if(!wait)  {
      later();
      wait = true;
      to = setTimeout(() => {
        wait = false;
      }, ms);
    }
  };
}
