chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

chrome.commands.onCommand.addListener((command) => {
    if (command === 'change-speed') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: changeSpeed,
            });
        });
    }
});

function changeSpeed() {
    var video = document.querySelector('video');
    if (video && !video.paused) {
        video.playbackRate = 2;
    }
}
