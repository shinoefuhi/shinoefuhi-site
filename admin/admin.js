const lives = [];

function addLive(){
 const date = liveDate.value;
 const title = liveTitle.value;
 const place = livePlace.value;
 const ticket = liveTicket.value;

 const live = { date, title, place, ticketUrl: ticket };
 lives.push(live);

 renderPreview();
 renderYAML();
}

function renderPreview(){
 const box = document.getElementById("live-preview");
 box.innerHTML = "";
 lives.forEach(l=>{
  box.innerHTML += `
   <div style="margin-bottom:10px">
    <strong>${l.date}</strong> ${l.title} @ ${l.place}
   </div>`;
 });
}

function renderYAML(){
 const yaml = lives.map(l=>`
date: ${l.date}
title: "${l.title}"
place: "${l.place}"
ticketUrl: "${l.ticketUrl}"
`).join("\n---\n");
 document.getElementById("live-yaml").value = yaml.trim();
}

function copy(id){
 navigator.clipboard.writeText(document.getElementById(id).value);
 alert("コピーしました");
}

const liveDate = document.getElementById("live-date");
const liveTitle = document.getElementById("live-title");
const livePlace = document.getElementById("live-place");
const liveTicket = document.getElementById("live-ticket");
