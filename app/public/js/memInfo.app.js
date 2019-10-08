var memberRecordApp = new Vue({
  el: '#memberRecordecordApp',
  data: {
      memberRecord: {},
      certificates: []
  },
  methods: {

  }, // end methods
  created() {
    this.handleReset();
    //this.fetchPatients();
  }
});
