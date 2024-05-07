let worker = {
    slow(min, max) {
        console.log(`First run called with ${min}, ${max}. Won't see this log again on future cached calls.`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments); 

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.apply(this, arguments); 
        cache.set(key, result);

        return result;
    };
}

function hash(args) {
    return [].join.call(args);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( `First: ${worker.slow(3, 5)}` ); // 8
console.log( `Cached: ${worker.slow(3, 5)}` ); // Cached: 8
console.log( `New values: ${worker.slow(9, 23)}` ); // 32
console.log( `Cached: ${worker.slow(9, 23)}` ); // Cached: 32