const Spinner = {
    /* TODO: Don't make spinner explore to global. Avoid to use $(document) */
    init: () => {
        const spinner = $('.linggle.spinner');
        // Make spinner hide in the beginning
        spinner.hide();
        $(window.document)
            .ajaxStart(() => {
                spinner.show();
            })
            .ajaxStop(() => {
                spinner.hide();
            });
    },
    /* TODO: Instead of using $(document), use the following functions in ajax callbacks */
    show: () => {
        const spinner = $('.linggle.spinner');
        spinner.show();
    },
    hide: () => {
        const spinner = $('.linggle.spinner');
        spinner.hide();
    },
};

export default Spinner;
