# plott-mongo

[![build status](https://secure.travis-ci.org/Plott/plott-mongo.png)](http://travis-ci.org/Plott/plott-mongo)

Creates connection, database and all necessary collections, indexes and models used by Plott.


### `plott.mongo(conn, db)`

Creates connection to MongoDB database.


### Parameters

| parameter | type   | description                                                            |
| --------- | ------ | ---------------------------------------------------------------------- |
| `conn`    | String | MongoDB connection uri "mongodb:///". Default ('mongodb://localhost/') |
| `db`      | String | database name. Default ('Plott')                                       |


### Example

```js
plott.mongo();

//=mongoose
```


**Returns** `Object`, mongoose

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install plott-mongo
```

## Tests

```sh
$ npm test
```


