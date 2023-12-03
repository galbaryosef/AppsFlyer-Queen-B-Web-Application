const getMentors = "SELECT * FROM mentors";
const getMentorById = "SELECT * FROM mentors WHERE id=$1";
const addMentor = `
    INSERT INTO mentors (firstname, lastname, phone, email, linkedin, skills, biography, password,photo)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;`;
const checkEmailExistence = "SELECT * FROM mentors WHERE email = $1";
const deleteMentorById = `
  DELETE FROM mentors
  WHERE id = $1
  RETURNING *;`;

const getMentorsBySkill = (skillsArray) => {
  const conditions = skillsArray.map(
    (skill) => `m.skills @> ARRAY['${skill}']::text[]`
  );
  const conditionString = conditions.join(" OR ");
  return `
      SELECT m.*, m.skills AS skills
      FROM mentors m
      WHERE ${conditionString}
    `;
};
//const getMentorByEmail = "SELECT * FROM mentors WHERE email = $1 AND password = $2";
//const getUserByEmail = 'SELECT * FROM users WHERE email = $1';

module.exports = {
  getMentors,
  getMentorById,
  addMentor,
  checkEmailExistence,
  deleteMentorById,
  getMentorsBySkill,
  //getMentorByEmail,
  //getUserByEmail,
};