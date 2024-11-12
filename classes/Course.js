class Course {
    constructor(name) {
        this.name = name
        this.grades = []
    }
    addStudentGrade(student, grade) {
        this.grades.push({student, grade})
    }

    getGrades() {
        return this.grades
    }

    getAllCourseGrades () {
        return this.grades
    }

    getAverageGrade () {
        if  (this.grades.length === 0) {
            return -1;
        }
        const sum = this.grades.reduce((a,b) => a + b, 0);
        return sum / this.grades.length
    }
    description () {
        return `Selle kursuse nimi on: ${this.name}`;
    }
}

module.exports = Course;