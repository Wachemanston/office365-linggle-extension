const QueryText = ({ queryText }) => {
    const queryList = queryText.split(' ');
    const words = queryList.map(text => `<span class="query-item">${text}</span>`);
    return `<h2 class="ms-font-xxl ff-primary">
                ${words.join(' ')}
            </h2>`;
};

const Query = {
    container: null,
    handleSuccess: null,
    queryText: '',
    originalText: '',
    isEnter: false,
    onSuccess(json) {
        if (this.handleSuccess) {
            this.handleSuccess(json);
        }
    },
    render() {
        const { container, queryText } = this;
        if (container && !this.isEnter) {
            container.html(QueryText({ queryText }));
            $('#query-text .query-item').hover((e) => {
                const { target: { textContent } } = e;
                this.isEnter = true;
                this.query(textContent);
            }, () => {
                this.isEnter = false;
                this.query(this.originalText);
            });
        }
    },
    setHandleSuccess(handler) {
        this.handleSuccess = handler;
    },
    setContainer(container) {
        this.container = container;
    },
    setQueryText(text) {
        this.queryText = text;
        if (!this.isEnter) { this.originalText = text; }
    },
    query(words) {
        if (this.queryText !== words) {
            let queryList = words.split(' ');
            const { length } = queryList;
            queryList = queryList.slice(Math.max(0, length - 3), length);
            const queryText = queryList.join(' ');
            this.setQueryText(queryText);
            this.render();
            $.ajax({
                url: `/pg/${queryText}`,
                type: 'GET',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true,
                },
                success: this.onSuccess.bind(this),
            });
        }
    },
};

export default Query;
