import fs from 'fs';

const getDogData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('../../file1.txt', 'utf-8', (err, data) => {
            if (err) reject("File not found");
            resolve(data);
        })
    });
};

getDogData().then(async data => {
    fetch(`https://dog.ceo/api/breed/${data}/images/random`, {
        method: 'GET'
    }).then(async result => {
        const jsonRes = await result.json();

        fs.writeFile('./dogfile.txt', jsonRes.message, (err, res) => {
            if (err) console.log("failed to write data to file");
            console.log('data written to file successfully!');
        })
    });
});