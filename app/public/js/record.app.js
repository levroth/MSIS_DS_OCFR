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
    },
    handleMemberSubmit(event) {
      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Member was created");
      window.location.href = 'index.html';
    },
    handleCertSubmit(event) {
      console.log(this.newCert);
      fetch('api/certificates/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Certification was created");
      window.location.href = 'index.html';
    }
  },
  created() {
    this.fetchMember();
    this.fetchCertification();
    //this.fetchPatients();
  }
});
