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

const addMentor = (req, res) => {
    const { firstname, lastname, cellphone, email, linkedin, skills, biography } = req.body;

    pool.query(query.addMentor, [firstname, lastname, cellphone, email, linkedin, skills, biography], (error, results) => {
        if (error) {
            console.error("Error adding mentor:", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(201).json(results.rows[0]);
        }
    });
};

module.exports = {
    getMentor,
    getMentorById,
    addMentor,
};