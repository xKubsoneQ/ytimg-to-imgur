const { ImgurClient } = require('imgur');
const uc = require("./userconfig.js");
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
    console.log(response.data.link);
}
