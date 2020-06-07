const Badge = ({ count, type }) => {
    return `<div class="ms-font-xxl ms-depth-8 badge" data-type="${type}">${type}<span class="ms-depth-8 ms-font-s">${count}</span></div>`;
};

const Examples = (examples) => {
    return examples.map((example) => {
        const { prev, main, post, c1, c2, translate } = example;
        return `<li class="ms-font-m example-container">\
                    <span class="example">
                        <span class="example-count c1">${c1 || '-'}</span>
                        <span class="example-count c2">${c2 || '-'}</span>
                        <span class="prev">${prev || ''}</span>
                        <span class="ms-fontWeight-regular">${main || ''}</span>
                        <span class="post">${post || ''}</span>
                        <span>${translate || ''}</span>
                    </span>
                </li>`;
    });
};

const Ngram = ({ ngram, count, examples, idx }) => {
    try {
        const type = ngram[1].toUpperCase();
        const title = ngram.slice(4);
        let examplesList = Examples(examples);
        if (examplesList.length > 3) {
            examplesList = `${examplesList.slice(0, 3).join('')}
                <button id="run" class="ms-Button ms-Button--hero btn-load-more">
                    <span class="ms-fontSize-m">more ...</span>
                </button>`;
        } else {
            examplesList = examplesList.join('');
        }
        return (`<div class="ms-Grid-row ms-depth-8 ms-motion-slideUpIn ngram-container" style="animation-delay: ${idx * 0.1}s">
                    <div class="ms-Grid-col ms-sm3 ms-lg2 badge-container">${Badge({ type, count })}</div>
                    <div class="ms-Grid-col ms-sm9 ms-lg10">
                        <div class="ngram-title-container">
                            <h2 class="ms-fontWeight-semibold ms-fontSize-l ff-primary">${title}</h2>
                            <span class="ms-Button ms-Button--hero"><i class="ms-Button-icon ms-Icon ms-Icon--MiniExpand"></i></span>
                        </div>
                        <ul class="examples-container">${examplesList}</ul>
                    </div>
                </div>`);
    } catch (e) {
        throw new Error(`Search Result init types error: ${ngram} ${count} ${examples}`);
    }
};

const SearchResult = {
    data: '',
    container: null,
    setData(jsonData) {
        this.data = '';
        let idx = 0;
        $.each(jsonData, (ngram, objValue) => {
            const { count, examples } = objValue;
            this.data += Ngram({ ngram, count, examples, idx });
            idx += 1;
        });
    },
    setContainer(container) { this.container = container; },
    render() {
        if (this.data.length && this.container) {
            this.container.html(this.data);
        }
    },
};

export default SearchResult;
