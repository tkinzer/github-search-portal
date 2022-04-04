# Github Repo Search Portal

TODO:

- Add storybook to the project
- Add fun design/theme
- Add more tests

## Development

yarn
yarn dev

Open the following in the browser to see the project: http://localhost:7456

## Building

yarn build
yarn serve

`yarn build` will create the assets in `dist` - a client and server folder. Serve will run `dist/server.js` with Node, but Docker or some other process manager could be used instead depending on the needs.

## Testing

yarn
yarn test

Run the jest tests.

## Notes

This search app is based off of vite-ts-react boilerplate, as well as leverages tailwind.css for quick prototyping with the styles. In light of the time constraints storybook might not be included, but typically I would recommended using storybook in conjunciton with chromatic.
