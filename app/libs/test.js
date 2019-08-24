console.log('Hi!');
//функция для вывода значения на которое отличаются массивы
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
arr1 = [2,4];
arr2 = [2,4];
console.log('arr1: ' + arr1);
console.log('arr2: ' + arr2);
console.log('var num = arr2.diff(arr1)');
var num = arr2.diff(arr1);
console.log(num + ' — это лишнее число.');

var arr3 = [2,4,6];
var arr4 = [2,4,6,7];
var bigArr = [1, arr1, arr2, arr3, 9, arr4, 8, 5, 3];
console.log('arr1: ' + arr1);
console.log('arr2: ' + arr2);
console.log('arr3: ' + arr3);
console.log('arr4: ' + arr4);
//
var arrSumm = bigArr.reduce((acc, item) => acc.concat(item), []); //сложить все массивы в ряду/колонке/миниквадрате  ?и числа
//
console.log(bigArr);
console.log('var arrSumm = arr1.concat(arr2,arr3,arr4)');
console.log(arrSumm);
arrSumm.filter(item => item === 7).length
//
for (let i = 1; i <= 9; i++) {                             //найти уникальный вариант в ряду/колонке/миниквадрате
    if (arrSumm.filter(item => item === i).length == 1) {
        console.log(i)
    }
}
//
for (let i = 1; i <= 9; i++) {                             //найти уникальный вариант в ряду/колонке/миниквадрате
    if (arrSumm.filter(item => item === i).length == 1) {  
        for (let j = 0; j <=8; j++){
            if (Array.isArray(bigArr[j])) {
                if (bigArr[j].indexOf(i) !== -1) {        
                    console.log(bigArr[j]);
                    bigArr[j] = i;                        //присвоить уникальный элемент в ячейку
                }  
            }
        }
    }
}
//
console.log(bigArr);




// НЕПРАВИЛЬНО ПОНЯЛ МЕТОД!!! НЕ ИСПОЛЬЗОВАТЬ  - тут удалет из блока, а надо из группы где надена была пара: нашел в ряду удаляй в ряду и т.д.

var deleteOpenPairsVariantsFromMiniBlock = function() {  
for (let k = 0; k <= 8 ; k++){                //перебираем ряды
for (let i = 0; i <= 8 ; i++){               //перебираем ячейки в ряду
  if (arr[k][i].length == 2) {               //выбираем с длинной в 2 варианта
//    console.log('get cell with two variant arr[' + k + ']' + '[' + i + '], ' + arr[k][i]);
    for (let j = 0; j <= 8; j++) {                              //перебираем ячейки этого же ряда для сравнения с найденной
      if (arr[k][j].length == arr[k][i].length && j !== i) {    //одинаковая длинна и не этоже самая ячейка
        if (arr[k][j][0] == arr[k][i][0] && arr[k][j][1] == arr[k][i][1]) {
          console.log('in arr[' + k + ']' + '[' + i + '], elem [0]=' + arr[k][i][0] + ' elem [1]=' + arr[k][i][1]);
          console.log('in arr[' + k + ']' + '[' + j + '], elem [0]=' + arr[k][j][0] + ' elem [1]=' + arr[k][j][1] + ' — must be the same');
  
          var saveRow = k;
          var saveColumn = j;
          var firstMiniBlockPosition = 0;
          
          if (k <= 2 && j <= 2) {
          firstMiniBlockPosition = 1;
        } else if (k <= 2 && j <= 5 && j >= 3) {
          firstMiniBlockPosition = 2;
        } else if (k <= 2 && j <= 8 && j >= 6) {
          firstMiniBlockPosition = 3;
        } else if (k <= 5 && k >= 3 && j <= 2) {
          firstMiniBlockPosition = 4;
        } else if (k <= 5 && k >= 3 && j <= 5 && j >= 3) {
          firstMiniBlockPosition = 5;
        } else if (k <= 5 && k >= 3 && j <= 8 && j >= 6) {
          firstMiniBlockPosition = 6;
        } else if (k <= 8 && k >= 6 && j <= 2) {
          firstMiniBlockPosition = 7;
        } else if (k <= 8 && k >= 6 && j <= 5 && j >= 3) {
          firstMiniBlockPosition = 8;
        } else if (k <= 8 && k >= 6 && j <= 8 && j >= 6) {
          firstMiniBlockPosition = 9;
        };        
        
          console.log('save param ' + saveRow + ' and ' + saveColumn + ' for ' + arr[saveRow][saveColumn] + ' from miniBlock № ' + firstMiniBlockPosition);
          
        //надо настроить  
        var deleteVariantsFromMiniBlockNow = function(i,j) {
//          arr[i][j].splice(arr[i][j].indexOf(arr[saveRow][saveColumn][0]),1);
//          arr[i][j].splice(arr[i][j].indexOf(arr[saveRow][saveColumn][1]),1);
//лучше вызвать два раза всю функцию, а то удалеет лишнее    
          
            }  
        
        //готова, но пока вызывает в консоль
        /*
        var getVariantsFromMiniBlock = function(x , x1, y, y1) {
           for (let i = x; i <= x1; i++) {
	           for (let j = y; j <= y1; j++) {
                 if (typeof arr[i][j] == "object")  {       //исключает Number
                   if (saveRow !== i || saveColumn !== j) { //надо исключить родную ячейку из перебора, "или" должно подойти
		            console.log('check arr' + '['+ i + ']' + '[' + j + ']' + ' with variants ' + arr[i][j] + ' to delete ' + ' from it ' + arr[saveRow][saveColumn]);
                     if (arr[i][j].indexOf(arr[saveRow][saveColumn][0]) !== -1 || arr[i][j].indexOf(arr[saveRow][saveColumn][1]) !== -1   ){
                         console.log('have something to delete =)');
                          deleteVariantsFromMiniBlockNow(i,j);
                          
                         } else {
                           console.log('but nothing here...');
                         }
                    }
                 }
	           }
            }
        }  */
          /*
        var switchMiniBlock = function (name) {
          switch (name) {
          case 1:
            getVariantsFromMiniBlock(0,2,0,2);
          break;
          case 2:
            getVariantsFromMiniBlock(0,2,3,5);
          break;
          case 3:
            getVariantsFromMiniBlock(0,2,6,8);
          break;
          case 4:
            getVariantsFromMiniBlock(3,5,0,2);
          break;
          case 5:
            getVariantsFromMiniBlock(3,5,3,5);
          break;
          case 6:
            getVariantsFromMiniBlock(3,5,6,8);
          break;
          case 7:
            getVariantsFromMiniBlock(6,8,0,2);
          break;
          case 8:
            getVariantsFromMiniBlock(6,8,3,5);
          break;
          case 9:
            getVariantsFromMiniBlock(6,8,6,8);
          break;  
        }
        }  
        switchMiniBlock(firstMiniBlockPosition); 
         */
          
        }
      }
    }
  }
}  
}
  checkForError();
// последняя кавычка функции
}
