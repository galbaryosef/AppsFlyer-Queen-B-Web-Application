const getMentors = "SELECT * FROM mentors";
const getMentorById = "SELECT * FROM mentors WHERE id = $1";
const CheckEmailExists = "SELECT s FROM mentors s WHERE s.email = $1";
const addMentor = "INSERT INTO mentors (firstname, lastname, cellphone, email, linkedin, skills, biography) VALUES ($1, $2, $3, $4, $5, $6, $7)";

module.exports = {
    getMentors,
    getMentorById,
    CheckEmailExists,
    addMentor,
};