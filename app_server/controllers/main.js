/* GET homepage*/
const index = (req, res) => {
    render.render('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index
};