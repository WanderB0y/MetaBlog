const { exit } = require('process');

 
let prompt = require('prompt-sync')();

const firstNames = ["Jacob","Michael","Ethan","Joshua","Daniel","Alexander","Anthony","William","Christopher","Matthew",
                    "Jayden","Andrew","Joseph","David","Noah","Aiden","James","Ryan","Logan","John","Nathan","Elijah",
                    "Christian","Gabriel","Benjamin","Jonathan","Tyler","Samuel","Nicholas","Gavin","Dylan","Jackson",
                    "Maximillian","Reynaldo","Cassius","Gordon","Reuben","Samson","Yadiel","Jayvon","Reilly","Sheldon","Abdullah",
                    "Jagger","Thaddeus","Case","Kyson","Lamont","Chaz","Makhi","Jan","Marques","Oswaldo","Donavan","Keyon",
                    "Kyan","Simeon","Trystan","Andreas","Dangelo","Landin","Reagan","Turner","Arnav","Brenton","Callum",
                    "Jayvion","Bridger","Sammy","Deegan","Jaylan","Lennon","Odin","Abdiel","Jerimiah","Eliezer","Bronson",]


const lastNames = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson",
                    "Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson",
                    "White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall",
                    "Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill",
                    "Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker",
                    "Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan",
                    "Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson",
                    "Wood","Watson","Brooks"];

const generateFirstName = () => {
    return firstNames[Math.floor(Math.random() * firstNames.length)]
}


const generateLastName = () => {
    return lastNames[Math.floor(Math.random() * lastNames.length)]
}

const welcomePage = () => {
    let firstName = "";
    let lastName = "";
    console.log("Welcome To Name Generator");
    console.log("1. Generate A Name");
    console.log("2. Exit");

    while (true){
        let choice = prompt("Input: ");

        switch(choice){
            case "1": 
                firstName = generateFirstName();
                lastName = generateLastName();
                console.log(`Your First Name Would Be: ${firstName}`);
                console.log(`Your Last Name Wouldd Be: ${lastName}`);
                console.log(`Hi, ${firstName} ${lastName}`);
                break;
            case "2":
                throw exit;
            default: console.log("Invalid Input, Please Try Again");
        }
        break;
    }
}
welcomePage();
    

