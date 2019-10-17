var ocfrRecordsApp = new Vue({
  el: '#ocfrRecordsApp',
  data: {
      certificates: [],
      newCert: {},
      members: [],
      newMember: {}
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
    },
    memRowClick(m) {
      window.location.href = 'memInfo.html?pId='+m.pId;
    }
  },
  created() {
    this.fetchMember();
    this.fetchCertification();
    //this.fetchPatients();
  }
});
