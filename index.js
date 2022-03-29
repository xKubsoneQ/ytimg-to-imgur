const { ImgurClient } = require('imgur');
const uc = require("./imgur_config.js");
const c = require("./conf.js");
const client = new ImgurClient({ clientId: uc.client_id });
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`ytimg-to-imgur (v${c.version})`);
readline.question("Podaj link do filmu: ", async link => {
    if(link.includes("youtube.com/watch?v=")) {
        const id = link.split("youtube.com/watch?v=")[1];
        const img = "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg";
        readline.close();

        upload(img).then(res => {
            console.log("Sukces: " + res.data.link);
            
            if(c.autoexit.enabled == true) {
                console.log("Automatyczne wyłączenie za " + c.autoexit.time + " sekund. (Funkcję możesz wyłączyć w conf.js)");
                setTimeout(() => {
                    process.exit();
                }, c.autoexit.time * 1000);
            } else return;
        });
    } else {
        console.log("Niepoprawny link!");
        readline.close();
    }
});

async function upload(img) {
    const response = await client.upload({
        image: img,
        title: `uploaded via ytimg-to-imgur v${c.version}`,
    });
    if(response.success == false) return console.log("Wystąpił błąd!");
    return response;
}
