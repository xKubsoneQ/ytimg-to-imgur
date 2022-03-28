const { ImgurClient } = require('imgur');
const uc = require("./imgur_config.js");
const c = require("./conf.js");
const client = new ImgurClient({ clientId: uc.client_id });
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`ytimg-to-imgur (v${c.version})`);
readline.question("Podaj link do filmu: ", link => {
    if(link.includes("youtube.com/watch?v=")) {
        main(link.split("youtube.com/watch?v=")[1]);
        readline.close();
    } else {
        console.log("Niepoprawny link!");
        readline.close();
    }
});

async function main(id) {
    const link = "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg";
    const response = await client.upload({
        image: link,
        title: `uploaded via ytimg-to-imgur v${c.version}`,
    });
    if(response.success == false) return console.log("Wystąpił błąd!");
    console.log("Sukces: " + response.data.link);
    if(c.autoexit == true) {
        setTimeout(() => {
            console.log("Automatyczne wyłączenie za " + c.autoexit_time + " sekund. (Funkcję możesz wyłączyć w conf.js)");
            process.exit();
        }, c.autoexit_time * 1000);
    } else return;
}
