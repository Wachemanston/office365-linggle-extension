import DetailPage from './detail-page';

const EDIT_MODES = {
    WRITE: 'gp',
    EDIT: 'sgp',
};

const Badge = ({ count, type }) => {
    return `<div class="ms-font-xxl ms-depth-8 badge" data-type="${type}">${type}<span class="ms-depth-8 ms-font-s">${count}</span></div>`;
};

export const Examples = (examples) => {
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
        const examplesList = Examples(examples);
        let examplesContainer = `<ul class="examples-container">${examplesList.join('')}</ul>`;
        if (examplesList.length > 3) {
            const toggleId = `${ngram}-toggle`;
            examplesContainer = `
                <input class="show-more-toggle" type="checkbox" style="display: none" id="${toggleId}">
                ${examplesContainer}
                <label class="ms-Button ms-Button--hero btn-load-more" for="${toggleId}"></label>`;
        }
        return (`<div class="ms-Grid-row ms-depth-8 ms-motion-slideUpIn ngram-container" style="animation-delay: ${idx * 0.1}s">
                    <div class="ms-Grid-col ms-sm3 ms-lg2 badge-container">${Badge({ type, count })}</div>
                    <div class="ms-Grid-col ms-sm9 ms-lg10">
                        <div class="ngram-title-container">
                            <h2 class="ms-fontWeight-semibold ms-fontSize-l ff-primary">${title}</h2>
                            <span class="ms-Button ms-Button--hero">
                                <i data-detail="${ngram}" class="ms-Button-icon ms-Icon ms-Icon--MiniExpand"></i>
                            </span>
                        </div>
                        ${examplesContainer}
                    </div>
                </div>`);
    } catch (e) {
        throw new Error(`Search Result init types error: ${ngram} ${count} ${examples}`);
    }
};

const SearchResult = {
    data: null,
    HTMLData: '',
    container: null,
    showMoreExamples: false,
    editMode: EDIT_MODES.WRITE,
    toggleMoreExamples(isShow) {
        $('.show-more-toggle').each((_, element) => {
            if (element.checked !== isShow) {
                element.click();
            }
        });
        this.showMoreExamples = isShow;
    },
    toggleEditingMode(isEditMode) {
        this.editMode = isEditMode ? EDIT_MODES.EDIT : EDIT_MODES.WRITE;
        this.updateHTMLData();
        this.render();
    },
    setData(jsonData) {
        this.data = jsonData;
        this.updateHTMLData();
    },
    updateHTMLData() {
        this.HTMLData = '';
        const data = this.data[this.editMode];
        let idx = 0;
        $.each(data, (ngram, objValue) => {
            const { count, examples } = objValue;
            this.HTMLData += Ngram({ ngram, count, examples, idx });
            idx += 1;
        });
    },
    bindEvents() {
        const data = this.data[this.editMode];
        $('.ngram-title-container i').click((e) => {
            const ngram = e.target.getAttribute('data-detail');
            console.log(data[ngram])
            DetailPage.open({
                ...data[ngram],
                ngram,
            });
        });
    },
    setContainer(container) { this.container = container; },
    render() {
        if (this.HTMLData.length && this.container) {
            this.container.html(this.HTMLData);
            if (this.showMoreExamples) {
                this.toggleMoreExamples(true);
            }
            this.bindEvents();
        }
    },
};

export default SearchResult;
