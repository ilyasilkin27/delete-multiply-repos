import axios from 'axios';
import fs from 'fs';
import chalk from 'chalk';

const token = ''; // token needs delete_repo permission
const name = ''; // organization or user

token === ''
? console.log(chalk.red('No token inserted. Please insert Github token'))
: name === ''
? console.log(chalk.red('No name inserted. Please insert organization or user name'))
: console.log(chalk.red('todelete.txt is empty'));

const url = `https://api.github.com/repos/${name}`;
const headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `token ${token}`
};

const lines = fs.readFileSync('fixtures/toDelete.txt', 'utf-8').split('\n').filter(Boolean); // todelete.txt is a txt with repository names. One per line.
lines.forEach(async (repo) => {
  try {
    const response = await axios.delete(`${url}/${repo}`, { headers });
    console.log(chalk.green('\u2713'), chalk.green('Removal Succeeded:'), chalk.yellow(response.config.url));
  } catch (error) {
    console.error(chalk.red(`${error.response.data.message}:`), chalk.yellow(error.response.config.url));
  }  
});