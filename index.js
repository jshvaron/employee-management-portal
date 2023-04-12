//Inquirer prompts for portal
import inquirer from 'inquirer';
// imports qrys for switch cases
import {qryDpts, qryRoles, qryEmployees, qrySelectDpt, addDepartment, addRole} from './server.cjs'; 

function startPortal(){
    //  main menu
    function menu(){
        inquirer.prompt([{

            name:   'employeeManagmemtPortal',
            type: 'list',
            message: 'Welcome to Employee Management Portal, how can I assist?',
            choices: [
                'View all Departments',
                'Add Departments',
                'View all Roles',
                'Add Role',
                'Update Employee Role',
                'View all Employees',
                'Add Employee',
                'Complete'
            ]
    
        }]).then(async(answer)=> {
            // switches for selecttions
            switch (answer.employeeManagmemtPortal) {
                case 'View all Departments':
                    console.log('viewing all departments')
                    const viewDpts = await qryDpts();
                    console.table(viewDpts)
                    menu();
                    break;

                case 'Add Departments':
                    console.log('Adding a Department')
                    inquirer.prompt([
                    {
                        name: 'departmentName',
                        type: 'input',
                        message: 'Enter the name of the new department:',
                    }]).then(async (answer) => {
                        await addDepartment(answer.departmentName)
                        console.log(`ALERT: ${answer.departmentName} has been added as a new Department!`)
                        menu();
                    })
                    break;

                case 'View all Roles':
                    console.log('viewing all Roles')
                    const viewRoles = await qryRoles();
                    console.table(viewRoles);
                    menu();
                    break;

                case 'Add Role':
                    console.log('Adding a Role')
                    const departments = await qrySelectDpt();
                    const departmentChoices = departments.map((department) => {
                        return {
                            name: department.dpt_name,
                            value: department.id,
                        };
                    });
                    
                    inquirer.prompt([
                    {
                        name: 'title',
                        type: 'input',
                        message: 'Enter the title of the new Role:',                        
                    },
                    {
                        name: 'salary',
                        type: 'input',
                        message: 'Enter the salary for this Role:',
                    },
                    {
                        name: 'department_id',
                        type: 'list',
                        message: 'Select the associated Department for this Role:',
                        choices: departmentChoices,
                        // choices: How do we display the departments from db as choices here,
                    }
                ]).then(async (answer) => {
                    (console.log(answer))
                    await addRole(answer.title, answer.salary, answer.department_id);
                    console.log(`The Role: ${answer.title} has been added.`);
                    menu();
                })
                    break;

                case 'Update Employee Role':
                    console.log('Updating a role')

                    break;

                case 'View all Employees':
                    console.log('Viewing all Employees')
                    const viewEmployees = await qryEmployees();
                    console.table(viewEmployees);
                    break;

                case 'Add Employee':
                    console.log('Adding an Employee')

                    break;

                case 'Complete' :
                    console.log('Session complete')

                    break;
            }
            // add a .then promise to send us back to the main menu to do something else
        })

    }
    menu();

}
startPortal();
