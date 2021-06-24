const menuItemProps = {
    id: "search",
    title: "Search YouTube for \"%s\"",
    contexts:["selection"]
}

function searchOnYouTube(selectedText) {
    var serviceCall = "https://www.youtube.com/results?search_query=" + selectedText;
    chrome.tabs.create({url: serviceCall});
}

chrome.contextMenus.onClicked.addListener(function(info) {
    searchOnYouTube(encodeURIComponent(info.selectionText));
});

chrome.contextMenus.create(menuItemProps);