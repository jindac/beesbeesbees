var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
};
ForagerBee.prototype = Object(Bee.prototype);
