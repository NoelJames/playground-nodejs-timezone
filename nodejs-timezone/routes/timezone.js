var express = require('express');
var router = express.Router();
var timezone = require('../lib/timezone')

router.post('/', function(req, res) {
  timezone.convert(req.body.date, req.body.from_tz, req.body.to_tz,
    function(error, result) {
      if (error != false) {
        res.status(400);
        res.json(error);
      } else {
        res.json(result);
      }
    }
  );
});

module.exports = router;
