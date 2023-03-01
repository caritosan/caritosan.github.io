
// Para comprobar que está cargando el archivo
console.log('Tomando el archivo funciones.js');




// Ejemplo tomado de https://randomuser.me/
// (Para usar con la librería jquery)
// Para elegir género, edad, etc
// https://randomuser.me/documentation#gender

$.ajax({
  url: 'https://randomuser.me/api/?gender=female&nat=es',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    document.getElementById('foto').src = data.results[0].picture.large; // "https://randomuser.me/api/portraits/women/23.jpg"; 
    document.getElementById('foto').alt = data.results[0].name.first + ' ' + data.results[0].name.last;
    document.getElementById('nombre').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
    document.getElementById('correo').innerHTML = data.results[0].email;
    document.getElementById('edad').innerHTML = 'Edad: ' + data.results[0].dob.age;
    document.getElementById('telefono').innerHTML = 'Tel: ' + data.results[0].phone;
    document.getElementById('celular').innerHTML = 'Cel: ' + data.results[0].cell;
  }
});