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

function generateDiscography(){
 const title = document.getElementById("disc-title").value.trim();
 const image = document.getElementById("disc-image").value.trim();
 const youtube = document.getElementById("disc-youtube").value.trim();
 const spotify = document.getElementById("disc-spotify").value.trim();
 const apple = document.getElementById("disc-apple").value.trim();

 if(!title || !image){
   alert("タイトルと画像URLは必須です");
   return;
 }

 // ===== プレビュー =====
 const preview = document.getElementById("disc-preview");
 preview.innerHTML = `
   <img src="${image}" alt="${title}">
   <h3>${title}</h3>
   <div style="display:flex;justify-content:center;gap:15px;font-size:1.4rem">
     ${youtube ? `<i class="fab fa-youtube"></i>` : ""}
     ${spotify ? `<i class="fab fa-spotify"></i>` : ""}
     ${apple ? `<i class="fab fa-apple"></i>` : ""}
   </div>
 `;

 // ===== YAML生成 =====
 let yaml = "";
 yaml += `title: "${title}"\n`;
 yaml += `image: "${image}"\n`;
 if(youtube) yaml += `youtube: "${youtube}"\n`;
 if(spotify) yaml += `spotify: "${spotify}"\n`;
 if(apple) yaml += `appleMusic: "${apple}"\n`;

 document.getElementById("disc-yaml").value = yaml.trim();
}
