//Inquirer prompts for portal
import inquirer from 'inquirer';
// imports qrys for switch cases
import {qryDpts, qryRoles, qryEmployees, qrySelectDpt, qrySelectRole, qrySelectManager,  addDepartment, addRole, addEmployee} from './server.cjs'; 

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

                case 'View all Employees':
                    console.log('Viewing all Employees')
                    const viewEmployees = await qryEmployees();
                    console.table(viewEmployees);
                    menu();
                    break;

                case 'Add Employee':
                    console.log('Adding an Employee')
                    // qrys roles and coverts into inquirer choices
                    const roles = await qrySelectRole();
                    const roleChoices = roles.map((role)=> {
                        return {
                            name: role.title,
                            value: role.id
                        }
                    });
                    // qrys employees and coverts into inquirer choices by id
                    const managers = await qrySelectManager();
                    const managerChoices = managers.map((manager) => ({
                        ...{name: `${manager.id} - ${manager.first_name} ${manager.last_name}`, value: manager.id},
                        
                    }));

                    inquirer.prompt([
                        {
                            name: 'firstName',
                            type: 'input',
                            message: 'What is the Employees first name?',
                        },
                        {
                            name: 'lastName',
                            type: 'input',
                            message: 'What is the Employees last name?',
                        },
                        {
                            name: 'roleId',
                            type: 'list',
                            message: 'What is the Employees Role?',
                            choices: roleChoices,
                        },
                        {
                            name: 'managerId',
                            type: 'list',
                            message: 'Who manages this Employee?',
                            choices: managerChoices,
                            
                        }
                    ]).then(async(answer) => {
                        (console.log(answer));
                        (console.log(managerChoices));
                        await addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId)
                        menu();
                    })
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


