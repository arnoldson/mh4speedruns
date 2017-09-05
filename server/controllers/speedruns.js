// require mongoose:
var mongoose = require('mongoose');
// get mongoose model for speedruns:
var Speedrun = mongoose.model('Speedrun');

//create and export functions to run CRUD for speedruns:
module.exports = {
    createSpeedrun: function(req, res){
        var newSpeedrun = new Speedrun();
        newSpeedrun.submitted_by = req.body.submitted_by;
        newSpeedrun.quest_id = req.body.quest_id;
        newSpeedrun.duration = req.body.duration;
        newSpeedrun.hunters = req.body.hunters;
        newSpeedrun.save(function(err, speedrun){
            if(err){
                res.json(err);
            } else {
                res.json(speedrun);
            }
        });
    },

    readAllSpeedruns: function(req, res){
        Speedrun.find({}, function(err, speedruns){
            if(err){
                res.json(err);
            } else {
                res.json(speedruns);
            }
        });
    },

    readOneSpeedrun: function(req, res){
        var speedrunID = req.params.id;
        Speedrun.findOne({ _id: speedrunID }, function(err, speedrun){
            if(err){
                res.json(err);
            } else {
                res.json(speedrun);
            }
        });
    },

    updateSpeedrun: function(req, res){
        var speedrunID = req.params.id;
        var update = req.body;
        Speedrun.findOneAndUpdate({ _id: speedrunID }, update, { new: true }, function(err, updatedSpeedrun){
            if(err){
                res.json(err);
            } else {
                res.json(updatedSpeedrun);
            }
        });
    },

    deleteSpeedrun: function(req, res){
        var speedrunID = req.params.id;
        Speedrun.remove({ _id: speedrunID }, function(err){
            if(err){
                res.json(err);
            }
        })
    }

}
