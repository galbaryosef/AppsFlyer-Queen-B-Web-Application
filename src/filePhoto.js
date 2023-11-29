const path = require('path');
const fileName = path.join(__dirname, '../client/src/images/QueenB-.png');
const fs = require('fs');
const pool = require("./db");

// Function to convert a PNG file to BYTEA format
const convertPNGToBytea = (fileName) => {
    try {
        // Read binary data from the PNG file
        const imageData = fs.readFileSync(fileName);

        // Convert binary data to bytea format
        const byteaData = Buffer.from(imageData).toString('hex');

        return byteaData;
    } catch (error) {
        console.error('Error converting PNG to bytea:', error.message);
        return null;
    }
};

const convertedImage = convertPNGToBytea(fileName);
const insertPhotoToDatabase = async (convertedImage) => {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO mentors (photo) VALUES ($1)', [convertedImage]);
        console.log('Photo added to the database.');
    } catch (error) {
        console.error('Error inserting photo:', error.message);
    } finally {
        client.release();
    }
};

const Photo = insertPhotoToDatabase(convertedImage);

//   //steps:
//   //1)upload photo from the register page.
//   //2)convert the png to bytea
//   //3)save it in the database

//   // when we want to use it from the database:
//   //1)upload the photo from the database
//   //2)convert from bytea to png
