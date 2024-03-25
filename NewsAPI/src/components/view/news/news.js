"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./news.css");
class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            var _a;
            const newsClone = newsItemTemp === null || newsItemTemp === void 0 ? void 0 : newsItemTemp.content.cloneNode(true);
            if (idx % 2)
                (_a = newsClone.querySelector('.news__item')) === null || _a === void 0 ? void 0 : _a.classList.add('alt');
            const metaPhoto = newsClone.querySelector('.news__meta-photo');
            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const metaAuthor = newsClone.querySelector('.news__meta-author');
            if (metaAuthor) {
                metaAuthor.textContent = item.author || item.source.name;
            }
            const metaDate = newsClone.querySelector('.news__meta-date');
            if (metaDate) {
                metaDate.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
            }
            const descriptionTitle = newsClone.querySelector('.news__description-title');
            if (descriptionTitle) {
                descriptionTitle.textContent = item.title;
            }
            const descriptionSource = newsClone.querySelector('.news__description-source');
            if (descriptionSource) {
                descriptionSource.textContent = item.source.name;
            }
            const descriptionContent = newsClone.querySelector('.news__description-content');
            if (descriptionContent) {
                descriptionContent.textContent = item.description;
            }
            const readMore = newsClone.querySelector('.news__read-more a');
            if (readMore) {
                readMore.setAttribute('href', item.url);
            }
            fragment.append(newsClone);
        });
        const newsElement = document.querySelector('.news');
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}
exports.default = News;
