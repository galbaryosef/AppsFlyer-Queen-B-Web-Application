const getMentors = "SELECT * FROM mentors";
const getMentorById = "SELECT * FROM mentors WHERE id=$1";
const addMentor = `
    INSERT INTO mentors (firstname, lastname, phone, email, linkedin, skills, biography, password)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;`;
const checkEmailExistence = "SELECT * FROM mentors WHERE email = $1";
const deleteMentorById = `
  DELETE FROM mentors
  WHERE id = $1
  RETURNING *;`;
//const getMentorByEmail = "SELECT * FROM mentors WHERE email = $1 AND password = $2";
//const getUserByEmail = 'SELECT * FROM users WHERE email = $1';

module.exports = {
  getMentors,
  getMentorById,
  addMentor,
  checkEmailExistence,
  deleteMentorById,
  //getMentorByEmail,
  //getUserByEmail,
};
