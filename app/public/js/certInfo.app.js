var certificationRecordApp = new Vue({
  el: '#certificationRecordApp',
  data: {
      currentCID: {},
      certRecord: {},
      members: []
  },
  methods: {
    getCID() {
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      this.currentCID = params.get('cId');
    },
    fetchCID() {
      fetch('api/certInfo/index.php?cId='+ this.currentCID)
      .then( response => response.json() )
      .then( json => { this.certRecord = json[0] } )
    },
    fetchMembers() {
      fetch('api/certMembers/index.php?cId=' + this.currentCID)
      .then( response => response.json() )
      .then( json => { this.members = json } )
    },
    handleCertDelete(event) {
        fetch('api/certInfo/delete.php?cId=' + this.certRecord.cId)

        window.location.href = 'index.html';
    },
    handleCertUpdate(event) {
      fetch('api/certInfo/post.php', {
        method:'POST',
        body: JSON.stringify(this.certRecord),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
    }

  }, // end methods
  created() {
    this.getCID();
    this.fetchCID();
    this.fetchMembers();
  }
});
