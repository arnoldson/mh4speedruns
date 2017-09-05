// require all controllers:
var quests = require('../controllers/quests');
var speedruns = require('../controllers/speedruns');

module.exports = function(app){
    // Quests:

    // READ ALL
    app.get('/quests', function(req, res) {
        quests.readAllQuests(req, res);
    });

    // Speedruns:

    // CREATE:
    app.post('/speedruns/new', function(req, res) {
        speedruns.createSpeedrun(req, res);
    })
    // READ ALL:
    app.get('/speedruns/all', function(req, res) {
        speedruns.readAllSpeedruns(req, res);
    });
    // READ ONE:
    app.get('/speedruns/:id', function(req, res) {
        speedruns.readOneSpeedrun(req, res);
    });
    // UPDATE:
    app.put('/speedruns/update/:id', function(req, res) {
        speedruns.updateSpeedrun(req, res);
    });
    // DELETE:
    app.delete('/speedruns/delete/:id', function(req, res) {
        speedruns.deleteSpeedrun(req, res);
    });
}
