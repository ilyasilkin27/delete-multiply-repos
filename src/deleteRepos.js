import axios from 'axios';
import fs from 'fs';
import chalk from 'chalk';

const validateInput = (token, name) => {
  if (token === '') {
    throw new Error('No token inserted. Please insert Github token');
  }
  if (name === '') {
    throw new Error('No name inserted. Please insert organization or user name');
  }
};

const buildUrl = (name) => `https://api.github.com/repos/${name}`;

const buildHeaders = (token) => {
  return {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`
  };
};

const deleteRepo = async (url, headers, repo) => {
  try {
    const response = await axios.delete(`${url}/${repo}`, { headers });
    console.log(chalk.green('\u2713'), chalk.green('Removal Succeeded:'), chalk.yellow(response.config.url));
  } catch (error) {
    if (error.response) {
      console.error(chalk.red(`${error.response.data.message}:`), chalk.yellow(error.response.config.url));
    } else if (error.request) {
      console.error(chalk.red('Request error:'), error.request);
    } else {
      console.error(chalk.red('Error:'), error.message);
    }
  }
};


const deleteRepos = async (token, name) => {
  try {
    validateInput(token, name);

    const url = buildUrl(name);
    const headers = buildHeaders(token);

    const lines = fs.readFileSync('fixtures/toDelete.txt', 'utf-8').split('\n').filter(Boolean);
    for (const repo of lines) {
      await deleteRepo(url, headers, repo);
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
  }
};

export default deleteRepos;
