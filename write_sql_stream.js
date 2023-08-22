const fs = require('node:fs/promises');

(async ()=> {

    // Time : 2.77 s
    // Memory Usage : 40 MB
    // CPU : 15 %

    const fileHandler = await fs.open('sequence.txt','w')

    const stream = fileHandler.createWriteStream()

    //const write_stream = fh.createWriteStream({ highWaterMark:  10485760 * 5 });   // 10 MB 


    console.time("writeSeq")

    let i = 0

    const writeSeq = ()=> {

        while(i<1000000)
        {
            const buff = Buffer.from(` ${i} `,"utf-8")

            // upon filled the internal buffer
            if(!stream.write(buff))
            {
                break;
            }

            //this is our last write
            if(i === 999999)
            {
                return stream.end()
                // write_stream.write(data)  will throw error
            }

            i++;
        }
    }

    writeSeq()

    stream.on('drain',()=>{

        // Drain Happens around 468 times = size of file / highwatermarkvalue
        writeSeq()
    })
    
    stream.on('finish',()=>{
        console.timeEnd("writeSeq")
        fileHandler.close()
    })
})()