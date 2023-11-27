const pool = require("../db");
const query = require("./mentorQuery");

const getMentor = (req, res) => {
  pool.query(query.getMentors, (error, results) => {
    if (error) {
      console.error("Error fetching mentors:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getMentorById = (req, res) => {
  const { id } = req.params;
  pool.query(query.getMentorById, [id], (error, results) => {
    if (error) {
      console.error("Error fetching mentor by id:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const deleteMentorById = (req, res) => {
  const { id } = req.params;

  pool.query(query.deleteMentorById, [id], (error, results) => {
    if (error) {
      console.error("Error deleting mentor:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (results.rowCount === 0) {
        res.status(404).json({ error: "Mentor not found" });
      } else {
        res.status(200).json({ message: "Mentor deleted successfully" });
      }
    }
  });
};

const addMentor = (req, res) => {
  const {
    firstname,
    lastname,
    phone,
    email,
    linkedin,
    skills,
    biography,
    password,
  } = req.body;

  const photo = req.file ? req.file.filename : null; // Extract the filename from req.file

  pool.query(
    query.checkEmailExistence,
    [email],
    (emailCheckError, emailCheckResults) => {
      if (emailCheckError) {
        console.error("Error checking email existence:", emailCheckError);
        res.status(500).json({
          error: "Internal server error",
          details: emailCheckError.message,
        });
      } else {
        if (emailCheckResults.rows.length > 0) {
          res.status(400).json({ error: "Email already exists" });
        } else {
          pool.query(
            query.addMentor,
            [
              firstname,
              lastname,
              phone,
              email,
              linkedin,
              skills,
              biography,
              password,
            ],
            (addMentorError, results) => {
              if (addMentorError) {
                console.error("Error adding mentor:", addMentorError);
                res.status(500).json({
                  error: "Internal server error",
                  details: addMentorError.message,
                });
              } else {
                res.status(201).json(results.rows[0]);
              }
            }
          );
        }
      }
    }
  );
};


const getMentorsBySkill = (req, res) => {
  const { skills } = req.params;
  const skillsArray = skills.split(',');

  const querySkills = query.getMentorsBySkill(skillsArray);

  pool.query(querySkills, (error, results) => {
    if (error) {
      console.error("Error fetching mentors by skill:", error);
      res.status(500).json({ error: "Internal server error", details: error.message });
    } else {
      res.status(200).json(results.rows);
    }
  });
};


module.exports = {
  getMentor,
  getMentorById,
  addMentor,
  deleteMentorById,
  getMentorsBySkill,
};

