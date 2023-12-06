require('dotenv').config();
const fs = require('fs');

const clientDirectory = `./${process.env.CLIENT_DIRECTORY ?? 'client'}`;

if (process.env.API_HOST) {
    const apiFile = `${clientDirectory}/src/api/index.js`;
    const fileContents = fs.readFileSync(`${clientDirectory}/src/api/index.js`, 'utf8');
    const index1 = fileContents.indexOf(`BASE_API_ENDPOINT`);
    const index2 = fileContents.indexOf(`=`, index1);
    const index3 = fileContents.indexOf(`;`, index1);

    const sub1 = fileContents.substring(0, index2);
    const sub2 = fileContents.substring(index3);

    const newContents = `${sub1}="${process.env.API_HOST}"${sub2}`;
    fs.writeFileSync(apiFile, newContents, 'utf8');
}

// copy the dist of the client
fs.cpSync(`${clientDirectory}/dist`, './public/', { recursive: true });

//
// sanity check before running the server
//

let envError = false;
if (!process.env.MONGO_CONNECTION) {
    console.error('Variable MONGO_CONNECTION was not specified in .env file');
    envError = true;
}

if (!process.env.JWT_SECRET) {
    console.error('Varabile JWT_SECRET was not specified in the .env file, you can generate one with "npm run generate-jwt"');
    envError = true;
}

if (!process.env.JWT_COOKIE_EXPIRE) {
    console.error('Varabile JWT_COOKIE_EXPIRE was not specified in the .env file, consider using 604800000 as a default (7 days)');
    envError = true;
}

if (!process.env.API_HOST) {
    console.error(`Variable API_HOST is not correctly set, consider using for example "http://localhost:3000" `);
    envError = true;
}

if (envError) {
    throw new Error(".env file is configured incorrectly, please correct this before running again");
}