
CREATE DATABASE parking_app;

\c parking_app;

CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(255), password_digest VARCHAR(255));

CREATE TABLE tickets(id SERIAL PRIMARY KEY, lat DECIMAL, lng DECIMAL, ticket_time VARCHAR(255), address VARCHAR(255));


