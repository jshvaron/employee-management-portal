//Inquirer prompts for portal
import inquirer from 'inquirer';

function startPortal(){

    function menu(){
        inquirer.prompt([{

            name:   'Employee Managmemt Portal',
            type: 'list',
            message: 'Welcome to Employee Management Portal, how can I assist?',
            choices: [
                'View all Employees',
                'Add Employee',
                'Update Employee Role',
                'View all Roles',
                'Add Role',
                'View all Departments',
                'Add Departments',
                'Complete'
            ]
    
    
        }]).then(console.log('XXXXXXXXXXX'))
    }
    menu();

}
startPortal();
