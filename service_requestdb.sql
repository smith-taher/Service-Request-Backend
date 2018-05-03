CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NUll UNIQUE,
    hash BYTEA NOT NULL,
    phone NUMERIC (10),
    email VARCHAR
);

CREATE TABLE requests(
    request_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    user_apt NUMERIC,
    category VARCHAR,
    description VARCHAR
);

CREATE TABLE admin(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NUll UNIQUE,
    hash BYTEA NOT NULL,
    phone NUMERIC (10),
    email VARCHAR
);
