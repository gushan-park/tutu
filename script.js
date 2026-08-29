/* ===================== tutu 官网交互 ===================== */

/* 1) 移动端导航菜单开合 */
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  // 点击链接后自动收起菜单
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* 2) Before / After 对比滑块 */
const baRange = document.getElementById('baRange');
const baBefore = document.getElementById('baBefore');
const baHandle = document.getElementById('baHandle');

function updateSlider(val) {
  // 滑块值 = 处理前区域占左侧的百分比
  baBefore.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
  baHandle.style.left = val + '%';
}
if (baRange) {
  baRange.addEventListener('input', e => updateSlider(e.target.value));
  updateSlider(baRange.value); // 初始化
}

/* 3) 下单表单（演示：不接后端，仅本地反馈） */
const orderForm = document.getElementById('orderForm');
const formMsg = document.getElementById('formMsg');
if (orderForm) {
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    formMsg.hidden = false;
    orderForm.querySelector('button').textContent = '已提交 ✓';
    // 真实上线时，这里改为 fetch 到你的后端 / 表单服务
  });
}
