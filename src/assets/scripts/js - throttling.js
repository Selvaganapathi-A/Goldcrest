// * Throttling Example
//
// Imagine you have a web page with a scrolling event that triggers some action, like loading more content. Without throttling, if the user scrolls quickly, the action might be triggered multiple times in rapid succession. Throttling ensures that the action is executed at a fixed interval.

let throttle = (func, delay) => {
    let lastCalled = new Date().getTime();

    return function (...args) {
        console.log('lastCalled, before', lastCalled);
        let now = new Date().getTime();
        let fur = now - lastCalled;
        if (fur >= delay) {
            func(...args);
            lastCalled = now;
            console.log('---> lastCalled, after', lastCalled);
        }
    };
};

let tempFunc = () => {
    console.log('in Temp Function', new Date().getTime());
};

let executed = 0;

let tmpCall = throttle(tempFunc, 2500);

let interVelID = setInterval(() => {
    if (executed > 20) {
        clearInterval(interVelID);
    }
    tmpCall();
    executed += 1;
}, 300);
// setTimeout(tempFunc, 1000);
