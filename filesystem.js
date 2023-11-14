import fs from 'fs';

// //Synchronous write
// fs.writeFileSync('./file1.txt', "Hello from file1!", 'utf-8');

// //Asynchronous
// fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// //Synchronous
// const readData = fs.readFileSync('./file1.txt', 'utf-8');
// console.log(readData);

//Callback Hell

fs.readFile('./file1.txt', 'utf-8', (err, data) => {
    // console.log(data);

    fs.writeFile(`./${data}.txt`, "Hello from read-me file!", (err) => {
        if (err) return console.log("Failed to write data in read-me file");

        fs.writeFile('./appendix.txt', data, 'utf-8', err => {

            const readMeFileData = fs.readFileSync('./read-me.txt', 'utf-8');

            fs.appendFile('./appendix.txt', `\n${readMeFileData}`, 'utf-8', err => {
                if (err) return console.log(err);
            })

        })

    })
})