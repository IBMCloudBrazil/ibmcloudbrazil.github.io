# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

You're going to need [`git`](https://git-scm.com/) to get the project, and [`node`](https://nodejs.org/en/) and
[`npm`](https://npmjs.com/) to install dependencies and run scripts.

1. Fork the repo using the button at the top-right of [the repo home page](https://github.ibm.com/Jason-Lengstorf/docs-starter)
2. Clone your fork of the repo
   ``` sh
   
   git clone git@github.ibm.com:YOUR_GITHUB_USERNAME/docs-starter.git
   cd docs-starter
   ```
3. Run `npm install` to install dependencies
4. Create a branch for your PR
   ``` sh
   git checkout -b feature/your-feature-name
   ```

## Committing and Pushing changes

~~This project uses [`semantic-release`][semantic-release] to do automatic releases and generate a changelog based on the
commit history.~~ (Semantic releases are coming soon.) So we follow [a convention][convention] for commit messages. Please follow this convention for your
commit messages.

You can use `commitizen` to help you to follow [the convention][convention]

Once you are ready to commit the changes, please use the below commands

1. Run `git add <files to be comitted>` to stage changed files
2. Run `npm run commit` to start commitzen to commit those files

... and follow the instruction of the interactive prompt.

### Good commit messages are enforced

There is git hooks set up with this project that are automatically installed when you install dependencies. They're really handy, and they enforce good habits

## Help needed

Please check [the issues](https://github.ibm.com/jason-lengstorf/docs-starter/issues) for a list of outstanding issues — your help is hugely appreciated. Please watch the repo and respond to questions/bug reports/feature requests.

[semantic-release]: https://npmjs.com/package/semantic-release
[convention]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md
