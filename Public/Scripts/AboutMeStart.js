let aboutMe = document.getElementById("whoAmI")
let p = document.createElement("p");
p.innerHTML = `I am Christopher Jensen, a 21 year old Software Engineering student at
 Aalborg University (AAU) that loves new challenges
  and educating people on the exciting topic that IT is!
  <br> My interest in software arose at an open house event at Aalborg University in 2018 and only grew bigger when i worked as a student assistent in the
  hardware department at UNEEG Medical A/S.
  <br> 
  Currently i have three jobs:
  <br>
  At Aalborg university (AAU) i work as a <b>Study Ambassador for Software Engineering</b>, which means that i attend open houses and other study related events where coming students learn about the different possibilities
   and educations at AAU.
  <br>
  I also hold another title at AAU which is <b>Student teacher at AAU On Demand</b>. At AAU On Demand we teach students at high schools in a topic we define. I have chosen to teach students about software and what it entales.
  That is; I do not teach programming, but rather what software actually is as many people are frightened by the IT world and the complexity they believe lies within. My aim is too remove their fear and prejudices 
  about IT.
  <br>
  Lastly i hold the title of <b>Study Ambassador at IDA (Denmark Engineering Union)</b> where my responsibility is to recruit new members. Furthermore, as we have no boss in Aalborg and thereby also a lot of responsibility,
  I have achieved a lot of skills in management and administration.
  <br><br>
  If you found an interest in me or anything i participated in don hesitate to contact me on LinkedIn or Email: <u>christopher.colberg@gmail.com</u>.
  `;
aboutMe.appendChild(p);

let ty = document.getElementsByClassName("projectBtn")

for (let i = 0; i< ty.length; i++){
    ty[i].addEventListener("click", buttonHandler)
}

function buttonHandler(){
    window.location.href = `../Views/P${this.id}.html`;
}