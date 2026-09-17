"use strict";

const totalTasks = 14;
const completedTasks = 3;
const dailyLimit = 5;

let remainingTasks = totalTasks - completedTasks;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: вместо числа передана строка или другой тип.");
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение.");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: дробное количество.");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество.");
} else if (totalTasks > 1000) {
  console.log("Ошибка: превышена верхняя граница (максимум 1000).");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: некорректное число выполненных задач.");
} else if (dailyLimit > 1000) {
  console.log("Ошибка: превышена верхняя граница нормы.");
} else if (dailyLimit <1) {
  console.log("Ошибка; цикл не запускается.");
} else if (typeof dailyLimit === "string") {
  console.log("Ошибка: дневная норма задана строкой.");
} else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дробной дневной нормы быть не должно.");
} else if (typeof dailyLimit === "string") {
  console.log("Ошибка: дневная норма задана строкой.");
} else if (remainingTasks === 0) {
  console.log("0 дней; цикл не выполняется.");
} else {
  console.log("Осталось задач:", remainingTasks);
  let dayJobs  = 0;
  let dayCalen = 0;

  while (remainingTasks > 0){
    dayCalen+=1;
    if (( 0 < (dayCalen % 7)) &&  ((dayCalen % 7) < 6)) {
        dayJobs += 1; 
        console.log("День " + dayCalen + ": выполнено " + Math.min(dailyLimit, remainingTasks) + ", осталось " + (remainingTasks - Math.min(dailyLimit, remainingTasks)));
        remainingTasks -= Math.min(dailyLimit, remainingTasks);
    } else {
        console.log("День " + dayCalen + ": выходной")
    }
  }

  console.log("Потребуется " + dayJobs + " рабочих и " + dayCalen + " календарных дней");

}