const router = require("express").Router();

const { Intro, About, Project, Exprience, Contact, Courses } = require("../models/PortfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const expriences = await Exprience.find();
        const projects = await Project.find();
        const cources = await Courses.find();
        const contacts = await Contact.find();

        res.status(200).send({
            Intro: intros[0],
            About: abouts[0],
            Exprience: expriences,
            Project: projects,
            Courses: cources,
            Contact: contacts[0],
        })

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;