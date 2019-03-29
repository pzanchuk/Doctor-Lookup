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

  getName(promise){
    let names = "";
    // let website ="";
    // let accepting = "";


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
    if(promise.data.length === 0){
      return "No results."
    }
    for (let i = 0; i < promise.data.length; i++) {
      address +="<li>" + promise.data[i].practices[0].visit_address.street + ", " + promise.data[i].practices[0].visit_address.city + " " + promise.data[i].practices[0].visit_address.state +", " + promise.data[i].practices[0].visit_address.zip + "</li>";
    }
    return address;
  }

  getNumber(promise){
    let number = "";
    if(promise.data.length === 0){
      return "No results."
    }
    for (let i = 0; i < promise.data.length; i++) {
      number +="<li>" + promise.data[i].practices[0].phones[0].number + "</li>";
    }
    return number;
  }

  getWebSite(promise){
    let website = "";
    if(promise.data.length === 0){
      return "No results."
    }
    for (let i = 0; i < promise.data.length; i++) {
      website +="<li>" + promise.data[i].practices[0].website + "</li>";
    }
    return website;
  }

  isAccepting(promise){
    let accepting = "";
    if(promise.data.length === 0){
      return "No results."
    }
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
