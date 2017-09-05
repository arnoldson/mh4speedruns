// require mongoose:
var mongoose = require('mongoose');
// get quest mongoose model:
var Quest = mongoose.model('Quest');

module.exports = {
    readAllQuests: function(req, res){
        Quest.find({}, function(err, quests){
            if (err){
                res.json(err);
            } else {
                res.json(quests);
            }
        })
    }
}
