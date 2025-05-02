let player = Math.floor(Math.random()*6)

function matchmaking (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (player==5){
                resolve("pemain tercukupi");
            } else{
                reject("pemain kurang");
            };
        }, 3000);
    });
};


async function gamestart(){
    try {
        console.log("mencari pemain");
        let proses = await matchmaking();
        console.log(`${proses} (${player}/5), game dimulai`);
    } catch (reject) {
        console.log(`${reject} (${player}/5), matchmaking gagal`);
    };
};

gamestart()