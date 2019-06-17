/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(goAttributes){
    this.createdAt = goAttributes.createdAt
    this.dimensions = goAttributes.dimensions
  }
    destroy() {
        return `${this.name} was removed from the game`
  }
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 class CharacterStats extends GameObject{
    constructor(csAttribute){
    super(csAttribute)
    this.healthPoints = csAttribute.healthPoints
    this.name = csAttribute.name
  }
 
  
 takeDamage() {
    return `${this.name} took damage`
  }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  //EXPLICIT BINDING(CALL)
  class Humanoid extends CharacterStats{
  constructor(humAttributes) {
      super(humAttributes)
      this.team = humAttributes.team
      this.weapons = humAttributes.weapons
      this.language = humAttributes.language
  }
    greet(name, language) {
    return `${this.name} says hello in ${this.language}`
  }
}

  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  //INHERITANCE!!
  
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  //NEW BINDING!!
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Gilligan',
      team: 'Islan Guild',
      weapons: [
        'Washed Up Anchor',
      ],
      language: 'Rum-Induced Babble',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Square',
      weapons: [
        'Giant Sweater',
        'Sun-Block',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lili',
      team: 'Fresh Peppers',
      weapons: [
        'Heavy Mug',
        'Sharp Pencil',
      ],
      language: 'Eloquent Javascript',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
