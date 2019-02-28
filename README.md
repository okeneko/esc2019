# esc2019

> This is a full-stack application that shows the entries of the Eurovision Song Contest 2019.

## Frameworks
- AdonisJS for the back-end
- PostgreSQL for the database
- Vue.js + Vuex for the front-end
- Bulma + Buefy for the styling
- Heroku for deployment

## Development

Clone the repository
`git clone https://github.com/okeneko/esc2019.git`

### Server-side setup

Install dependencies:
`npm install`
or
`yarn`

Run the AdonisJS migrations and seeders. The seeder inserts all the participating countries into the database (with no entries).
``` 
adonis migration:run
adonis seed
```

Run the development server
```adonis serve --dev```

### Client-side setup
Install dependencies:
`npm install`
or
`yarn`

Run the development server:
`npm run serve` or `yarn serve`

Build for production: 
`npm run build` or `yarn build`
The build output is automatically moved to the server folder: `/server/public`
