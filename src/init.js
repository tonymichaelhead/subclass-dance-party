$(document).ready(function() {
  window.dancers = [];
  window.y = 10;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
  
  //adds octopus to the page
  $('.addOctopusButton').on('click', function() {
    var Octopus = window[$(this).data('octopus-maker-function-name')];
    
    var octopus = new Octopus(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000);

    $('body').append(octopus.$node);
    dancers.push(octopus);
  });

  $('.addBreakdancerButton').on('click', function() {
    var Breakdancer = window[$(this).data('breakdancer-maker-function-name')];
    
    var breakdancer = new Breakdancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000);

    $('body').append(breakdancer.$node);
    dancers.push(breakdancer);
  });


  $('.lineUpButton').on('click', function(e) {
    dancers.forEach((dancer) => {
      dancer.lineUp(0, y);
      y += 20;  
    });
  });

  $('.dancer').on('click', function(e) {
    alert('sad')
    this.$node.doTrick();
  });
});

