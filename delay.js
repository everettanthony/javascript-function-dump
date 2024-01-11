function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function someFunction() {
    // do something
    await delay(3000);
    // do something else after delay
}