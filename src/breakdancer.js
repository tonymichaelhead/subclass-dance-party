var Breakdancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span><img class="breakdancer" src="breakdancer.gif"></span>');
  var oldStep = this.step.bind(this);

  // this.step = function() {
  //   oldStep();    
  //   //this.$node.toggle();
  // }.bind(this);
  
  this.step = function() {
    this.$node.toggle();
  };
  this.step();
  this.setPosition(top, left);

};



Breakdancer.prototype = Object.create(makeDancer.prototype);
Breakdancer.prototype.constructor = Breakdancer;