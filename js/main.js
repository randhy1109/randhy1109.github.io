var dbPromise = idb.open("pwa1", 1, function(upgradeDb) {
  if (!upgradeDb.objectStoreNames.contains("league")) {
    
    var os = upgradeDb.createObjectStore("league",{keyPath:'id',autoIncrement:true});
    
  }
});




function addTim() {

dbPromise.then(function(db) {
var lg = $('#logo').val();
var nt = $('#namatim').val();
var ns = $('#namastadiun').val();

  var tx = db.transaction(['league'], 'readwrite');
  var store = tx.objectStore('league');
  var item = {
    lg: lg,
    nt: nt,
    ns: ns
  };
  store.add(item); //menambahkan key "buku"
  return tx.complete;
}).then(function() {
  window.location.reload();
}).catch(function() {
  console.log('Buku gagal disimpan.')
})
}


// Update

$('#league').on('blur','.leagues',function() {

  
dbPromise.then(function(db) {
  var newText = $(this).html();

  var field = $(this).data("field");

  var id = $(this).data("id");

  var tx = db.transaction(['league'], 'readwrite');
  var store = tx.objectStore('league');

  var request = store.get(id);

  var data = request.result;
    if (field == "imageteam"){
      data.imageteam = newText;
    } else if(field == "nameteam"){
      data.nameteam = newText;
    }else if(field == "namestadiun"){
      data.namestadiun = newText;
    };

    store.put(data); //menambahkan KEY
    return tx.complete;

}).then(function() {
  console.log('Buku berhasil disimpan.');
}).catch(function() {
  console.error('Buku gagal disimpan.')
})

});


// // delete

function deletedb(id) {
  

dbPromise.then(function(db) {
  var tx = db.transaction('league', 'readwrite');
  var store = tx.objectStore('league');
  store.delete(id);
  return tx.complete;
}).then(function() {
  $('.league'+id).remove();
  window.location.reload();
  console.log('Item deleted '+ id );
});

}

// READ


function getdb() {
  

dbPromise.then(function(db) {
  var tx = db.transaction('league', 'readonly');
  var store = tx.objectStore('league');
  return store.getAll();
}).then(function(items) {

  var urtikelHTML= `
  <h4>Tampil Database</h4>
  <table class="striped responsive-table centered">
  <thead>
    <tr>
        <th>Logo</th>
        <th>Nama Tim</th>
        <th>Nama Stadiun</th>
        
    </tr>
  </thead>
  <tbody id="league">`;

items.forEach(function(baca) {
  urtikelHTML += `
          <tr>
 <tr>
          
      
      <td><span class="leagues" contenteditable="true" data-field="imageteam" data-id="${baca.id}"> <img src="${baca.lg}" height="auto" width="100px" ></span> </td>
      <td><span class="leagues" contenteditable="true" data-field="nameteam" data-id="${baca.id}">${baca.nt}</span></td>
      <td><span class="leagues" contenteditable="true" data-field="namestadiun" data-id="${baca.id}">${baca.ns}</span></td>
      <td> <button class="btn waves-effect waves-light" type="submit" name="action" onclick='deletedb(${baca.id})'>Delete</button> </td>
      <td> <button class="btn waves-effect waves-light" type="submit" name="action" onclick='updatedb(${baca.id})'>Update</button> </td>
    </tr> 
        `;

})

urtikelHTML +=`
        </tbody>
        </table>
        `;
 // Sisipkan komponen card ke dalam elemen dengan id #content
 document.getElementById("read").innerHTML = urtikelHTML;

 
}).catch(error);
    
}


















