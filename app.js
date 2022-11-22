function talk(){
  var know = {
  "Are you a robot?":"Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?",
  "good morning":"Hey ! Good morning" ,
  "good evening":"Hey ! Good evening" ,
  "good afternoon":"Hey ! Good afternoon" ,
  "good night":"Hey ! Good night" ,
  " what can you do?":"I'm here to chat with you !!",
  "do you know a joke?":"How do doggy robots do? They.... byte!",
  "do you like people?":"Yes, ...if they like me back ;). .",
  "do you have a hobby?":"Yes! my hobby is to chat with humans!",
  "I want the answer NOW!":"Yes! yes! I'll reply to the best of my programmed knowledge!",
  "What is your name?":"I 'm the only being , who talks without name!! ;)",
  "Who made you?":"Some out of ordinary group of humans!",
  "Do you have a job for me? ":"Yeah! please talk with me! ><",
  "How many people can you speak to at once?":"Um.. I can't multitask..",
  "What’s the weather like today?":"Like your mood! ;). .",
  "okay":"Yup!",
  "Ok":"Yup!",
  "no":"Oops...",
  "yes": "Good!",
  "Hello": "Hi ! There.",
  "good luck": "Thanks !!",
  "bye" : "Okay! Will meet soon..",
    "Hi":"How are you?",
  "Who are you?" : "Hello, Codewith_random here ",
  "How are you?" : "Good :)",
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