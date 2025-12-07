let currentPage = 1;
const totalPages = 4;
const music = document.getElementById("music");

function showPage(num){
  for(let i=1;i<=totalPages;i++){
    document.getElementById("page"+i).classList.remove("active");
  }
  document.getElementById("page"+num).classList.add("active");
}

function startSite(){
  music.play();
  nextPage();
}

function nextPage(){
  if(currentPage < totalPages) currentPage++;
  showPage(currentPage);
}

function prevPage(){
  if(currentPage > 1) currentPage--;
  showPage(currentPage);
}

function toggleMusic(){
  if(music.paused) music.play();
  else music.pause();
}

/* Sparkle Animation */
const container = document.getElementById("sparkles");

function createSparkle(){
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = (2 + Math.random() * 4) + "s";
  container.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 6000);
}

setInterval(createSparkle, 250);
