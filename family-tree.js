class FamilyTree {
  constructor (value) {
    this.value = value;
    this.children = [];
    if (!(this.value)) {
      throw Error;
    } 
    
  if (typeof this.value !== 'string') {
      throw Error;
    }
  }
  insert (value) {
    const child = new FamilyTree(value);
    if (child) {
      this.children.push(child);
    }
  }

  familySize () {
      let familySize = this.children.length + 1;
      return familySize;
  }

  findMember (value) {
    debugger;
    if (this.value === value) {
      return this.value;
    } else if (value.children !== null) {
      for (let i = 0; i == null && i < value.children.length; i++) {
        return findMember(value.children[i])
      }
    }
  }

  log (value) {
    return '--`${this.value}`';
  }
}

module.exports = FamilyTree;
