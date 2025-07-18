//Programming Challenge: Number of Days Between Two Dates
//Task:
// Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD".

// Hint: 1 Day = 24 * 60 * 60 * 1000 milisec;

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));  // Output: 30

function calculateDaysBetweenDates(d1 , d2){
  const day_1 = new Date(d1);
  const day_2 = new Date(d2);
  const diff = day_2-day_1
  return Math.abs(diff/(24 * 60 * 60 * 1000));
}
