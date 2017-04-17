
CREATE DATABASE parking_app;

\c parking_app;

CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(255), password_digest VARCHAR(255));


