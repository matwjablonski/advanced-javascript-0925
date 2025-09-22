const user = {
  name: "Ania",
  showName: function () {
    setTimeout(function () {
      console.log(this.name);
    }.bind, 1000);
  }
};

user.showName();

//  wykorzystanie self

const self = this;


//  wykorzystanie arrow function

