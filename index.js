import readline from 'readline';
import fs from 'fs';
import deleteRepos from './src/deleteRepos.js';

const askForRepos = (token, name) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter repository names (comma separated): ', (repos) => {
    const reposArray = repos.split(',').map((repo) => repo.trim());
    fs.writeFileSync('fixtures/toDelete.txt', reposArray.join('\n'));
    rl.close();
    deleteRepos(token, name);
    fs.writeFileSync('fixtures/toDelete.txt', ''); // Clear toDelete.txt after deleting repositories
  });
};

const askForName = (token) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter organization or user name: ', (name) => {
    rl.close();
    askForRepos(token, name);
  });
};

const askForToken = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter your Github token: ', (token) => {
    rl.close();
    askForName(token);
  });
};

askForToken();
