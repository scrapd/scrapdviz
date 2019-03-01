# ScrAPDviz

Visualize Austin traffic fatalities from another angle.

## Quickstart

If you need to install tools that must be installed globally on your system (OSX only)
(most likely the first time you run this project):
```bash
bash tools/bootstrap-osx.sh
```

This will globally install tools like node.js.

Setup the local environment:
```bash
npm i
```

This will download all the project dependencies.

## Local development

To serve the project locally:
```bash
npm run dev
```

To test the project locally (i.e. running the full list of ci-tasks):
```bash
npm run ci
```
The `scripts` section of the `package.json` file will show you all the available commands.
