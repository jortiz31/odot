function index(req, res) {
    res.json({
        message: 'welcom to ODOT',
        documentation_url: 'https://github.com/jortiz31/odot/api.md',
        base_url: 'http://odot_app.herokuapp.com',
        endpoints: [
            {method: 'GET', path: '/api', description: 'describes endpoints'}
        ]
    });
}

function templates(req, res) {
    var name = req.params.name;
    res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;