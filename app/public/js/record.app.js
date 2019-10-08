var ocfrRecordsApp = new Vue({
  el: '#ocfrRecordsApp',
  data: {
      certificates: [],
      members: []
  },
  methods: {

  }, // end methods
  created() {
    this.handleReset();
    //this.fetchPatients();
  }
});
