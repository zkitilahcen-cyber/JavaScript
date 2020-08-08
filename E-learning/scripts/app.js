  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAVz6hYSTTC6HAJG5kX5IDrbn_ko0xqqg",
    authDomain: "lab-7--solution.firebaseapp.com",
    databaseURL: "https://lab-7--solution.firebaseio.com",
    projectId: "lab-7--solution",
    storageBucket: "lab-7--solution.appspot.com",
    messagingSenderId: "835140196405",
    appId: "1:835140196405:web:b58378758ea79ab1d0797c",
    measurementId: "G-PLMS5926QK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();

//   // post formateurs
//   const submitBtnF = document.querySelector('#submitF');

//   let nom = document.querySelector('#nomF');
//   let prenom = document.querySelector('#prénomF');
//   let email = document.querySelector('#emailF');
//   let tél = document.querySelector('#télF');

//   const dbf = firestore.collection("formateurs");

//   if(submitBtnF){
//     submitBtnF.addEventListener('click', function(){
//         dbf.doc()
//           .set({
//             Nom : nom.value,
//             Prénom : prenom.value,
//             Email : email.value,
//             Tél : tél.value
//           })
//           .then(function(){
//             console.log('Data saved!');
//           })
//           .catch(function(error){
//             console.log(error);
//         });
//     });
//   }


  // podt etudiants

  

//   $(document).ready(function(){
//     var age ="";
//     $('#birthdayE').datepicker({
//       onSelect: function (value, ui){
//         var today = new Date();
//         age = today.getFullYear - ui.selectedYear;
//         $('#age').val(age);
//       },
//       changeMonth: true,
//       changeYear: true
//     })
//   })
    
    const submitBtnE = document.querySelector('#submitE');

    let nomE = document.querySelector('#nomE');
    let prenomE = document.querySelector('#prénomE');
    let dobE = document.querySelector('#birthdayE');
    let emailE = document.querySelector('#emailE');
    let télE = document.querySelector('#télE');
  
    const dbe = firestore.collection("etudiants");

    window.onload=function(){
        submitBtnE.addEventListener('click', function(){
            dbe.doc()
            .set({
                    Nom : nomE.value,
                    Prénom : prenomE.value,
                    Age : dobE.value,
                    Email : emailE.value,
                    Tél : télE.value
                })
            .then(function(){
                    console.log('Data saved!');
                })
            .catch(function(error){
                    console.log(error);
            });
        });
    }

    
  



 

  // let database = firebase.database();
  // let ref = database.ref("etudiants");
  // ref.on("value", gotData);

  // function gotData(data) {
  //   console.log(data.val());
  // }


  

