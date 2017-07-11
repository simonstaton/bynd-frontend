// window.addEventListener('resize', debounce(() => {
//   console.log('resize');
// }, 500));

export default function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, (wait || 1));
  };
}
