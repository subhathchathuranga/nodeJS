const yargs = require("yargs");
const c = require('ansi-colors');
const db = require("./guestdb.js");

// console.log("app");
// console.log(db.add());
// console.log(db.view());

// console.log(c.blue('This is a red string!'));
// console.log(c.green('This is a red string!'));
// console.log(c.cyan('This is a cyan string!'));
// console.log(c.yellow('This is a yellow string!'));

//db.readGuest();

// const command = process.argv;

// if (command[2]==="add"){
//     db.addGuest();
// }else if(command[2]==="update"){
//     db.updateGuess();
// }
yargs.version("1.1.2");

yargs.command({
    command:'add',
    describe:'To add a guest',
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"Address",
            demandOption:true,
            type:"string"
        },
        contact_no:{
            describe:"Contact no",
            demandOption:true,
            type:"number"
        },
        visit_date:{
            describe:"Visit date",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv) {
        db.addGuest(argv.name);

    }
});


yargs.command({
    command:'update',
    describe:'To update a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            describe:"Name",
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        },
        contact_no:{
            describe:"Contact no",
            type:"number"
        },
        visit_date:{
            describe:"Visit date",
            type:"string"
        }
    },
    handler(argv) {
        db.updateGuess(argv.id);
    }
});
yargs.parse();
//console.log(yargs.argv);