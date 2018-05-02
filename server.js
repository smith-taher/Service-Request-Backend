require('dotenv').config()
const http = require('http');
const pg = require('pg-promise')();
const db = pg(process.env.DB_PATH);
const jwt = require('jsonwebtoken');
const fs = require('fs');

//listen on 3000