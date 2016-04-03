angular.module('thereApp', [])

.filter('countdown', function(moment) {
  return function(someDate) {

    var duration = moment.duration(moment(someDate) - moment());
    if (duration.days() === 0) {
      return duration.humanize();
    } else {
      return moment(someDate).format('MM/DD/YY, h:mm a');
    }
  };
});
