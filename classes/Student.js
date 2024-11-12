const Person = require('./Person')

class Student extends Person{
    constructor(name, dateOfBirth) {
        super(name, dateOfBirth)
        this.grades = []
        this.student_id = null 
    }

    setID (id) {
        this.student_id =  id
    }

    getID () {
        return this.student_id
    }

    addGrades(course, grade) {
        this.grades.push({course, grade})
    }

    getGrades () {
        return  this.grades
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1; // Return -1 if no grades
        const total = this.grades.reduce((sum, grade) => sum + grade.grade, 0);
        return total / this.grades.length; // Calculate and return average
    }
    
    description () {
        return  `Selle õpilase nimi on: ${this.name}, ta on kurb, sest ta on id on  ${this.student_id}`;
    }
}

module.exports = Student;