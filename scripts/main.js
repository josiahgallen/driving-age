'use strict';
var $ = require('jquery');

var countries = {
	usa: 16,
	france: 18,
	nigeria: 18,
	israel: 18,
	indonesia: 17,
	uk: 16,
	fiji: 17,
	guam: 16
}
console.log(countries.usa.valueOf());

$('#submit').on('submit', function(e) {
	e.preventDefault();
	var age = parseInt($('#age').val());
	var canDriveIn = [];
	for (var key in countries) {
		if(age >= countries[key]){
			canDriveIn.push(key);
		}
	}
	console.log(canDriveIn);
	var canIDrive = '';
	age > 15 ? canIDrive = 'You are old enough to drive in: ' : canIDrive = 'You are not old enough to drive.';
	age < 0 || isNaN(age) ? canIDrive = 'Pleae enter a valid age' : '';
	$('#result').html(canIDrive+' '+canDriveIn.join(', ').toUpperCase());
});