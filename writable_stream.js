const fs = require('node:fs/promises');

(async ()=> {

    // console.time("writeSeq")

    const fileHandler = await fs.open("test.txt","w")

    const stream = fileHandler.createWriteStream()

    console.log("The value of internal buffer",stream.writableHighWaterMark)

    const buff = Buffer.alloc(16380,'G')

    stream.write(buff)
    console.log(stream.write('a'))
    console.log(stream.write('a'))
    console.log(stream.write('a'))

    console.log(stream.write('a'))

    stream.on("drain",()=>{
        console.log('internal buffer is being empty')

        console.log( stream.write('a'))
        console.log(stream.writableLength)
    })


    console.log("Current filled buffer",stream.writableLength)

    // for(let i = 0; i<1000000; i++)
    // {
    //     stream.write(` ${i} `)
    // }

    // console.timeEnd("writeSeq")

})()