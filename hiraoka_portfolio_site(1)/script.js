const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach((btn) => btn.classList.remove('is-active'));
    panels.forEach((panel) => panel.classList.remove('is-visible'));

    tab.classList.add('is-active');
    document.getElementById(target)?.classList.add('is-visible');
  });
});
