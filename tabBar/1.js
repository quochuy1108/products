const $ = document.querySelector.bind(document)

const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

const tabActive = document.querySelector('.tab-item.active');
console.log([tabActive]);

const line = document.querySelector('.line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach(function (tab, index) {
    const pane = panes[index];
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    }

}
)


