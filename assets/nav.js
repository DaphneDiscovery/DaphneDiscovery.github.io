document.addEventListener('DOMContentLoaded', function () {
  const trigger = document.getElementById('mmTrigger');
  const menu = document.getElementById('megaMenu');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    trigger.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== trigger) {
      menu.classList.remove('open');
      trigger.classList.remove('open');
    }
  });

  menu.querySelectorAll('.mm-continent').forEach(function (btn) {
    btn.addEventListener('click', function () {
      menu.querySelectorAll('.mm-continent').forEach(b => b.classList.remove('active', 'mm-active'));
      menu.querySelectorAll('.mm-panel').forEach(p => p.classList.add('hidden'));
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.target);
      panel.classList.remove('hidden', 'mm-hidden');
    });
  });
});
