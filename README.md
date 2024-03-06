This is the React Project for [Assessli](https://assessli.com) by `Vandeet Shah`.

# Getting Started

This project is made using React with `Next.js` framework and `ShadCN React UI library`.

## Project Setup

- `Download / Pull` entire repository from [here](https://github.com/vandeet0704/assessli-project.git).
- Open terminal and `cd` to project folder.
- Run `npm install`.
- Go to [`http://localhost:3000`](http://localhost:3000)

## Google Sheet Integration
Used [`SheetsDB`](https://sheetdb.io) for Google Sheet Integration. It turns CURL commands into simple API calls.

For integrating your own Google Sheet:
### Create new Sheet:
- Create a new Google Sheet.
- Add Columns `First Name`	`Last Name`	`Email`	`Country Code`	`Phone Number`	`Message`.
- Click on Share.
- Allow `Anyone with the link` access. Give `Edit` rights.
### Create new SheetDB API:
- Go to [`SheetsDB`](https://sheetdb.io)
- Create a new account if you do not have an account.
- Click on `Create new API`
- Paste your Google Sheets share link.
- Click on Create.
### Integrating into Code File:
- Go to `src/components/Form.tsx`.
- Find `onSubmit()` function.
- Replace already existing API Key inside `fetch()` with your API Key.

# Features

- Support for `Dark Mode` and `Light Mode`
- Completely `responsive` across all range devices.
- `Visual cue` for wrong inputs with valid messages.
- `Sonner` update on successful form submission.

