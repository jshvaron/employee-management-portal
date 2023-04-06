-- Departments
INSERT INTO departments (id, dpt_name) VALUES
(0, 'Sales'),
(1, 'Marketing'),
(2, 'Human Resources'),
(3, 'Finance');

-- Roles
INSERT INTO roles (id, title, salary, department_id) VALUES
(0, 'Salesperson', 50000.00, 0),
(1, 'Sales Manager', 100000.00, 0),
(2, 'Marketing Coordinator', 55000.00, 1),
(3, 'Marketing Manager', 110000.00, 1),
(4, 'HR Coordinator', 60000.00, 2),
(5, 'HR Manager', 120000.00, 2),
(6, 'Accountant', 70000.00, 3),
(7, 'Financial Analyst', 110000.00, 3);

-- Employees
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(0, 'John', 'Doe', 0, NULL),
(1, 'Jane', 'Smith', 1, 0),
(2, 'Bob', 'Johnson', 2, NULL),
(3, 'Alice', 'Williams', 3, 2),
(4, 'Mike', 'Brown', 4, NULL),
(5, 'Karen', 'Davis', 5, 4),
(6, 'David', 'Garcia', 6, NULL),
(7, 'Emily', 'Rodriguez', 7, 6);
