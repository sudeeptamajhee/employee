var faker = require('faker');

var database = { employees: []};

for (var i = 1; i<= 49; i++) {
  database.employees.push({
    id: i,
    employee_name: faker.name.firstName(),
    employee_salary: faker.random.number() * 10,
    employee_age: faker.random.number({
      'min': 25,
      'max': 60
  }),
    profile_image: "https://source.unsplash.com/50x50/?employee"
  });
}

console.log(JSON.stringify(database));