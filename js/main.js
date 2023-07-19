// 1
// function age(age) {
//     if (age >= 18) {
//         alert('проходите')
//     } else {
//         alert('закрой сайт')
//     }

// }



// age(+prompt('Сколько тебе лет?'))


// 3
function name_max(names) {
    let longest = "";
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest.length) {
            longest = names[i];
        }
    }
    return longest;
}

let names = ['alex', 'george', 'michael'];
console.log(name_max(names));