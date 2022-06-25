// Задача Деструктурирующее присваивание

let { name, years : age, isAdmin = false } = user;

// Задача Максимальная зарплата

function topSalary(salaries) {

  let maxSalary = 0;
  let maxSalaryName = null;

  for(let [name, salary] of Object.entries(salaries)) {
    if(maxSalary < salary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
}