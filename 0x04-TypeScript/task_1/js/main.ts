interface StudentClass{
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

class StudentClass {
    constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass("John", "Doe");
console.log(student1.displayName()); 
console.log(student1.workOnHomework());
