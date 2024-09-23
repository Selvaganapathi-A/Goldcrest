import { useMemo } from "react";

console.clear();

function main() {
    const product = {
        id: 10,
        title: 'Grater Black',
        price: 10.99,
    };

    for (let [key, value] of Object.entries(product)) {
        console.log(key, value);
    }
}

function quoraDiscord(params) {
    let interveler_usv = setInterval(() => {
        let target = document.querySelector(
            '#mainContent > div.q-box.qu-pb--medium > div > div'
        );

        let childNodes = Array.from(target.children);
        let element_length = childNodes.length;

        if (element_length > 25) {
            for (let i = 0; i < 10; i++) {
                let temp = childNodes[i];
                target.removeChild(temp);
                console.log('removed', i);
            }
        } else {
            console.log(childNodes.length);
        }
    }, 2500);
}
