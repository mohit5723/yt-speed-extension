function setPlaybackSpeed(speed) {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = speed;
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'setSpeed') {
        setPlaybackSpeed(message.speed);
        sendResponse({status: "speed changed"});
    }
});
