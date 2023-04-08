//Inquirer prompts for portal
import inquirer from 'inquirer';
import {qryDpts, qryRoles, qryEmployees} from './server.cjs'; 


function startPortal(){

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
            switch (answer.employeeManagmemtPortal) {
                case 'View all Departments':
                    console.log('viewing all departments')
                    const viewDpts = await qryDpts();
                    console.table(viewDpts)
                    break;

                case 'Add Departments':
                    console.log('Adding a Department')

                    break;

                case 'View all Roles':
                    console.log('viewing all Roles')
                    const viewRoles = await qryRoles();
                    console.table(viewRoles);
                    break;

                case 'Add Role':
                    console.log('Adding a Role')

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
