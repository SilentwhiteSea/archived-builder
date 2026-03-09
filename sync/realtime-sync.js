async function startRealtimeSync() {

    await loadFromGithub();

    setInterval(() => {

        console.log("동기화 체크중...");

    }, 5000);

}

startRealtimeSync();