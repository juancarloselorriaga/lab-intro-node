'use strict';
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a - b;
    })
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    return Math.max.apply(null, this.items)
  }
  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    return Math.min.apply(null, this.items)
  }
  sum() {
    if (this.items.length === 0){
      return 0
    }
    return this.items.reduce((total, num) => total += num)
  }
  average(){
    if (this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    return this.sum() / this.length;
  }
};

module.exports = SortedList;
