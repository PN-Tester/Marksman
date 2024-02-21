function parsePageForLinks() {
    var links = document.getElementsByTagName('a');
    var inputs = document.getElementsByTagName('input');
    var paramRegex = /\?.+=.+/; // Regex to match any GET parameters

    // Highlight links
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');

        if (href) {
            if (href.includes('.asp')) {
                addHighlightEffect(links[i], 'yellow');
            }

            if (paramRegex.test(href)) {
                addHighlightEffect(links[i], 'red');
            }
        }
    }

    // Highlight form submission inputs
    for (var j = 0; j < inputs.length; j++) {
        if (inputs[j].type === 'submit') {
            addHighlightEffect(inputs[j], 'orange');
        }
    }
}

function addHighlightEffect(element, color) {
    var wrapper = document.createElement('span');
    wrapper.className = 'highlight-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';

    var highlight = document.createElement('span');
    highlight.className = 'highlight';
    highlight.style.position = 'absolute';
    highlight.style.top = '0';
    highlight.style.left = '0';
    highlight.style.right = '0';
    highlight.style.bottom = '0';
    highlight.style.border = '2px solid ' + color;
    highlight.style.boxShadow = '0 0 10px ' + color;
    highlight.style.pointerEvents = 'none'; // Make the highlight not clickable

    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
    wrapper.appendChild(highlight);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'parsePage') {
        parsePageForLinks();
    }
});
