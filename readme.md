# Github Repo Search Portal

In order to run this project, you will need to run it locally and requires that you can clone the repo, `git clone https://github.com/tkinzer/github-search-portal`, and `yarn install`.

TODO:

- Add storybook to the project
- Add toggle light/dark theme button
- Add more tests
- Setup docker
- Firebase hosting

## Development

`yarn
yarn dev`

Open the following in the browser to see the project: http://localhost:7456

## Building

`yarn build
yarn serve`

`yarn build` will create the assets in `dist` - a client and server folder. Serve will run `dist/server.js` with Node, but Docker or some other process manager could be used instead depending on the needs.

## Testing

`yarn
yarn test`

Run the jest tests for components.

## Notes

This search app is based off of vite-ts-react boilerplate, as well as leverages tailwind.css for quick prototyping with the styles. In light of the time constraints storybook might not be included, but typically I would recommended using storybook in conjunciton with chromatic.
