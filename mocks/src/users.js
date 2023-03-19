class User {
  constructor({ name, id, profession, age }) {
    this.name = name;
    this.id = parseInt(id);
    this.profession = profession;
    this.age = parseInt(age);
  }
}

module.exports = User;
