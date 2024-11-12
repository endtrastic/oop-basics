const Student = require('./Student');

class School{
    constructor(name) {
        this.name = name
        this.courses = []
        this.students = []
    }
    addCourse(course) {
        // Kontrolli, kas kursus on juba olemas
        if (this.courses.some(existingCourse => existingCourse.name === course.name)) {
            console.log(`Kursus ${course.name} on juba olemas.`);
            return; // Kui kursus on juba olemas, siis ei saa lisada uut
        }
        this.courses.push(course);
    }

    addStudent(student) {
        this.students.push(student);
    }
    addStudentGrade(student, course, grade) {
        // Vaatab, kas student eksisteerib koolis
        if (!this.students.includes(student)) {
            console.log("Õpilane ei ole koolis registreeritud.");
            return;
        }
        // Vaatab, et course eksisteerib
        if (!this.courses.includes(course)) {
            console.log("Kursus ei ole koolis olemas.");
            return;
        }

        student.addGrades(course.name, grade);

        if (!course.grades) {
            course.grades = []; 
        }
        course.grades.push(grade);
    }
    getStudents () {
        return this.students;
    }
    getCourses () {
        return this.courses;
    }
    getStudentsOrderedByAverageGrade() {
    // Saa kõik students-id
    const students = this.getStudents();

    // Sorteerib students-id hinnete keskmise järgi
    return students.sort((a, b) => {
        const averageA = a.getAverageGrade();
        const averageB = b.getAverageGrade();

        console.log(averageA, averageB)
        return averageB - averageA; 
    });
}
}

module.exports = School;