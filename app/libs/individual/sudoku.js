"use strict"

var arr = [
    [0, 5, 0, 4, 0, 0, 0, 1, 3],
    [0, 2, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 0, 0, 0, 8, 5, 6, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 0],
    [3, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 7, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0]
  ];

//отрисовка в flex-box таблице 
//section>div.sudokuTable1>div.sudokuBlock*9>div.sudokuCell*9
//inputCellVariant(sudokuCell[0], arr[0][0]); — [2,3,4,9]
var inputCellVariant = function(cell, arr) {
  cell.innerHTML = '<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>';
  var p = cell.getElementsByTagName('p');
  for (let i = 1; i <= 9; i++) {
    if (arr.indexOf(i) !== -1) {
		p[i - 1].innerText = i;
	   } 
  }
}
//inputCellNumber(sudokuCell[1], arr[0][1]) — 5
var inputCellNumber = function(cell, number) {
	var p = document.createElement('p');
    if (number == 0) {
      p.innerHTML = '';
    } else {
      p.innerHTML = number;
    }
	cell.innerHTML = '';
	cell.appendChild(p);
}
//fillSudokuTable('table1'); — <div class="sudokuTable1" id="table1">
var fillSudokuTable = function(tableId) {
  var sudokuTable = document.getElementById(tableId);
  var sudokuCell = sudokuTable.getElementsByClassName('sudokuCell');
  var numCell = 0;
  for (let k = 0; k <= 8; k++) {
	for (let j = 0; j <= 8; j++)  {
	if (Array.isArray(arr[k][j])) {
		inputCellVariant(sudokuCell[numCell], arr[k][j]);
	} else {
		inputCellNumber(sudokuCell[numCell], arr[k][j]);
	}
	numCell++;
    }
  }
}
//console.log(arr);
fillSudokuTable('table1'); //отрисуй исходную таблицу

//находим пустые(нулевые) позиции в матрице и превращяем их в массив
var findEmptyMakeObject = function() {
  for (let j = 0; j < arr.length; j++) {          //перебираем количество рядов
    for (let i = 0; i < arr[j].length; i++) {     //перебираем один ряд
      if (arr[j][i] == 0) {
        arr[j][i] = [];
      }
    }
  }
}
//перебираем числа от 1 до 9 в ряду и если их нет, то добавляем в массив который был нулем
var inputVariants = function() {
  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      if (typeof arr[k][j] == "object")  {
       //до этого ищем сами объекты
        for ( let i = 1; i < arr[k].length+1; i++) {
          if ( arr[k].indexOf(i) == -1) {
            arr[k][j].push(i);
          }
        }
       //как вывести поиск объекта и подставлять внутрь как аргумет другую фунцию хз, не находит var k
      }
    }
  }
}

var addCellInfo = function() {
  for (let r = 0; r <= 8; r++) {
    for (let c = 0; c <= 8; c++) {   
      if (Array.isArray(arr[r][c])) {
        arr[r][c]['row'] = r;
        arr[r][c]['column'] = c;
        if (r <= 2 && c <= 2) {
          arr[r][c]['block'] = 0;
        } else if (r <= 2 && c <= 5 && c >= 3) {
          arr[r][c]['block'] = 1;
        } else if (r <= 2 && c <= 8 && c >= 6) {
          arr[r][c]['block'] = 2;
        } else if (r <= 5 && r >= 3 && c <= 2) {
          arr[r][c]['block'] = 3;
        } else if (r <= 5 && r >= 3 && c <= 5 && c >= 3) {
          arr[r][c]['block'] = 4;
        } else if (r <= 5 && r >= 3 && c <= 8 && c >= 6) {
          arr[r][c]['block'] = 5;
        } else if (r <= 8 && r >= 6 && c <= 2) {
          arr[r][c]['block'] = 6;
        } else if (r <= 8 && r >= 6 && c <= 5 && c >= 3) {
          arr[r][c]['block'] = 7;
        } else if (r <= 8 && r >= 6 && c <= 8 && c >= 6) {
          arr[r][c]['block'] = 8;
        };
      }
    }}
}

