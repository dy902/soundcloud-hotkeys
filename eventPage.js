chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({url: 'https://soundcloud.com/*'}, function(tabs) {
    var script = '';

    for (let tab of tabs) {

      if (tab.url.startsWith('https://soundcloud.com')) {

        switch (command) {
          case 'play-pause':
            script = 'document.querySelector(".playControls__play").click()';
            break;
          case 'next': 
            script = 'document.querySelector(".skipControl__next").click()';
            break;
          case 'previous':
            script = 'document.querySelector(".skipControl__previous").click()';
            break;
          case 'like-unlike':
            script = 'document.querySelector(".playbackSoundBadge__like").click()';
            break;
        }
      }

      if (script.length) {
        chrome.tabs.executeScript(tab.id, {code: script});
        break;
      }
    }
    
  });
});