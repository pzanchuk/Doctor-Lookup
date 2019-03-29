export class Doctor {
  getDoctorByName(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.611%2C-122.340%2C090&skip=0&limit=60&user_key=${process.env.exports.apiKey}`;
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

  getDoctorByIssue(issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.611%2C-122.340%2C090&skip=0&limit=60&user_key=40984f6d0d0c00fb3ea39c291e28d322=${process.env.exports.apiKey}`;
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

  getName(promise){
    let names = "";
    if(promise.data.length === 0){
      return "No results."
    }
    for (let i = 0; i < promise.data.length; i++) {
      names +="<li>" + promise.data[i].profile.first_name + " " + promise.data[i].profile.last_name + "</li>";
    }
    return names;
  }

  getAddress(promise){
    let address = "";
    for (let i = 0; i < promise.data.length; i++) {
      address +="<li>" + promise.data[i].practices[0].visit_address.street + ", " + promise.data[i].practices[0].visit_address.city + " " + promise.data[i].practices[0].visit_address.state +", " + promise.data[i].practices[0].visit_address.zip + "</li>";
    }
    return address;
  }

  getNumber(promise){
    let number = "";
    for (let i = 0; i < promise.data.length; i++) {
      number +="<li>" + promise.data[i].practices[0].phones[0].number + "</li>";
    }
    return number;
  }

  getWebSite(promise){
    let website = "";
    for (let i = 0; i < promise.data.length; i++) {
      if(promise.data[i].practices[0].website === undefined){
        website += "<li>Website is not provided<li>"
      }else{
        website +="<li>" + promise.data[i].practices[0].website + "</li>";
      }
    }
    return website;
  }

  isAccepting(promise){
    let accepting = "";
    for (let i = 0; i < promise.data.length; i++) {
      if(promise.data[i].practices[0].accepts_new_patients === true){
        accepting += "<li>Yes</li>";
      }else{
        accepting += "<li>No</li>";
      }
    }
    return accepting;
  }
}
