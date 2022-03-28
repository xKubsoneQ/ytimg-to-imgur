const { ImgurClient } = require('imgur');
const c = require("./config.js");
const client = new ImgurClient({ clientId: c.client_id });
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Podaj ID filmu: ", id => {
    main(id);
    readline.close();
});

async function main(id) {
    const link = "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg";
    const response = await client.upload({
        image: link,
        title: "uploaded via ytimg-to-imgur"
    });
    if(response.success == false) return console.log("Wystąpił błąd!");
    console.log(response.data.link);
}
