import { Examples } from './search-result';

const Page = (data) => {
    const { ngram, count, examples } = data;
    const type = ngram[1].toUpperCase();
    const title = ngram.slice(4);
    return `<main class="ms-welcome__main detail-page">
                <i class="ms-Button-icon ms-Icon ms-Icon--Back"></i>
                <h1 class="detail-page-title ff-primary">${title}</h1>
                <div class="detail-blocks-container">
                    <div class="detail-block"><span>Type</span><span>${type}</span></div>
                    <div class="detail-block"><span>Count</span><span>${count}</span></div>
                </div>
                <ul class="detail-examples-container">${Examples(examples).join('')}</ul>
            </main>`;
};

const DetailPage = {
    container: null,
    setContainer(container) {
        this.container = container;
    },
    open(data) {
        if (data) {
            this.container.addClass('active');
            this.container.html(Page(data));
            this.container.find('.ms-Icon--Back').click(() => this.close());
        }
    },
    close() {
        this.container.removeClass('active');
        this.container.html();
    },
};

export default DetailPage;
