// const fs = require('node:fs/promises');


// // EXECUSION TIME : 67s
// // CPU Usage : ~5%
// // MEMORY : 50MB

// (async ()=> {

//     console.time("writeSeq")

//     const fileHandler = await fs.open("test.txt","w")

//     for(let i = 0; i<1000000; i++)
//     {
//         await fileHandler.write(` ${i} `)
//     }

//     console.timeEnd("writeSeq")

// })()

// const fs = require('node:fs');

// // EXECUTION TIME : 8s
// // CPU USAGE : ~8%
// // Memory Usage : 40MB

// (async ()=> {

//     console.time("writeSeq")

//     fs.open("test.txt","w",(err,fd)=> {

//         for(let i = 0; i<1000000; i++)
//         {
//             fs.writeSync(fd,` ${i} `)
//         }
        
//         console.timeEnd("writeSeq")
//     })

// })()

const fs = require('node:fs/promises');


// EXECUSION TIME : 6s
// CPU Usage : ~16%
// MEMORY : 212MB

(async ()=> {

    console.time("writeSeq")

    const fileHandler = await fs.open("test.txt","w")

    const stream = fileHandler.createWriteStream()

    for(let i = 0; i<1000000; i++)
    {
        const buff = Buffer.from(` ${i} `,"utf-8")

        stream.write(buff)
    }

    console.timeEnd("writeSeq")

})()