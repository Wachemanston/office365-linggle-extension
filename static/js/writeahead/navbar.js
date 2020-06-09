
const NavToggleItem = ({ title, onValue, offValue, token }) => {
    const id = `nav-item-${token}`;
    return `<div class="ms-Grid-row nav-item-container">
                <span class="ms-Grid-col ms-sm3 nav-item-title ms-hiddenMdUp">${title}</span>
                <input type="checkbox" class="ms-hiddenSm nav-item-toggle" id="${id}">
                <label for="${id}" class="ms-Grid-col ms-sm9 ms-hiddenMdUp nav-item-toggle-label">
                    <div class="nav-item-toggle">
                        <div class="nav-item-toggle-circle"></div>
                    </div>
                    <div class="labels-container">
                        <span>${offValue}</span>
                        <span>${onValue}</span>
                    </div>
                </label>
            </div>`;
};

const NavBar = {
    container: '',
    items: [],
    registeredBindings: [],
    caller: null,
    setContainer(container) {
        this.container = container;
    },
    setCaller(caller) {
        this.caller = caller;
    },
    registerItems(items) {
        if (items.length) {
            items.forEach((item) => {
                const { token, handleToggle } = item;
                if (token && this.caller) {
                    this.items.push(item);
                    this.registeredBindings.push(() => {
                        const target = $(`#nav-item-${token}`);
                        target.click(() => { handleToggle(target.prop('checked')); });
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
        this.container.html(this.items.map(item => NavToggleItem(item)).join(''));
        this.rebind();
    },
};

export default NavBar;