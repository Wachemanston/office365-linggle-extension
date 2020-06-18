
const NavToggleItem = ({ title, onValue, offValue, token }) => {
    const id = `nav-item-${token}`;
    return `<div class="ms-Grid-row nav-item-container">
                <span class="ms-Grid-col ms-sm6 nav-item-title ms-hiddenMdUp">${title}</span>
                <input type="checkbox" class="ms-hiddenSm nav-item-toggle" id="${id}">
                <label for="${id}" class="ms-Grid-col ms-sm6 ms-hiddenMdUp nav-item-toggle-label">
                    <div class="nav-item-toggle-circle-container">
                        <div class="nav-item-toggle-circle"></div>
                    </div>
                    <div class="labels-container">
                        <div class="window">
                            <span>${offValue}</span>
                            <span>${onValue}</span>
                        </div>
                    </div>
                </label>
            </div>`;
};

const NavBar = {
    container: '',
    items: [],
    registeredBindings: [],
    setContainer(container) {
        this.container = container;
    },
    registerItems(items) {
        if (items.length) {
            items.forEach((item) => {
                const { token, handleToggle } = item;
                if (token) {
                    this.items.push(item);
                    this.registeredBindings.push(() => {
                        const target = $(`#nav-item-${token}`);
                        target.click(() => {
                            const isChecked = target.prop('checked');
                            handleToggle(isChecked);
                            target.next('label').find('.window').toggleClass('is-on');
                        });
                    });
                }
            });
            this.render();
        }
    },
    rebind() {
        this.registeredBindings.forEach(bindFunc => bindFunc());
    },
    render() {
        this.container.html(`<div class="ms-Grid nav-bar-container">
                                <input type="checkbox" style="display: none" id="nav-bar-toggle">
                                <label for="nav-bar-toggle" class="ms-Grid-row ms-font-l nav-bar-toggle-label">
                                    <span class="ms-Grid-col ms-sm2 ms-Button-icon"><i class="ms-Icon ms-Icon--ChevronUp"></i></span>
                                    <span class="ms-Grid-col ms-sm10">Filter</span>
                                </label>
                                <div class="ms-Grid nav-bar-menu">${this.items.map(item => NavToggleItem(item)).join('')}</div>
                            `);
        this.rebind();
    },
};

export default NavBar;
