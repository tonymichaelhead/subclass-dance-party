// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  

  this.$node = $('<span class="dancer"></span>');
  

  this.step = function() {

    setTimeout(this.step, timeBetweenSteps);
  };

  this.step();

  this.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  this.setPosition(top, left);

  
};

makeDancer.prototype.lineUp = function(x, y) {
  this.setPosition(x, y);
};

makeDancer.prototype.doTrick = function() {
  this.$node.animate({ 'zoom': 1.5 }, 'slow');
  this.$node.animate({ 'zoom':  -1.5}, 'slow');
};