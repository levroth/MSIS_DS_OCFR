var ocfrRecordsApp = new Vue({
  el: '#ocfrRecordsApp',
  data: {
      certificates: [],
      members: []
  },
  methods: {
    fetchMember() {
      fetch('api/members')
      .then(response => response.json())
      .then(json => { ocfrRecordsApp.members = json})
    },
    fetchCertification() {
      fetch('api/certificates')
      .then(response => response.json())
      .then(json => { ocfrRecordsApp.certificates = json})
    },
    certRowClick(c) {
      window.location.href = 'certInfo.html?cId='+c.cId;
    }
  },
  created() {
    this.fetchMember();
    this.fetchCertification();
    //this.fetchPatients();
  }
});
