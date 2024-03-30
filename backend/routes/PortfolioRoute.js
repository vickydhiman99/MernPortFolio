const router = require("express").Router();

const { Intro, About, Project, Exprience, Contact, Courses } = require("../models/PortfolioModel");

// get all portfolio data------------------<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>
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

// put all intro data------------------<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: 'intro updates successfuly'
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;