function moveUp(element) {
    var row = element.parentNode.parentNode;
    var prevRow = row.previousElementSibling;
    if (prevRow) {
      row.parentNode.insertBefore(row, prevRow);
    }
  }
  
  function moveDown(element) {
    var row = element.parentNode.parentNode;
    var nextRow = row.nextElementSibling;
    if (nextRow) {
      row.parentNode.insertBefore(nextRow, row);
    }
  }

  