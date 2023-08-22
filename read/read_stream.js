const fs = require('node:fs/promises');

(async ()=> {

    const fileHandler = await fs.open("test.txt","r")

    const stream = fileHandler.createReadStream()

    // const stream = fileHandler.createReadStream({highWaterMark:400})

    stream.on("data",(chunk)=> {

        console.log(chunk)
        // console.log(chunk.length)

    })
})()