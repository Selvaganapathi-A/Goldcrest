function sleep(milliSeconds) {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds));
}

async function ghost() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        await sleep(250);
    }
    console.log('done');
}

function main() {
    console.log('main-start');
    try {
        sleep(599).then(() => {
            console.log('main');
        });
    } catch (error) {
        console.log(error);
    }
    console.log('main-end');
    return 7;
}

console.log(main());
/*


let target = document.querySelector(
        '#mainContent > div.q-box.qu-pb--medium > div > div'
    ),
    intervelID = undefined;

let iron = () => {
    let childs = Array.from(target.children);

    if (childs.length >= 20) {
        for (let i = 0; i < 10; i++) {
            target.removeChild(childs[i]);
            console.log(i, childs[i]);
        }
    } else if (intervelID != undefined) {
        clearInterval(intervelID);
        intervelID = undefined
        console.log('timer removed', childs.length)
    }
};

intervelID = setInterval(iron, 5000);


*/