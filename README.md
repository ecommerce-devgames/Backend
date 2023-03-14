# About the project

Name: DevGames3 (Ecommerce)
Backend team: Sergio Genes, Alan Figueroa, Fabio Alessandro.
Frontend team: Francisco Garcia, Alex Duran, Maria Cruz Schena.

# Backend

## Getting started

1. Clone this repository in your CLI

```
git clone https://github.com/DevGames3/Backend.git
```

2. Install al the project dependencies

```
npm install or npm i
```

3. Create a PostgreSQL database in your CLI

```
createdb devgames3
```

4. We need to create an User Admin, for this task we need to execute the seed in the CLI from the folder seeds

```
node seedUser.js
```

5. Now we need to put in our DB games, genres, developers and platforms, for this we need to execute to more seeds in order and wait for the execution of each one.

```
 1: node seedAll.js
 2: node seedGames.js
```

6. Start the server.

```
npm start
```

## Whats happens here?

We put the server online in the port 3001 and it`s ready to recieve requests.

```
http://localhost:3001/
```

Link to Schema Design

```
https://dbdiagram.io/d/6408a718296d97641d866bcf
```

API Documentation

```
https://documenter.getpostman.com/view/25419703/2s93JtP3Yg
```
