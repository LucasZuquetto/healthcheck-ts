const express = require("express");
const { TeamSpeakClient } = require("node-ts");
const app = express();
const port = 3000;

app.use(express.json());

// Rota de exemplo
app.get("/health", async (req, res) => {
    try{
        const client = new TeamSpeakClient("200.163.129.125");
        await client.connect();
        if(client.isConnected){
            console.log("ta onn");
            res.send("o server do dias ta ooonnnn");
        }else{
            console.log("caindo no else do off");
            res.send("ta offf :(")
        }
    } catch (err) {
      console.error("An error occurred:");
      console.error(err);
        res.send("o server ta off :(")
   }
});

async function main() {
   const client = new TeamSpeakClient("200.163.129.125");

   try {
      await client.connect();
      console.log(client.isConnected)


      await client.send("use", { sid: 1 });

      

    //   const me = await client.send("whoami");
    //   console.log("_______________________________________");
    //   console.log(me);
    //   console.log("_______________________________________");

    //   await client.send("login", {
    //      client_login_name: "",
    //      client_login_password: ""
    //   });

    //   const clientList = await client.send("clientlist");
    //   console.log("_______________________________________");

    //   console.log(clientList);
    //   console.log("_______________________________________");

      // await client.subscribePrivateTextEvents(); // Tell the server we want to receive private text events

      // // Register a callback for these events
      // client.on("textmessage", data => {
      // 	console.log(`Message received: ${data.msg}`);
      // });
   } catch (err) {
      console.error("An error occurred:");
      console.error(err);
   }
}
// Iniciar o servidor
app.listen(port, () => {
    // main()
   console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
