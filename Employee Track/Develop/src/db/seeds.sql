INSERT INTO department (department_name)
VALUES ('C-Suite'), --1
       ('Accounting'), --2
       ('Human Resources'), --3
       ('Manufacturing'), --4
       ('Security'), --5
       ('Custodial'); --6

INSERT INTO role (title, salary, department_id)
VALUES ('Chief Executive Officer', 2350000, 1), --1
       ('Chief Operating Officer', 1850000, 1), --2
       ('Chief Financial Officer', 1850000, 1), --3
       ('Executive Assistant', 35000, 1), --4
       ('HR Generalist', 30000, 3), --5
       ('Accountant', 45000, 2), --6
       ('Factory Floor Lead', 45000, 4), --7
       ('Assembly Line Worker', 19000, 4), --8
       ('Security Manager', 55000, 5), --9
       ('Custodian', 17000, 6); --10

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Cornelius', 'Carnegie', 1, null), --1
       ('John D.', 'Ford', 2, 1), --2
       ('Bill', 'Vanderbilt', 3, 1), --3
       ('Gerald', 'McNamara', 4, 1), --4
       ('Ronald', 'Pinkerton', 5, 1), --5
       ('Milton', 'Hayek', 6, 3), --6
       ('Mitchell Levi', 'Managere', 7, 2), --7
       ('Eugene V.', 'Fourier', 8, 7), --8
       ('George O.', 'Bentham', 9, 2), --9
       ('Murray', 'Bakunin', 10, 7); --10