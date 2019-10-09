var memberRecordApp = new Vue({
  el: '#memberRecordApp',
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
