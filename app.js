const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  // Insert database name
  database: '',
  user: 'postgres',
  // Enter password
  password: ''
});

/**
 * 1) getAllStudents()
 * 
 * Queries the student table in the database
 */
const getAllStudents = async () => {
  await client.connect();

  // select all students from the database and return the result
  const result = await client.query('SELECT * FROM students;');
  console.log(result.rows);

  await client.end();
}

/**
 * 2) addStudent()
 * @params first_name, last_name, email, enrollment_date
 * 
 * Creates a new student and adds them to the student table
 */
const addStudent = async (first_name, last_name, email, enrollment_date) => {
  await client.connect();
  
  // query to insert a new student
  // argument values denoted by $1, $2, $3, $4
  const query = `
  INSERT INTO students(first_name, last_name, email, enrollment_date)
  VALUES($1, $2, $3, $4);`;

  // arguments for query
  const values = [
    first_name,
    last_name,
    email,
    enrollment_date
  ];

  const result = await client.query(query, values);
  console.log(result);

  await client.end();
}

/**
 * 3) updateStudentEmail()
 * @params student_id, new_email
 */
const updateStudentEmail = async (student_id, new_email) => {
  await client.connect();

  // query with argument references
  const query = `
  UPDATE students
  SET email = $2
  WHERE student_id = $1;
  `;

  // query arguments
  const values = [
    student_id,
    new_email
  ];

  const result = await client.query(query, values);
  console.log(result);

  await client.end();
}

/**
 * 4) deleteStudent()
 * @params student_id
 * 
 * Deletes the student with the provided student_id
 */

const deleteStudent = async (student_id) => {
  await client.connect();

  // query with argument references
  const query = `
  DELETE FROM students
  WHERE student_id = $1;
  `;

  // argument simple enough to include in query call
  const result = await client.query(query, [student_id]);
  console.log(result);

  await client.end();
}

getAllStudents();
// addStudent('Jane', 'Doe', 'JaneDoe@email.com', '3/15/24');
// updateStudentEmail(4, 'DoeJane@email.com');
// deleteStudent(4);