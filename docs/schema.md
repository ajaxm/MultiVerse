# Schema Information

## users
column name     | data type | details
----------------|-----------|--------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## poems
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
title        | string    | not null, indexed
author_id    | integer   | not null, foreign key (references users), indexed
num_stanzas  | integer   | not null, default: 6

## stanzas
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
order       | integer   | not null
poem_id     | integer   | not null, foreign key (references poems), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
poem_id     | integer   | not null, foreign key (references poems), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
poem_id     | integer   | not null, foreign key (references poems), indexed
user_id     | integer   | not null, foreign key (references users), indexed
