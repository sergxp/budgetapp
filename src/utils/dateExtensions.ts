declare global {
    interface Date {
    toShortDateString: () => string;
}
}
Date.prototype.toShortDateString = function() {
    var year = this.getFullYear();

    var month = (1 + this.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = this.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}

export {}