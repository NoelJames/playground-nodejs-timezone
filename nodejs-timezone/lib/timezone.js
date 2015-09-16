var validator = require('validator');
var moment = require('moment-timezone');

var timezone_list = moment.tz.names();
exports.list = timezone_list

exports.convert = function(date_string, from_tz, to_tz, callback) {
  var errors = {};
  if (validator.toDate(date_string) === null) {
    errors['date'] = "Must be a valid date"
  }
  if (!validator.isIn(from_tz, timezone_list)) {
    errors['from_tz'] = "Must be a valid olson timezone name"
  }
  if (!validator.isIn(to_tz, timezone_list)) {
    errors['to_tz'] = "Must be a valid olson timezone name"
  }

  if (Object.keys(errors).length) {
    callback(errors, null)
  } else {
    from_date = moment.tz(date_string, from_tz);
    to_date = from_date.clone().tz(to_tz);
    callback(false, to_date.format());
  }
}
