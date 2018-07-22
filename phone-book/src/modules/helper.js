class HelpfulFeaturesForElementPrototype{
    constructor() {

        Element.prototype.removeClass = function(className) {
            this.classList.remove(className)
        }

        Element.prototype.addClass = function(className) {
            this.classList.add(className)
        }
    }
}

function createElem(tagName) {
    return document.createElement(tagName)
}

export {
    createElem,
    HelpfulFeaturesForElementPrototype
}

