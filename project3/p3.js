function signin() {


  var email=document.getElementById("username").value;

  var password=document.getElementById("password").value;

  var result=document.getElementById("result");




  var user=localStorage.getItem("username");


  var data=JSON.parse(user);


  console.log(user);

  if(data==null){

      document.getElementById("result").innerHTML="Wrong Email";
  }


  else if(email==data.email && password==data.password){
      alert( "Logedd in");
  }
  else{
      document.getElementById("result").innerHTML="Wrong pass";

}
}