const skills = [
    { id: 1, skillName: "HTML", aquired: 2019 },
    { id: 2, skillName: "CSS", aquired: 2019 },
    { id: 3, skillName: "javascript", aquired: 2021 },

]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(newSkill) {
    //add the ID 
    let currDate = new Date();
    let today = `${currDate.getMonth() + 1} / ${currDate.getDate()} / ${currDate.getFullYear()}`;
    newSkill.id = Date.now() % 1000000;
    newSkill.aquired = today;
    skills.push(newSkill);
}

function deleteOne(id) {
    const index = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(index, 1);
}