const DEFAULT_ALERT_MESSAGE = "Ce message apparait car quelque chose bloque dCode et empêche son fonctionnement."

function hideNode(node) {
    if (node) {
      node.style.display = "none";
    }
}

function isAlertBanner(node) {
    return (node.innerHTML.search(DEFAULT_ALERT_MESSAGE) != -1)
}

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        
        for (let i = 0; i < mutation.addedNodes.length; ++i) {
            let addedNode = mutation.addedNodes[i];
            if (isAlertBanner(addedNode)) {
                hideNode(addedNode)
            }

        }
        
    }
});
  
observer.observe(document.body, {
    childList: true,
});