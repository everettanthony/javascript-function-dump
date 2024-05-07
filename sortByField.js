let users = [
    { name: 'John', age: 20, surname: 'Johnson' },
    { name: 'Pete', age: 18, surname: 'Peterson' },
    { name: 'Ann', age: 19, surname: 'Hathaway' },
    { name: 'Tony', age: 48, surname: 'Bradshaw' }
];

function sortByField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(sortByField('name'));