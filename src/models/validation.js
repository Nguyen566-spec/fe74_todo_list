function Validation() {
  this.isEmpty = function (value, id, message) {
    if (value === "") {
      get(id).style.display = "block";
      get(id).innerHTML = message;
      return false;
    }
    get("notiInput").style.display = "none";
    return true;
  };
  this.isExist = function (value, id, message, arr) {
    var exist = false;
    for (var i = 0; i < arr.length; i++) {
      var task = arr[i];
      if (task.name.toLowerCase() === value.toLowerCase()) {
        exist = true;
        break;
      }
    }
    if (exist) {
      get(id).style.display = "block";
      get(id).innerHTML = message;
      return false;
    }
    get("notiInput").style.display = "none";
    return true;
  };
}
