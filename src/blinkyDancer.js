var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step.bind(this);

  this.step = function() {
    oldStep();    
    this.$node.toggle();
  }.bind(this);

  this.step();
};



makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;



//var blinkyDancer = new makeBlinkyDancer(1, 2, 1000)*/