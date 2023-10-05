const pool = require('../db');
const mentorQuery = require('./mentorQuery')

const getMentors = (req, res) => {
    pool.query(mentorQuery.getMentors, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMentorById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(mentorQuery.getMentorById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addMentor = (req, res) => {
    const { firstname, lastname, cellphone, email, linkedin, skills, biography} = req.body;
    // Check if email exists:
    pool.query(mentorQuery.CheckEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }
        // Add mentor to db:
        const biographyObj = biography.map((item) => {
            return {
                key: item,
                value: item
            };
        });
        const skillsObj = skills.map((item) => {
            return {
                key: item,
                value: item
            };
        });


        // const biographyObj = biography.reduce((acc, item) => {
        //     acc.push(item);
        //     return acc;
        // }, []);
        // const skillsObj = skills.reduce((acc, item) => {
        //     acc.push(item);
        //     return acc;
        // }, []);
        // ----------
        pool.query(require.addMentor, [firstname, lastname, cellphone, email, linkedin, skillsObj, biographyObj], (error, results) => {
            if (error) throw error;
            res.send(200).send("mentor created Successfully!");                           
        });
    }); 
};


module.exports = {
    getMentors,
    getMentorById,
    addMentor,
};