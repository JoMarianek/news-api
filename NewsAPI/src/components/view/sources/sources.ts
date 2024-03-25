import './sources.css';
import { Source } from './sourcesApiResponse';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as Element;

            const itemName = sourceClone.querySelector('.source__item-name');
            if(itemName) { itemName.textContent = item.name; }
            const sourceItem = sourceClone.querySelector('.source__item');
            if(sourceItem) { sourceItem.setAttribute('data-source-id', item.id); }

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        if(sources) { sources.append(fragment); }
    }
}

export default Sources;
