'use strict';

const items = document.querySelectorAll('li');

const employees = Array.from(items).map((el) => ({
  name: el.textContent.trim(),
  position: el.dataset.position,
  salary: Number(el.dataset.salary.replace(/[$,]/g, '')),
}));

const getEmployees = (list) => {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((element) => {
    const li = document.createElement('li');

    li.textContent = element.name;
    li.dataset.position = element.position;
    li.dataset.salary = `$${element.salary.toLocaleString()}`;
    ul.appendChild(li);
  });
};

const sortList = (list) => {
  return list.sort((a, b) => b.salary - a.salary);
};

getEmployees(sortList(employees));
