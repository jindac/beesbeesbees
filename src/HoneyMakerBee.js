var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
