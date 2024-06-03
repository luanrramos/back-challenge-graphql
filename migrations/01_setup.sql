CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(255) primary key,
  name VARCHAR(255) not null,
  email VARCHAR(255) not null unique,
  createdAt VARCHAR(255) not null,
  updatedAt VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR(255) primary key,
    name VARCHAR(255) not null,
    price int not null,
    userId VARCHAR(255),
    INDEX user_rel(userId)
);

ALTER TABLE projects ADD FOREIGN KEY (userId) REFERENCES users (id);  


