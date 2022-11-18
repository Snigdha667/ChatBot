function talk(){
  var know = {
    "Hi":"How are you?",
  "Who are you" : "Hello, Codewith_random here ",
  "How are you" : "Good :)",
  "I am fine":"That's Great !",
  "Fine":"That's Great !",
  "Okay":"Yup!",
  "Ok":"Yup!",
  "No":"Oops...",
  "Yes": "Good!",
  "Hello": "Hi ! There.",
  "Good Luck": "Thanks !!",
  "What can i do for you" : "Please Give us A Follow & Like.",
  "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
  "ok" : "Thank You So Much ",
  "Bye" : "Okay! Will meet soon.."
  };
  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
  document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
  document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand . What else can I do for you ?<br>";
  }
  }