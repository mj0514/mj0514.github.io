
document.getElementById("clear-button").addEventListener("click", clearChecks);
function clearChecks() {
    var inputs = document.querySelectorAll('.checkboxClass'); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = false; 
    } 
}

document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});


function sequencer() {
    let slider = document.getElementById("bpmRange");
    let output = document.getElementById("bpmOutput");
    output.innerHTML = slider.value;
  
    slider.oninput = function() {
    output.innerHTML = this.value;
    Tone.Transport.bpm.value = this.value;
}

function showLight(x) {
    x.style.backgroundColor = "#69ff5c"
    setTimeout(function() {x.style.backgroundColor = "yellow" }, 100);
}

  
  

//Sound Files
    const kick = new Tone.Player('https://mj0514.github.io/Final/sounds/kick.wav').toDestination();
    const kick2 = new Tone.Player('https://mj0514.github.io/Final/sounds/lofi-kick.wav').toDestination();
    const snare = new Tone.Player('https://mj0514.github.io/Final/sounds/snare.wav').toDestination();
    const clap = new Tone.Player('https://mj0514.github.io/Final/sounds/clap.wav').toDestination();
    const hihat = new Tone.Player('https://mj0514.github.io/Final/sounds/hihat.wav').toDestination();
    
    
    

    
    Tone.Transport.scheduleRepeat(repeat, '16n');
    Tone.Transport.start();
    let index = 0;

    function repeat(time){
        let step = index % 16;

        
        let kickInputs = document.querySelector(
            `.kick .checkContainer:nth-child(${step + 1}) input`
            );
        let kick2Inputs = document.querySelector(
            `.kick2 .checkContainer:nth-child(${step + 1}) input`
            );
        let snareInputs = document.querySelector(
            `.snare .checkContainer:nth-child(${step + 1}) input`
            );
        let clapInputs = document.querySelector(
            `.clap .checkContainer:nth-child(${step + 1}) input`
            );  
        let hihatInputs = document.querySelector(
            `.hihat .checkContainer:nth-child(${step + 1}) input`
            ); 
        let currLight = document.querySelector(
            `.light-marker .checkContainer:nth-child(${step + 1}) .light`
            );
            
        showLight(currLight);
      
      
      
        if(kickInputs.checked){
            kick.start(time);
        }
        if(kick2Inputs.checked){
            kick2.start(time);
        }
        if(snareInputs.checked){
            snare.start(time);
        }
        if(clapInputs.checked){
            clap.start(time);   
        }
        if(hihatInputs.checked){
            hihat.start(time);  
        }
        index++;
    }
}

sequencer();