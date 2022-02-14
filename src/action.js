const core = request('@actions/core');
const github = require('@actions/github');

const run = async() => {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);

    const { context = {} } = github;
    const { pull_request } = context.payload;
    console.log('It is working!')
    console.dir( pull_request );
}

run();