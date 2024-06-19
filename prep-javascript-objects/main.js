const person = {
  firstName: 'Philip',
  lastName: 'Choe',
  hobby: 'weight lifting',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is", fullName);

person.job = 'Self-employed';
console.log("The person's job is", person.job);

person['previousJob'] = 'a student';
console.log("The person's previous job was", person['previousJob']);
