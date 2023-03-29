function diffDays(data) {
    var date1 = new Date();
    var date2 = new Date(data);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(diffDays)
    return diffDays;
  }