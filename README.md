# Google Books Search

## Demo & Snippets

![google-books-collage](https://github.com/encodexed/google-books/assets/107448691/f10cf132-11b7-46d2-a56f-babf5a473b6d)

Full size images:

- [Landing Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699933106/google-books-landing_q2hqup.png)
- [Results Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699933124/google-books-results_mnuaau.png)
- [Book Information Modal](https://res.cloudinary.com/dihtw7wct/image/upload/v1699933129/google-books-modal_ml4pyg.png)

---

## Requirements / Purpose

Google Books Search is a project I built as part of my participation during the \_nology bootcamp. We were given a week to build a basic React app which interacted with a foreign API endpoint, in this case, the Google Books API. Some critical parts of this project include:

- fetching data within a React app
- dealing with data out of our control
- applying business logic to best present the data

---

## Build Steps

### Getting an API Key

To run this in your local environment, you will need a Google Books API key.

If you have your own Books API key already, you may skip to "Installing the project". However, if you don't have your own API key, you can get one by following these steps:

1. Visit `https://console.cloud.google.com/apis/dashboard`
2. Log in if necessary.
3. Create a new project, or use an existing one.
4. Use the searchbar to look for "Books API"
5. Choose and Enable the Books API
6. Create Credentials and select Public data
7. Your API Key should now appear and be useable within a `.env` file, which will be elaborated on below

### Installing the project

The next step is to install the project on your machine, which you can do by pasting this code in your terminal:

```bash
git clone git@github.com:encodexed/google-books.git
cd google-books
npm install
```

### Entering your API Key

The final step is to enter your API key into a `.env` file:

1. While at the root level of the application files, enter into your terminal:

```bash
cp .env.example .env
```

2. Paste your API key in the newly created `.env` file

You should now be good to go so you can run this to start the app:

```bash
npm run dev
```

---

## Design Goals / Approach

- I wanted to focus a bit more on the logic and fetching within the app this time around, and made the decision to imitate the styling of the Google home page with some modifications to colours primarily
- To prevent errors and unwanted UI being displayed to the user while data was being fetched, a loading component was added

---

## Features

The application is relatively simple on the surface, but you can expect to be able to:

- Send a GET request by searching with keyword(s)
- View a list of the returned results and some basic information
- View a more detailed individual book page in a pop-up modal

---

## Known issues

- Responsiveness issues
- Dark mode is incomplete

---

## Future Goals

This project is wrapped up and I will likely not be working on it anymore, instead focusing on new projects of greater learning potential. If I were to dedicate time to this project, I would:

- Implement the dark mode completely (this became difficult to implement later into the project as there way many layers controlling the colour of some elements)
- Make sure the app looks good on screens of all sizes; mostly just implementing a hamburger dropdown menu on the navbar
- Add a more gracious handling of empty search errors

---

## Struggles with the project

- Dark Mode:
  - This proved quite difficult to implement late in the project's lifespan. Being able to programmatically change the background colour was quite tricky at the time.

## Licensing Details

Copyright 2023 Robert Gollan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without limitation in the rights to use, copy, modify, merge, publish, and/ or distribute copies of the Software in an educational or personal context, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
Permission is granted to sell and/ or distribute copies of the Software in a commercial context, subject to the following conditions:

Substantial changes: adding, removing, or modifying large parts, shall be developed in the Software. Reorganizing logic in the software does not warrant a substantial change.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
