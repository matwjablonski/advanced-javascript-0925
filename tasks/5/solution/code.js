const user = {
  name: "Ania",
  showName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.showName();

//  wykorzystanie self

const user2 = {
  name: "Ania",
  showName: function () {
    const self = this;
    // const _this = this
    setTimeout(function () {
      console.log(self.name);
    }, 1000);
  }
};

// wykorzystanie bind

const user3 = {
  name: "Ania",
  showName: function () {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this), 1000);
  }
};

//  wykorzystanie arrow function

const user4 = {
  name: "Ania",
  showName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};