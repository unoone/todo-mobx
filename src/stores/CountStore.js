import { types } from "mobx-state-tree";

const CountStore = types
  .model({
    count: types.number
  })
  .views(self => ({
    get computedCount() {
      return self.count;
    }
  }))
  .actions(self => ({
    increment() {
      console.log("increment");
      self.count++;
    }
  }));

export default CountStore;
