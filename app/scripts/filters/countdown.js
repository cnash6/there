angular.module('thereApp')

.filter('countdown', function() {

  return function(someDate) {
    var duration = moment.duration(moment(someDate) - moment());
    var result;
    if (duration.days() === 0) {
      result = duration.humanize();
    } else {
      result = moment(someDate).format('MM/DD/YY, h:mm a');
    }
    return result;
  };

});
