function shout(string){
    return string.toUpperCase();
}

"Hello!".toUpperCase(); // 'Hello!'

function whisper(string){
    return string.toLowerCase();
}

"Hello!".toLowerCase(); // 'Hello'


function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        console.log("1",string)
        return "I can't hear you!";
    }
    if(string === string.toUpperCase()){
        console.log("2",string)
        return "YES INDEED!";
    }
    if(string === "Let's have dinner together!"){
        console.log("3",string)
        return "I would love to!";
        
    }
}

    sayHiToHeadphonedRoommate("Let's have dinner together!")
    sayHiToHeadphonedRoommate("test")
    sayHiToHeadphonedRoommate("ALLCAPS")