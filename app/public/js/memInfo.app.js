var memberRecordApp = new Vue({
  el: '#memberRecordApp',
  data: {
      memberRecord: [{
"members":[
  {"employeeID":"1", "firstName":"John", "lastName":"Doe", "radioNumber":"1", "stationNumber":"A-1"}
]
}],
      certificates: []
  },
  methods: {

  }, // end methods
  created() {
    //this.fetchPatients();
  }
});
