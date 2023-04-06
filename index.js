//Inquirer prompts for portal
import inquirer from 'inquirer';

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
                    
                    break;

                case 'Add Departments':
                    console.log('Adding a Department')

                    break;

                case 'View all Roles':
                    console.log('viewing all Roles')

                    break;

                case 'Add Role':
                    console.log('Adding a Role')

                    break;

                case 'Update Employee Role':
                    console.log('Updating a role')

                    break;

                case 'View all Employees':
                    console.log('Viewing all Employees')

                    break;

                case 'Add Employee':
                    console.log('Adding an Employee')

                    break;

                case 'Complete' :
                    console.log('Session complete')

                    break;
            }

        })
    }
    menu();

}
startPortal();
