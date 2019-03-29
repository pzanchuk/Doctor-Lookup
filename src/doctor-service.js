export class Doctor {
  getDoctorByName(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getDocsInfoByName(promise){
      let names = "";
      let website ="";
      let 
      if(promise.data.length === 0){
        return "No results."
      }
      for (let i = 0; i < promise.data.length; i++) {
        names +="<li>" + promise.data[i].profile.first_name + " " + promise.data[i].profile.last_name + "</li>";
      }
      return names;
    }

}
