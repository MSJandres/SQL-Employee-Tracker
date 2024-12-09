DROP DATABASE IF EXISTS employees_database;
CREATE DATABASE employees_database;

\c employees_database;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER,
      FOREIGN KEY (role_id)
      REFERENCES role(id)
      ON DELETE SET NULL,
    manager_id INTEGER,
      FOREIGN KEY (manager_id)
      REFERENCES employee(id)
      ON DELETE SET NULL
);