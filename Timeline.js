// Handling type-ahead functionality
$('#shaSearch').typeahead( {source: revisions} );

var timeline = {};
timeline.counter = 0;
timeline.revisions = revisions;
timeline.scrollSpeed = 400;
timeline.toggleBtn = function () { $(this).toggleClass("active") };
timeline.goToCommit = function(sha) {
  var destinationOffset = $('#' + sha).offset().left;
  $("body").animate({scrollLeft: destinationOffset}, this.scrollSpeed);
};
timeline.navigateToRevisionFromSearch = function () {
  var sha = $('#shaSearch').val();
  timeline.goToCommit(sha);
}

$(".toggleable").bind('click', timeline.toggleBtn);
$("#shaForm").on('submit', function () {return(false)});
$("#goToSha").on('click', timeline.navigateToRevisionFromSearch);
