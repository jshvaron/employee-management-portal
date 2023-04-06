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

                    break;
                case 'Add Departments':

                    break;
                case 'View all Roles':

                    break;
                case 'Add Role':

                    break;
                case 'Update Employee Role':

                    break;
                case 'View all Employees':

                    break;
                case 'Add Employee':

                    break;
                case 'Complete' :

                    break;
            }

        })
    }
    menu();

}
startPortal();