//проверяем на повторы в рядах и стобцах
var checkForError = function() {
  for (let k = 0; k <= 8; k++) {
    for (let j = 0; j <= 8; j++) {
      for (let i = 0; i <= 8; i++) {
        if (arr[k][j] == arr[k][i] && j !== i) {
          console.log('Error! arr' + '['+ k + ']' + '[' + j + '] == arr' + '['+ k + ']' + '[' + i + ']' );
        }      
      } 
    } 
  }
  transArr(arr);
  for (let k = 0; k <= 8; k++) {
    for (let j = 0; j <= 8; j++) {
      for (let i = 0; i <= 8; i++) {
        if (arr[k][j] == arr[k][i] && j !== i) {
          console.log('Error! arr' + '['+ j + ']' + '[' + k + '] == arr' + '['+ i + ']' + '[' + j + ']' );
        }      
      } 
    } 
  }
  transArr(arr);
}

//если в ячейки только одни вариант, то вписываем его
var makeArrNumber = function() {
  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      if (typeof arr[k][j] == "object")  {
       //до этого ищем сами объекты
        for (let i = 0; i < arr.length; i++) {
          if (arr[k][j].length == 1) {
	         arr[k][j] = arr[k][j][0];
          }
        }
       //как вывести поиск объекта и подставлять внутрь как аргумет другую фунцию хз, не находит var k
      }
    }
  }
}
//ищем в объекте с вариантами совпадения в столбце и удалем если нашли
var deleteVariantsFromColumn = function() {
  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      if (typeof arr[k][j] == "object")  {
       //до этого ищем сами объекты
        for (let i = 0; i < arr.length; i++) {
          if ( arr[k][j].indexOf(arr[i][j]) !== -1 ) {
            arr[k][j].splice(arr[k][j].indexOf(arr[i][j]),1);
          }
        }
       //как вывести поиск объекта и подставлять внутрь как аргумет другую фунцию хз, не находит var k
      }
    }
  }
}
//ищем в объекте с вариантами совпадения в ряду и удалем если нашли
var deleteVariantsFromRow = function() {
  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      if (typeof arr[k][j] == "object")  {
       //до этого ищем сами объекты
        for (let i = 0; i < arr.length; i++) {
          if ( arr[k][j].indexOf(arr[k][i]) !== -1 ) {
            arr[k][j].splice(arr[k][j].indexOf(arr[k][i]),1);
          }
        }
       //как вывести поиск объекта и подставлять внутрь как аргумет другую фунцию хз, не находит var k
      }
    }
  }
}
//ищем в объекте с вариантами совпадения в маленьком квадрате и удалем если нашли
var checkVariantsFromMiniBlock = function() {
  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < arr[k].length; j++) {
      if (typeof arr[k][j] == "object")  {
       //до этого ищем сами объекты
        var miniBlockPosition = 0;
        if (k <= 2 && j <= 2) {
          miniBlockPosition = 1;
        } else if (k <= 2 && j <= 5 && j >= 3) {
          miniBlockPosition = 2;
        } else if (k <= 2 && j <= 8 && j >= 6) {
          miniBlockPosition = 3;
        } else if (k <= 5 && k >= 3 && j <= 2) {
          miniBlockPosition = 4;
        } else if (k <= 5 && k >= 3 && j <= 5 && j >= 3) {
          miniBlockPosition = 5;
        } else if (k <= 5 && k >= 3 && j <= 8 && j >= 6) {
          miniBlockPosition = 6;
        } else if (k <= 8 && k >= 6 && j <= 2) {
          miniBlockPosition = 7;
        } else if (k <= 8 && k >= 6 && j <= 5 && j >= 3) {
          miniBlockPosition = 8;
        } else if (k <= 8 && k >= 6 && j <= 8 && j >= 6) {
          miniBlockPosition = 9;
        };
        var deleteVariantsFromMiniBlock = function(l,k,j,i) {
              if ( arr[l][k].indexOf(arr[j][i]) !== -1 ) {
                arr[l][k].splice(arr[l][k].indexOf(arr[j][i]),1);
              }
            }
        var getVariantsFromMiniBlock = function(l1,l2,k1,k2,j1,j2,i1,i2) {
          var l, k, j, i;  
          for (l = l1; l <= l2; l++) {
              for (k = k1; k <= k2; k++) {
                for (j = j1; j <= j2; j++) {
                  for (i = i1; i <= i2; i++) {
                    if (typeof arr[l][k] == "object")  {  
                      deleteVariantsFromMiniBlock(l,k,j,i);
                    }
                  }
                }
              }
            }
        }
        switch (miniBlockPosition) {
          case 1:
            getVariantsFromMiniBlock(0,2,0,2,0,2,0,2);
          break;
          case 2:
            getVariantsFromMiniBlock(0,2,3,5,0,2,3,5);
          break;
          case 3:
            getVariantsFromMiniBlock(0,2,6,8,0,2,6,8);
          break;
          case 4:
            getVariantsFromMiniBlock(3,5,0,2,3,5,0,2);
          break;
          case 5:
            getVariantsFromMiniBlock(3,5,3,5,3,5,3,5);
          break;
          case 6:
            getVariantsFromMiniBlock(3,5,6,8,3,5,6,8);
          break;
          case 7:
            getVariantsFromMiniBlock(6,8,0,2,6,8,0,2);
          break;
          case 8:
            getVariantsFromMiniBlock(6,8,3,5,6,8,3,5);
          break;
          case 9:
            getVariantsFromMiniBlock(6,8,6,8,6,8,6,8);
          break;  
        }
       //как вывести поиск объекта и подставлять внутрь как аргумет другую фунцию хз, не находит var k
      }
    }
  }
}
var setSingleVariantsFromRow = function() {
  for (let k = 0; k <= 8; k++) {
      var arrSumm = arr[k].reduce((acc, item) => acc.concat(item), []); //сложить все массивы в ряду/колонке/миниквадрате  ?и числа
//
    for (let i = 1; i <= 9; i++) {                             //найти уникальный вариант в ряду/колонке/миниквадрате
        if (arrSumm.filter(item => item === i).length == 1) {
        }
    }
//
    for (let i = 1; i <= 9; i++) {                             //найти уникальный вариант в ряду/колонке/миниквадрате
        if (arrSumm.filter(item => item === i).length == 1) {  
            for (let j = 0; j <=8; j++){
                if (Array.isArray(arr[k][j])) {
                    if (arr[k][j].indexOf(i) !== -1) {
                         arr[k][j] = [];
                        arr[k][j][0] = i;                        //присвоить уникальный элемент в ячейку
                    }  
                }
            }
      }
    }
  }
}

