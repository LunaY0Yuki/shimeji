//when the extension is installed, call the call back func (argument)
chrome.runtime.onInstalled.addListener(function() {
    //use chrome.storage API to store, retrieve, and track changes to user data
    //API like storage needs to be added in permission in manifest
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });
