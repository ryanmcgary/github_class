// lets keep our stuff here

function anFunctionThatWillConflict (arg) {
  // This will be correct in master but a branch will be incorrect
  // After branching this function, we will incorrectly update it in the branch
  // Then we will fix the master!
  // Then we will show both rebase and merge methods for resolving
  Things = ["blah","blah","blah"]
  for (var i = Things.length - 1; i >= 0; i--) {
    bob = [];
    bob << Things[i]
  };
}


// BLAH BLAH BLAH

var module = (function (window){
  var localVariables, eAD, student;
  self = this;

  this.add = function (num) {
    return num + num
    // console.log("im called", num + num)
  }
  this.subtract = function (num) {
    return num - num
  }
  this.multiply = function (num) {
   return num * num
  }
  this.divide = function (num) {
    return num / num
  }
  
  return {
    public: function (arr) {
      return arr[0](arr[1])
    },
    extend: function (obj, num) {
      return obj(num)
    }
  }
})(window);
