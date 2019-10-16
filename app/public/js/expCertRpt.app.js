var ocfrExpCertRptApp = new Vue({
  el: '#ocfrExpCertRptApp',
  data: {
      expMembers: [],
      expCerts: [],
      filter: {
        certName: '',
      }

  },
  methods: {
    fetchExpMembers() {
      fetch('api/expiredMembers')
      .then(response => response.json())
      .then(json => { ocfrExpCertRptApp.expMembers = json})
    },
    fetchExpCerts() {
      fetch('api/expiredCerts')
      .then(response => response.json())
      .then(json => { ocfrExpCertRptApp.expCerts = json})
    }
  },
  created() {
    this.fetchExpMembers();
    this.fetchExpCerts();
  }
});
