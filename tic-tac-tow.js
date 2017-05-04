$(document).ready(function(){
  var verticalWins = [['td.top-left', 'td.middle-left', 'td.bottom-left'],
                     ['td.top-right', 'td.middle-right', 'td.bottom-right'],
                     ['td.top-middle', 'td.middle-middle', 'td.bottom-middle']]
  var diagonalWins = [['td.top-left', 'td.middle-middle', 'td.bottom-right'],
                     ['td.top-right', 'td.middle-middle', 'td.bottom-left']]
  var checkForWin = function(){
    downWin();
    acrossWin();
    diagonalWin();
    isTie();
  }
  var isTie = function(){
    if(!$('table').text().includes("'")){
      clearBoard();
      alert('TIE GAME!! PLAY AGAIN!')
    }
  }
  var clearBoard = function(){
    $('td').html("''");
  }

  var didXwin = function(string){
    if(string.includes('XXX')){
      clearBoard();
      alert('Xs WIN!!');
    }
  }

  var didOwin = function(string){
    if(string.includes('OOO')){
      alert('Os WIN!!!');
      clearBoard();
    }
  }
  var diagonalWin = function(){
    diagonalWins.forEach(function(diagonal){
      checkString = ''
      for(var i = 0; i < diagonal.length; i++){
        checkString = checkString + $(diagonal[i]).text();
      }
      didXwin(checkString);
      didOwin(checkString);
    })
  }
  var downWin = function(){
    verticalWins.forEach(function(column){
      checkString = ''
      for(var i = 0; i < column.length; i++){
        checkString = checkString + $(column[i]).text();
      }
      didXwin(checkString);
      didOwin(checkString);
    })
  }

  var acrossWin = function(){
    var across = ['#row1', '#row2', '#row3']
    across.forEach(function(row){
      didOwin($(row).text().replace(/\s/g,''));
      didXwin($(row).text().replace(/\s/g,''));
    })
  }

  var turnCount = 0

  var incrementTurn = function(){
    turnCount ++;
  }

  var takeTurn = function(element){
    console.log(element);
    if(turnCount % 2 == 0 && element.text() != "O"){
      element.html('X');
      incrementTurn();
      checkForWin();
    }
    else if(element.text() != "X"){
      element.html('O');
      incrementTurn();
      checkForWin();
    }
  }
  $('td').click(function(){
    td = $(this);
    takeTurn(td);
  })
})
