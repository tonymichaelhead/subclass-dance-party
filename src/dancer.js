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
