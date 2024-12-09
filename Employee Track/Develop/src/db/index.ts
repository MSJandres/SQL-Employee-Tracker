import { pool } from './connection.js';
import { QueryResult } from 'pg';

export default class DB {
    constructor(){}

    async query(sql: string, args: any[] = []): Promise<QueryResult> {
        const client = await pool.connect();

        try {
            return client.query(sql, args);
        } finally {
            client.release();
        }
    }

    viewAllEmployees() {
        return this.query(
            `SELECT e1.id, e1.first_name, e1.last_name, role.title AS "Title", department.department_name AS "Department", role.salary AS "Salary", e2.first_name || ' ' || e2.last_name AS "Manager"
                FROM employee e1 JOIN role ON e1.role_id = role.id
	            JOIN department ON role.department_id = department.id
	            LEFT JOIN employee e2 ON e1.manager_id = e2.id;`
        );
    }

    viewEmployeesByManager(manager_id: number) {
        return this.query(
            `SELECT employee.id AS "Employee ID", employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS "Title", department.department_name AS "Department"
                FROM employee
                JOIN role 
                    ON employee.role_id = role.id
	            JOIN department 
                    ON role.department_id = department.id
                WHERE employee.manager_id = $1`,
                [manager_id]
        );
    }

    viewEmployeesByDepartment(department_id: number) {
        return this.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title
                FROM employee
                JOIN role
                    ON employee.role_id = role.id
                JOIN department
                    ON role.department_id = department.id
                    WHERE role.department_id = $1`,
                    [department_id]
        );
    }

    viewAllRoles() {
        return this.query(
            `SELECT role.id, role.title, department.department_name, role.salary
	            FROM role
	            JOIN department ON role.department_id = department.id;`
        );
    }

    viewAllDepartments() {
        return this.query(
            `SELECT department.id, department.department_name 
                FROM department;`
        )
    }

    addNewEmployee(first_name: string, last_name: string, role_id: number, manager_id: ( number | null )) {
        return this.query(
            `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
            [first_name, last_name, role_id, manager_id]
        );
    }

    addNewRole(title: string, salary: number, department_id: number) {
        return this.query(
            `INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3)`,
            [title, salary, department_id]
        );
    }

    addNewDepartment(department_name: string) {
        return this.query(
            `INSERT INTO department(department_name) VALUES ($1)`,
            [department_name]
        );
    }

    updateEmployeeRole(id: number, role_id: number) {
        return this.query(
            `UPDATE employee SET role_id = $2 WHERE id = $1`,
            [id, role_id]
        );
    }

    updateEmployeeManager(id: number, manager_id: number) {
        return this.query(
            `UPDATE employee SET manager_ID = $2 WHERE id = $1`,
            [id, manager_id]
        );
    }

    viewSalaryTotalsByDepartment(id: number) {
        return this.query(
            `SELECT department.department_name, sum(role.salary)
	            FROM role
	            JOIN department
		            ON role.department_id = department.id
	            WHERE department.id = $1
	            GROUP BY department.department_name`,
                [id]
        );
    }

    deleteEmployee(id: number) {
        return this.query(
            `DELETE FROM employee WHERE id = $1`,
            [id]
        );
    }

    deleteRole(id: number) {
        return this.query(
            `DELETE FROM role WHERE id = $1`,
            [id]
        );
    }

    deleteDepartment(id: number) {
        return this.query(
            `DELETE FROM department WHERE id = $1`,
            [id]
        );
    }
}