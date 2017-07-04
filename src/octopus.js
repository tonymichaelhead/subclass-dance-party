var Octopus = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span><img class="octopus" src="wormjelly.gif"></span>');
  this.$node.toggle();
  this.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  this.$node.css({top:0, left:0});
  this.setPosition(top, left);
};



Octopus.prototype = Object.create(makeDancer.prototype);
Octopus.prototype.constructor = Octopus;