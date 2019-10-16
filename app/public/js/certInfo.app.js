var certificationRecordApp = new Vue({
  el: '#certificationRecordApp',
  data: {
      currentCID: {},
      certRecord: [],
      members: []
  },
  methods: {
    getCID() {
      let params = new URLSearchParams(locaion.search);
      currentCID = params.get('cId');
    }
  }, // end methods
  created() {
    //this.fetchPatients();
  }
});