//"Метод: Запертый кандидат" ищем запертого кандидата в блоке
var deleteCloseVariantsFromOther = function() {
  for (let i = 0; i <= 8; i++) {
  var blockForCheck = i; //ПОМЕНЯЙ ЕДИНИЦУ НА I
  var arrCollection = [];
  for (let r = 0; r <= 8; r++) {
	for (let c = 0; c <= 8; c++) {
		if (arr[r][c]['block'] == blockForCheck) {
			arrCollection.push(arr[r][c]);   //добавляем во временный массив
		}
	} 
  }  
  var workWithRow = function (cadidates, checkLockedCandidate) {
    for (let i = 0; i <= 8; i++) {                      //перебираем столбцы
            if (Array.isArray(arr[cadidates[0]['row']][i])){  //ищем только в массивах
             // console.log(arr[cadidates[0]['row']][i].indexOf(checkLockedCandidate[0]));
              if (arr[cadidates[0]['row']][i].indexOf(checkLockedCandidate[0]) !== -1 && arr[cadidates[0]['row']][i]['block'] !== cadidates[0]['block']) {                        //есть такое число и это не в одном блоке
                //console.log('here I whant delete! in column: ' + i);
                //console.log('length is  ' + arr[cadidates[0]['row']][i].length);
                if (arr[cadidates[0]['row']][i].length !== 1) {
                arr[cadidates[0]['row']][i].splice(arr[cadidates[0]['row']][i].indexOf(checkLockedCandidate[0]),1);
                } /*else {
                  console.log('I can`t did it  ');
                }*/
              } /*else { console.log('parent cell or not find (-1)'); }  */         
            } /*else {console.log('number');}*/
         } 
  }  
  var workWithColumn = function(cadidates, checkLockedCandidate) {
    for (let i = 0; i <= 8; i++) {                           //перебираем ряды
            if (Array.isArray(arr[i][cadidates[0]['column']])){  //ищем только в массивах
             // console.log(arr[i][cadidates[0]['column']].indexOf(checkLockedCandidate[0]));
              if (arr[i][cadidates[0]['column']].indexOf(checkLockedCandidate[0]) !== -1 && arr[i][cadidates[0]['column']]['block'] !== cadidates[0]['block']) {                        //есть такое число и это не в одном блоке
              // console.log('here I whant delete! in row: ' + i);
              // console.log('length is  ' + arr[i][cadidates[0]['column']].length);
                if ( arr[i][cadidates[0]['column']].length !== 1 ){
                 arr[i][cadidates[0]['column']].splice(arr[i][cadidates[0]['column']].indexOf(checkLockedCandidate[0]),1);
                } /*else {
                  console.log('I can`t did it  ');
                }*/
                
              } /*else { console.log('parent cell or not find (-1)'); }   */        
              } 
                /*else {console.log('number');}*/
              }
    }
  var whereFromPairs = function(cadidates, checkLockedCandidate) {
    if (cadidates[0]['row'] == cadidates[1]['row']) {
       //  console.log('cadidat ' + checkLockedCandidate[0] +' closed in row № ' + cadidates[0]['row']);
      
        workWithRow(cadidates, checkLockedCandidate);
      
       } else if (cadidates[0]['column'] == cadidates[1]['column']) {
	   // console.log('cadidat ' + checkLockedCandidate[0] +' closed in column № ' + cadidates[0]['column']);
         
         workWithColumn(cadidates, checkLockedCandidate);
         
        } /*else { 
       console.log('not closed') 
        } */
  }
 var getPairsOfTwoNum = function() {
  var concatArrInBlock = [].concat(...arrCollection);
  for (let i = 1; i <= 9; i++) {
	var checkLockedCandidate = concatArrInBlock.filter(function(number) {
		return number == i;
	});
    if (checkLockedCandidate.length == 2) {
		//console.log(checkLockedCandidate);
        var cadidates = [];
        for (let row = 0; row <= 8; row++) {
	     for (let column = 0; column <= 8; column++){
          if ( arr[row][column]['block'] == blockForCheck) {
            if (arr[row][column].indexOf(checkLockedCandidate[0]) !== -1) {
             // console.log(arr[row][column]);
              cadidates.push(arr[row][column]);
            }
          }
	     }
        }
        //console.log(cadidates);
        whereFromPairs(cadidates, checkLockedCandidate);
	}
  };
  }
  getPairsOfTwoNum();
  }
  checkForError();
}



