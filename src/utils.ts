const MAX_LENGTH = 6;

function generate(){
    let id = "";
    const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
    for(let i = 0; i < MAX_LENGTH; i++){
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}