const form = document['form'];

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const country = form.country.value;

  const checkedArr = [];

  for (let i = 0; i < form.food.length; i++) {
    if (form.food[i].checked) {
      checkedArr.push(form.food[i].value);
    }
  }

  alert(
    'first name: ' +
      firstName +
      '  last name: ' +
      lastName +
      '  age :' +
      age +
      '  gender: ' +
      gender +
      ' You are traveling to: ' +
      country +
      'Your diet preference is: ' +
      checkedArr
  );
});
