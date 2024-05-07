function countFromTo(from, to) {
    let current = from;

    function count() {
        console.log(current);

        if (current === to) {
            clearInterval(timerId);
        }

        current++;
    }

    count();
    let timerId = setInterval(count, 500);
}

countFromTo(1, 10);