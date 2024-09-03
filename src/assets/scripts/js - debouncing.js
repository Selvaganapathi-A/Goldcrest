// * Debouncing Example

// Suppose you have a search input field that triggers an API call to fetch search results as the user types. Without debouncing, the API call would be made on every keystroke, causing excessive requests. Debouncing ensures that the API call is made only after the user has paused typing.

let debouncer = (func, delay) => {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

let value = 0;

let tempFunc = debouncer((val) => {
    console.log(val);
}, 1000);

let interVelID = setInterval(() => {
    tempFunc(value);
    if (value > 20) {
        clearInterval(interVelID);
    }
    value += 1;
}, 500);
