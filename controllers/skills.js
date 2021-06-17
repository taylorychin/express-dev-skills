const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}


function index(req, res) {
    //get all the skills
    const skills = Skill.getAll();
    //render the skills/index.ejs
    //passing it to the index.
    res.render("skills/index", { skills });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/show", { skill });
};


function newSkill(req, res) {
    res.render("skills/new");
}

function create(req, res) {
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed (non-GET request)
    res.redirect('/skills');
    // redirect takes a path, not a view template
    // a redirect informs the browser to issue a 
    // new GET request to the provided path
}
//delete complete
function deleteSkill(req, res) {
    Skill.deleteOne(req.param.id);
    res.redirect("/skills");
}

