const functions = require('./config/functions');
const prompt = require('prompt-sync')();

console.log('Welcome to the student Database\nPick from any of the options to interact');

const main = async () => {
  while (true) {
    console.log('\n(1) getAllStudents\n(2) addStudent\n(3) updateStudentEmail\n(4) deleteStudent\n(q) Quit the program');
    let userInp =  prompt('Enter the number of the function you want to run: ');

    if (userInp === '1') {
      await functions.getAllStudents();
    } else if (userInp === '2') {
      let firstName = prompt("Enter the student's first name: ");
      let lastName = prompt("Enter the student's last name: ");
      let email = prompt("Enter the student's email: ");
      let enrollmentDate = prompt("Enter the student's name(Format: mm/dd/yy): ");

      await functions.addStudent(firstName, lastName, email, enrollmentDate);
    } else if (userInp === '3') {
      let studentId = Number(prompt("Enter the student's ID number: "));
      let newEmail = prompt("Enter the new email: ");

      await functions.updateStudentEmail(studentId, newEmail);
    } else if (userInp === '4') {
      let studentId = Number(prompt("Enter the student's ID number: "));

      await functions.deleteStudent(studentId);
    } else if (userInp === 'q') {
      return;
    } else {
      console.log("I don't recognize that command, try again!");
    }
  }
};

main();
