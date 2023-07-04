function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Женя", "Мужской", 28);
let student2 = new Student("Эмилия", "Женский", 24);
let student3 = new Student("Александр", "Мужской", 28);



Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

student1.setSubject("Algebra");
console.log(student1);

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks);
	} else {
		return 0;
	}

}

student2.addMarks(4, 5, 4, 5);
console.log(student2);

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
		return this.marks.reduce((acc, val) => acc + val / this.marks.length, 0)
	} else {
		return 0;
	}
}

console.log(student2.getAverage());

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}

student3.setSubject("Biology");
student3.exclude("Плохая учеба");
console.log(student3);