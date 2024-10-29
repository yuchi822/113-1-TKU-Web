function printMultiplicationTable() {
    var size = 9; 
    for (var i = 1; i <= size; i++) {
        var row = ''; 
        for (var j = 1; j <= size; j++) {
            row += "".concat(i, " x ").concat(j, " = ").concat(i * j, "\t"); 
        }
        console.log(row.trim()); 
    }
}
printMultiplicationTable();
