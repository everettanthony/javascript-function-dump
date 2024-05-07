function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {    // if there's such key in cache
            return cache.get(x); // read the result from it
        }

        let result = func(x);  // otherwise call func

        cache.set(x, result);  // and cache (remember) the result

        return result;
    };
}

slow = cachingDecorator(slow);

slow(1);
slow(2);
slow(3);