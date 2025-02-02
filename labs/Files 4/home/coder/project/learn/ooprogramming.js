// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 1;
  }

  doSomethingFun() {
    this.energy -= 1;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp, hourlyWage) {
    super(name, age, energy);
    this.xp = 0;
    this.hourlyWage = 10;
  }

  sleep() {
    super.sleep();
  }

  doSomethingFun() {
    super.doSomethingFun();
  }

  goToWork() {
    this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  const bob = new Worker("Bob", 21, 110, 0, 10);
  bob.goToWork();
  return bob;
}

// Task 4: Code a manager object, methods
function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
