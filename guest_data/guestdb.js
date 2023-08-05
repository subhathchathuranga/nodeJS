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

const addGuest = (name) => {
    console.log(c.green("addition",name));
};

const updateGuess = (id) => {
    console.log(c.yellow("update",id));
};

const deleteGuest = (id) => {
    console.log(c.red("delete",id));
};

const readGuest = () => {
    console.log(c.blue("read"));
};

const listGuest = () => {
    console.log(c.magenta("list"));
};
module.exports = {addGuest,deleteGuest,updateGuess,readGuest,listGuest};