//элегантная функция для транспонирования матрицы
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
//великолепная функция!
var transArr = function(nameMatrix) {
  const transposedMatrix = transpose(nameMatrix);
  arr = transposedMatrix;
  return arr;
}

var howMuch = 0;
var checkFinish = function() { //сумма всех ячеек должны быть равна 405
  for (let i = 0; i <= 8; i++){
    var result = arr[i].reduce(function(sum, current) {
    return sum + current;
}, 0);
howMuch += result;
  }
  if (howMuch != 405) {howMuch = 0};
} 

  
findEmptyMakeObject();
inputVariants();
addCellInfo();

var gosudoku = function() { //команды который у нас уже есть
makeArrNumber();
deleteVariantsFromRow();
deleteVariantsFromColumn();
checkVariantsFromMiniBlock();
setSingleVariantsFromRow();
transArr(arr); //транспонируем матрицу
setSingleVariantsFromRow(); //ещё раз прогоняем проверку но теперь это конолки
transArr(arr); //транспонируем матрицу обратно
deleteCloseVariantsFromOther(); //НЕ РАБОТАЕТ как надо делает дубли
checkForError();
  

checkFinish(); //складываем все значения в матрице для проверки   

}
//for (let i = 1; i <= 30; i++){
//  gosudoku();
//  if (i == 30) {
//    return arr;
//  }
//}












































