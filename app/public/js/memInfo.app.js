var memberRecordApp = new Vue({
  el: '#memberRecordApp',
  data: {
      currentPID: {},
      memberRecord: {},
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
      .then( json => { this.memberRecord = json[0] } )
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
      var updateString = 'api/memCerts/postNewCert.php';
      var newData = {"cId":"", "renewedDate":"","expDate":"","pId":""};
      newData.cId = this.addCert.cId;
      newData.renewedDate = this.addCert.date;
      newData.expDate = (Number((this.addCert.date).substring(0,4)) + Number(this.addCert.expiry)) + (this.addCert.date).substring(4);
      newData.pId = this.currentPID;

      for(var i in this.certificates) {
        if (this.certificates[i].cId == newData.cId ) {
          updateString = 'api/memCerts/postUpdateCert.php';
        }

      }
      console.log(updateString);
      fetch(updateString, {
        method:'POST',
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { this.certificates = json} )

      window.alert("Certification added/updated");

    },
    handleMemberDelete(event) {
        fetch('api/memInfo/delete.php?pId=' + this.memberRecord.pId)
        window.alert("Member was deleted");
        window.location.href = 'index.html';
    },
    handleMemberUpdate(event) {
      fetch('api/memInfo/post.php', {
        method:'POST',
        body: JSON.stringify(this.memberRecord),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Member was updated");
    }

  }, // end methods
  created() {
    this.getPID();
    this.fetchPID();
    this.fetchCerts();
    this.fetchAllCerts();

    if (this.memberRecord.isActive) {
      this.memberRecord.isActive = "Active";
    } else {
      this.memberRecord.isActive = "Inactive";
    }
  }
  });
