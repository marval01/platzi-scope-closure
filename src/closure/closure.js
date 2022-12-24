function greeting(){
    let userNamer = 'Martín'

    function displayUserName(){
        return `Hello ${userNamer}`;
    }

    return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());

