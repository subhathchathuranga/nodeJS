const c = require('ansi-colors');
// //console.log("guestdb");

// // const name = "Alex";
// // const age =25;

// const add = () => {
//     return "adding";
// }

// const view =()=> console.log(c.green("view"));

// // module.exports = {
// //     addx:add,
// //     viewx:view
// // };

// module.exports = {
//     add,view
// };

const addGuest = () => {
    console.log(c.green("add"));
}

const updateGuess = () => {
    console.log(c.yellow("update"));
}

const deleteGuest = () => {
    console.log(c.red("delete"));
}

const readGuest = () => {
    console.log(c.blue("read"));
}

const listGuest = () => {
    console.log(c.magenta("list"));
}
module.exports = {addGuest,deleteGuest,updateGuess,readGuest,listGuest};