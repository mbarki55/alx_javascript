#!/usr/bin/node
function welcome(firstName, lastName) {
    const fullName = '${firstName} {$lastName{}';

    function displayFullName() {
        qlert('Welcome ${fullName}!');
    }
    displayFullName();
}

welcome('Holberton', 'School');