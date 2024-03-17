const dbCon = require('./database_connection');

const getAllStudents = async () => {
  try {
    // query select
    const students = await dbCon.db.query('SELECT * FROM students;');

    // output students and return
    console.log(students);
    return students;
  } catch (e) { console.log(e); }
};

const addStudent = async (first_name, last_name, email, enrollment_date) => {
  try {
    // insert query
    const query = `
    INSERT INTO students(first_name, last_name, email, enrollment_date)
    VALUES($1, $2, $3, $4);
    `;

    // query arguments
    const values = [
      first_name,
      last_name,
      email,
      enrollment_date
    ];

    // pass query along with its arguments
    const add = await dbCon.db.query(query, values);
    console.log('Student Added!');
    return add;
  } catch (e) { console.log(e); }
}

const updateStudentEmail = async (student_id, new_email) => {
  try {
    // update query
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

    // query and its arguments
    const update = await dbCon.db.query(query, values);
    console.log('Email updated!');
    return update;
  } catch(e) { console.log(e); }
}

const deleteStudent = async (student_id) => {
  try {
    // query with argument references
    const query = `
    DELETE FROM students
    WHERE student_id = $1;
    `;

    const deletion = await dbCon.db.query(query, [student_id]);
    console.log('Student deleted!');
    return deletion;
  } catch (e) { console.log(e); }
}

module.exports = {
  getAllStudents,
  addStudent,
  updateStudentEmail,
  deleteStudent
};