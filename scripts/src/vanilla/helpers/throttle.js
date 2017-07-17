// window.addEventListener('resize', throttle(() => {
//     console.log('resize');
// }, 500));

export default function throttle(func, ms = 50, context = window) {
    let wait = false;
    return (...args) => {
        const later = () => {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(() => {
                wait = false;
            }, ms);
        }
    };
}
