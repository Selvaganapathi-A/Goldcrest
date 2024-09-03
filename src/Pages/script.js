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
