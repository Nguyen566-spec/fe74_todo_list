function List() {
  this.arr = [];
  this.addItem = function (item) {
    this.arr.push(item);
  };
  this.findByItem = function (name) {
    var index = -1;
    this.arr.forEach(function (value, i) {
      if (value.name === name) {
        index = i;
      }
    });
    return index;
  };
  this.deleteItem = function (name) {
    var index = this.findByItem(name);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this.getByItem = function (name) {
    var index = this.findByItem(name);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };
}
