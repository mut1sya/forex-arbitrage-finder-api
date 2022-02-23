# Forex Arbitrage Finder API

This is a nodejs api that finds forex arbitrage paths. The app consumes exchange rates from [freecurencyapi](https://freecurrencyapi.net/), and gets the arbitrage path from a provided base currency.

This api can be consumed by the frontend I created [here](https://github.com/mut1sya/forex-arbitrage-finder-frontend)

## Setup

To set up the api take the steps below:

### 1. Clone the repo

Clone the repo to your working directory.

    git clone https://github.com/mut1sya/forex-arbitrage-finder-api.git

### 2. Add the .env file

We need to configure some environment keys that will be used by the app. Create a `.env` file in the project root directory and add the following keys:

`FREE_CURRENCY_API_KEY=free-currency-api-key`

`APP_PORT=port-to-use`

An example of these is shown below:

    FREE_CURRENCY_API_KEY=ba1d-xxxx-xxxx-xxxx-0562655badd6
    APP_PORT=9000

### 3. Install dependencies

    yarn install

### 4. Run the app

To run the app in development mode:

    yarn dev

To run the app in production mode:

    yarn start

### 5. Endpoints

The api has 2 endpoints. One to get the currencies and the other to get the arbitrage path.

 URL                     | Method | description
-------------------------|--------|----------
/arbitrage/{basecurrency}| get    | gets the path to arbitrage
/currencies              | get    | gets all the currencies
