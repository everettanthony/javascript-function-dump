function greeting() {
    console.log(this.name);
}

let user = { name: 'Tony' };
let user2 = { name: 'Lorelei' };

// use call to pass different objects as "this"
greeting.call( user ); // Tony
greeting.call( user2 ); // Lorelei

function userIntro(phrase) {
    console.log(`${this.name}: ${phrase}`);
}

let newUser = { name: 'Layla' };

// newUser becomes this, and "Hola, cómo estás?" becomes the first argument
userIntro.call( newUser, 'Hola, cómo estás?' ); // Layla: Hola, cómo estás?