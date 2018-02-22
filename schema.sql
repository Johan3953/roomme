DROP DATABASE IF EXISTS roomMe;
CREATE DATABASE roomMe;
USE roomMe;

CREATE TABLE users (
  id int(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  smoking BOOLEAN DEFAULT false,
  q1 int(1) NOT NULL DEFAULT 3,
  q2 int(1) NOT NULL DEFAULT 3,
  q3 int(1) NOT NULL DEFAULT 3,
  q4 int(1) NOT NULL DEFAULT 3,
  q5 int(1) NOT NULL DEFAULT 3,
  q6 int(1) NOT NULL DEFAULT 3,
  q7 int(1) NOT NULL DEFAULT 3,
  q8 int(1) NOT NULL DEFAULT 3,
  q9 int(1) NOT NULL DEFAULT 3,
  q10 int(1) NOT NULL DEFAULT 3,
  PRIMARY KEY (id)
);

INSERT INTO users (firstName, lastName, email, photo, smoking, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('sampleFirst1', 'sampleLast1', 'sample1@gmail.com', 'samplePhoto1', 0, 3, 4, 5, 4, 5, 3, 5, 4, 4, 5);
INSERT INTO users (firstName, lastName, email, photo, smoking, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('sampleFirst2', 'sampleLast2', 'sample2@gmail.com', 'samplePhoto2', 4, 5, 3, 5, 0, 3, 4, 5, 5, 4, 4);
INSERT INTO users (firstName, lastName, email, photo, smoking, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('sampleFirst3', 'sampleLast3', 'sample3@gmail.com', 'samplePhoto3', 0, 0, 3, 4, 5, 5, 4, 4, 4, 5, 2);
