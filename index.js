import readline from 'readline';
import deleteRepos from "./src/deleteRepos.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter your Github token: ', (token) => {
    rl.question('Enter organization or user name: ', (name) => {
      rl.close();
      deleteRepos(token, name);
    });
});