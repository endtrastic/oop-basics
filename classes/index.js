// Kogematta panin alguses koik class-id yhte kohta

const { name } = require("ejs");

class Person {
    constructor(name) {
        this.name = name;
        this.dateOfBirth = null;
    }

    setDateOfBirth(year) {
        this.dateOfBirth = year;
    }

    getDateOfBirth() {
        return this.dateOfBirth
    }

    age() {
        if (!this.dateOfBirth) {
            return "Vanus on teadmata";
        }
        const currentYear = new Date().getFullYear();
        return `Ta on ${currentYear - this.dateOfBirth} aastane.`;
    }

    getName() {
        return this.name
    }

    description() {
        return `Selle inimese nimi on: ${this.name}, ta on väga lahe.`;
    }
}

class Student {
    constructor(name) {
    this.name = name
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

    getAverageGrade () {
        if  (this.grades.length === 0) {
            return -1;
        }
        const sum = this.grades.reduce((a,b) => a + b, 0);
        return sum / this.grades.length;
    }
    description () {
        return  `Selle õpilase nimi on: ${this.name}, ta on kurb, sest ta on id on  ${this.student_id}`;
    }
}

class Course {
    constructor(name) {
        this.name = name
    }
    getAllCourseGrades () {
        return this.grades
    }

    getAverageCourseGrade () {
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

class School {
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
        
        // 
        return averageB - averageA; 
    });
}
}



const school = new School("My School");
const student1 = new Student("Alice");
const student2 = new Student("Bob");
const course1 = new Course("Math");

school.addStudent(student1);
school.addStudent(student2);
school.addCourse(course1);

student1.addGrades(course1.name, 90);
student1.addGrades(course1.name, 85);
student2.addGrades(course1.name, 80);
student2.addGrades(course1.name, 95);

console.log(JSON.stringify(school.getStudentsOrderedByAverageGrade(), null, 2));