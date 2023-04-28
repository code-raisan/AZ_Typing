const start_display = document.getElementById("start_display");
const play_display = document.getElementById("play_display");
const end_display = document.getElementById("end_display");
const start_btn = document.getElementById("start_button");
const return_btn = document.getElementById("return_button");
const word_feild = document.getElementById("word_feild");
const miss_result = document.getElementById("miss_result");
const word_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let is_start = false;
let now_press = 0;
let miss = 0;

const endgame = () =>{
  miss_result.innerText = miss;
  play_display.style.display = "none";
  end_display.style.display = "";
}

return_btn.onclick = () =>{
  end_display.style.display = "none";
  play_display.style.display = "";
}

start_btn.onclick = () =>{
  start_display.style.display = "none";
  play_display.style.display = "";
}

window.onkeypress = (e) =>{
  const now_press_ch = word_list[now_press];
  
  if(e.code === `Key${now_press_ch}`){
    now_press++;
    if(now_press >= word_list.length) return endgame()
    
    console.warn("OK");
    word_feild.innerText = word_list[now_press]
    return;
  }
  miss++
  console.error("MISS")
  console.log(e.code);
}

// Debugging Script
/*const a = () =>{
  start_display.style.display = "none";
  play_display.style.display = "block";
}
a();*/
