"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sources.css");
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp === null || sourceItemTemp === void 0 ? void 0 : sourceItemTemp.content.cloneNode(true);
            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) {
                itemName.textContent = item.name;
            }
            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }
}
exports.default = Sources;
