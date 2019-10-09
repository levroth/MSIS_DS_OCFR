var ocfrRecordsApp = new Vue({
  el: '#ocfrRecordsApp',
  data: {
      certificates: [],
      members: []
  },
  methods: {
    fetchMember() {
      fetch('api/member')
      .then(response => response.json())
      .then(json => { ocfrRecordsApp.members = json})
    },
    fetchCertification() {
      fetch('api/certificates')
      .then(response => response.json())
      .then(json => { ocfrRecordsApp.certificates = json})
    }
  },
  created() {
    this.fetchMember();
    this.fetchCertification();
    //this.fetchPatients();
  }
});
