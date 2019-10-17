var memberRecordApp = new Vue({
  el: '#memberRecordApp',
  data: {
      currentPID: {},
      memberRecord: [],
      certificates: [],
      allCerts: [],
      addCert: {"cId":"", "date":"", "expiry":""}
  },
  methods: {
    getPID() {
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      this.currentPID = params.get('pId');
    },
    fetchPID() {
      fetch('api/memInfo/index.php?pId='+ this.currentPID)
      .then( response => response.json() )
      .then( json => { this.memberRecord = json } )
    },
    fetchCerts() {
      fetch('api/memCerts/index.php?pId=' + this.currentPID)
      .then( response => response.json() )
      .then( json => { this.certificates = json } )
    },
    fetchAllCerts() {
      fetch('api/certificates')
      .then( response => response.json() )
      .then( json => { this.allCerts = json} )
    },
    handleCertSubmit(event) {
      var newData = {"cId":"", "renewedDate":"","expDate":"","pId":""};
      newData.cId = this.addCert.cId;
      newData.renewedDate = this.addCert.date;
      newData.expDate = (Number((this.addCert.date).substring(0,4)) + Number(this.addCert.expiry)) + (this.addCert.date).substring(4);
      newData.pId = this.currentPID;
      fetch('api/memCerts/postCert.php', {
        method:'POST',
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { this.certificates = json} )

    },
    handleMemberDelete(event) {
        fetch('api/memInfo/delete.php?pId=' + this.memberRecord[0].pId)
        window.location.href = 'index.html';
    }

  }, // end methods
  created() {
    this.getPID();
    this.fetchPID();
    this.fetchCerts();
    this.fetchAllCerts();
  }
  });
