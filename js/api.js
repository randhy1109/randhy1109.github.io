
var base_url = "https://private-044be-dicodingfootball.apiary-mock.com/";

 
var fetchApi = url => {
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    mode:'cors',
  headers: {
  'X-Auth-Token': "76eb4aa4cf384188be0ec90049edd0f6"
  },
 
  });
  }
 


//   function postData(url = '', data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'no-cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Auth-Token': '76eb4aa4cf384188be0ec90049edd0f6',

//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native JavaScript objects 
// }


  
  // Blok kode yang akan di panggil jika fetch berhasil
  function status(response) {
    if (response.status !== 200) {
      console.log("Error : " + response.status);
      // Method reject() akan membuat blok catch terpanggil
      return Promise.reject(new Error(response.statusText));
    } else {
      // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
      return Promise.resolve(response);
    }
  }

  // Blok kode untuk memparsing json menjadi array JavaScript
  function json(response) {
    return response.json();
  }
  // Blok kode untuk meng-handle kesalahan di blok catch
  function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
  }

  // Blok kode untuk melakukan request data json
  function getListLeague() {

    if ('caches' in window) {
      caches.match(base_url + "/api/v1/json/1/all_leagues.php").then(function(response) {
        if (response) {
          response.json().then(function (data) {
            var articlesHTML = `<table class="striped responsive-table centered">
            <thead>
              <tr>
                  <th>Liga</th>
                  <th>Sport</th>
                  <th>League Alternate</th>
              </tr>
            </thead>
            <tbody>`;

            data.leagues.forEach(function(article) {
              articlesHTML += `
              <tr>
              <td>  ${article.strLeague}</td>
              <td> ${article.strSport}</td>
              <td>${article.strLeagueAlternate}</td>
            </tr> 
                  `;
            });

            articlesHTML +=`
            </tbody>
            </table>
            `;
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("articles").innerHTML = articlesHTML;
          })
        }
      })
    }


    fetch(base_url + "/api/v1/json/1/all_leagues.php")
      .then(status)
      .then(json)
      .then(function(data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        // Menyusun komponen card artikel secara dinamis
        var articlesHTML = `
        <table class="striped responsive-table centered">
        <thead>
          <tr>
              <th>Liga</th>
              <th>Sport</th>
              <th>League Alternate</th>
          </tr>
        </thead>
        <tbody>`;

        data.leagues.forEach(function(article) {
          articlesHTML += `
          <tr>
            <td>  ${article.strLeague}</td>
            <td> ${article.strSport}</td>
            <td>${article.strLeagueAlternate}</td>
          </tr> 
              `;
        });

        articlesHTML +=`
        </tbody>
        </table>
        `;
        // Sisipkan komponen card ke dalam elemen dengan id #content
        document.getElementById("articles").innerHTML = articlesHTML;
      })
      .catch(error);
  }






  function getCoba() {
    if ('caches' in window) {
      caches.match(base_url + "/api/v1/json/1/search_all_teams.php?l={4328}").then(function(response) {
        if (response) {
          response.json().then(function (data) {
            var artikelsHTML = ` <table class="striped responsive-table centered">
            <thead>
              <tr>
                  <th>Logo Team</th>
                  <th>Team Name</th>
                  <th>Manager</th>
                  <th>Stadium</th>
                  <th>Web Site</th>
              </tr>
            </thead>
            <tbody>`;

            data.teams.forEach(function(artikel) {
              artikelsHTML += `
            <tr>
          
        <td><img src="${artikel.strTeamLogo}" height="auto" width="100px">  </td>
            <td> ${artikel.strTeam}</td>
            <td>${artikel.strManager}</td>
            <td>${artikel.strStadium}</td>
            <td><a href='${artikel.strWebsite}'>${artikel.strWebsite}<a/></td>
          </tr> 
                  `;
            });

            artikelsHTML +=`
            </tbody>
            </table>
            `;
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("coba").innerHTML =  artikelsHTML;
          })
        }
      })
    }





    fetch(base_url + "/api/v1/json/1/search_all_teams.php?l={4328}")
      .then(status)
      .then(json)
      .then(function(data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        // Menyusun komponen card artikel secara dinamis
        var artikelsHTML = `
        <table class="striped responsive-table centered">
        <thead>
          <tr>
              <th>Logo Team</th>
              <th>Team Name</th>
              <th>Manager</th>
              <th>Stadium</th>
              <th>Web Site</th>
          </tr>
        </thead>
        <tbody>`;

        data.teams.forEach(function(artikel) {
          artikelsHTML += `
          <tr>
          
        <td><img src="${artikel.strTeamLogo}" height="auto" width="100px">  </td>
            <td> ${artikel.strTeam}</td>
            <td>${artikel.strManager}</td>
            <td>${artikel.strStadium}</td>
            <td><a href='${artikel.strWebsite}'>${artikel.strWebsite}<a/></td>
          </tr> 
              `;
        });

        artikelsHTML +=`
        </tbody>
        </table>
        `;
        // Sisipkan komponen card ke dalam elemen dengan id #content
        document.getElementById("coba").innerHTML = artikelsHTML;
      })
      .catch(error);
  }