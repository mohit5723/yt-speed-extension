document.getElementById('speedSelector').addEventListener('change', (event) => {
    const speed = parseFloat(event.target.value);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'setSpeed', speed: speed }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
                console.log("Response from content script:", response);
            }
        });
    });
});
