const obj = [
    {"name":"Spider-Man"},
    {"name":"Captain America"},
    {"name":"Thor"},
    {"name":"Hulk"},
    {"name":"Doctor Strange"},
    {"name":"Mister Fantastic"},
    {"name":"Black Panther"},
    {"name":"Charles Xavier"},
    {"name":"Namor"},
    {"name":"Captain Marvel"},
    {"name":"Black Widow"},
    {"name":"Hawkeye"},
    {"name":"Ant Man"},
    {"name":"Wasp"},
    {"name":"Daredevil"},
    {"name":"Luke Cage"},
    {"name":"Iron Fist"},
    {"name":"Jessica Jones"},
    {"name":"Johnny Storm"},
    {"name":"Susan Storm"},
    {"name":"Thing"}
];

const shuffle = ([...arr]) => {
    let m = arr.length;

    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }

    return arr;
};

const shuffledItems = (obj) => { 
    const newObj = shuffle(obj);

    for (let item in newObj) {
        console.log(newObj[item].name);
    }
}

shuffledItems(obj);