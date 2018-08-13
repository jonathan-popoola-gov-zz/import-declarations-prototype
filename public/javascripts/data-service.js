
var dataService = {
  data: [{'name': 'derik'}, {'name': 'travis'}, {'name':'dirk'}],
  get latest() {
    console.log("getting latest >>> ", item);
    return this.data;
  },
  set latest(item) {
    console.log("setting >>> ", item);
    data.push(item);
  }
};