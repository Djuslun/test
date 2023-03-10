const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
let isLeapYear = false;
const calendar = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
}


for (let month in calendar) {
  const option = document.createElement('option');
  option.value = month;
  option.innerHTML = `${month}`;
  monthSelect.append(option);
}

function genarateDays(month) {
  let currentDay = daySelect.value;
  daySelect.innerHTML = '';
  for (let i = 1; i <= calendar[month]; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = `${i}`;
    daySelect.append(option);
  }
  if (month === 'February' && isLeapYear) {
    const option = document.createElement('option');
    option.value = 29;
    option.innerHTML = `${29}`;
    daySelect.append(option);
  }
  if (calendar[month] > (currentDay || 1)) {
    daySelect.value = currentDay || 1;
  } else {
    daySelect.value = calendar[month];
  }
}

genarateDays('January');

function leapYearCheck(year) {
  return (year - 1900) % 4 === 0;
}

function genarateYears(min, max) {
  for (let i = max; i >= min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = `${i}`;
    yearSelect.append(option);
  }
}

genarateYears(1980, 2023);


monthSelect.addEventListener('change', () => {
  genarateDays(monthSelect.value);
})

yearSelect.addEventListener('change', () => {
  if (isLeapYear !== leapYearCheck(yearSelect.value)) {
    isLeapYear = leapYearCheck(yearSelect.value);
    genarateDays(monthSelect.value);
  }
})