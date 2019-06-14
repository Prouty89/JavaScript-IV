// CODE here for your Lambda Classes

// Create 2-3 objects for each class and test them according to their unique attributes. 
//Classes: Person, Instructor, student, PM

//Person:
//*BASE CLASS* 
//Recieves name age location
//speak method
//Method logs out phrase Hello my name is Fred, I am from Bedrock where name and location are the objects. 
/*const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
*/

//base class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    //method
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

//Instructor class
class Instructor extends Person {
    constructor(instAttributes){
        super(instAttributes)
        this.specialty = instAttributes.specialty
        this.favLanguage = instAttributes.favLanguage
        this.catchPhrase = instAttributes.catchPhrase
    }
    demo(subject) {
        return `Instructor Dan Levy: Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

//Student class
class Student extends Person {
    constructor(stdAttributes) {
        super(stdAttributes) 
        this.previousBackground = stdAttributes.previousBackground
        this.className = stdAttributes.className
        this.favSubjects = stdAttributes.favSubjects
    }
    
    listsSubjects(){
        return this.favSubjects.map(element => element)
      //Had a difficult time here
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
        
}

//PM Class
class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName
        this.favInstructor = pmAttributes.className
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`
    }
}


//objects
const blake = new Person({
    name: 'Blake',
    age: 29,
    location: 'South Dakota'
})

const chase = new Person({
    name: 'Chase',
    age: 30,
    location: 'Florida'
})

const anna = new Person({
    name: 'Anna',
    age: 26,
    location: 'Oregon'
})

const dan = new Instructor({
    name: 'Dan',
    age: Infinity,
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia', 
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
})

const javi = new Student({
    name: 'Javi',
    age: 24,
    location: 'Michigan',
    specialty: 'Information Technology',
    favSubjects: ['Html', 'CSS', 'Javascript'],
    className: 'Web21',

})

const david = new Student({
    name: 'David',
    age: 29,
    location: 'Minnesota',
    specialty: 'Riding Motorcycle'
})

const jimmy = new Student({
    name: 'Jimmy',
    age: 23,
    location: 'Tennessee',
    specialty: 'Marketing'
})

const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});



//Logs
blake.speak()//console.log?
dan.speak()
console.log(dan.demo('JavaScript IV'))
console.log(dan.grade(jimmy, 'JavaScript!'))
console.log(javi.listsSubjects())
console.log(isaiah.PRAssignment(david, 'Redux'))
console.log(jimmy.sprintChallenge(javi, 'Advanced Javascript'))

//PM
console.log(pat.gradClassName)
console.log(pat.standUp('Patrick', 'Channel'))
console.log(austin.debugsCode('Austin', 'Jimmy', 'Callbacks'))

//Return to listsSubject

