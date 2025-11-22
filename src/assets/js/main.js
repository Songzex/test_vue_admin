// 初始化GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
});

// 导航栏滚动效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// 移动端菜单
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// 用户下拉菜单
const mobileUserMenuButton = document.getElementById('mobile-user-menu-button');
const mobileUserDropdown = document.getElementById('mobile-user-dropdown');
const desktopUserMenuButton = document.getElementById('desktop-user-menu-button');
const desktopUserDropdown = document.getElementById('desktop-user-dropdown');

// 移动端用户菜单
mobileUserMenuButton.addEventListener('click', () => {
    mobileUserDropdown.classList.toggle('hidden');
    // 确保桌面端菜单关闭
    desktopUserDropdown.classList.add('hidden');
});

// 桌面端用户菜单
desktopUserMenuButton.addEventListener('click', () => {
    desktopUserDropdown.classList.toggle('hidden');
    // 确保移动端菜单关闭
    mobileUserDropdown.classList.add('hidden');
});

// 点击其他地方关闭下拉菜单
document.addEventListener('click', (event) => {
    // 移动端菜单
    if (mobileUserMenuButton && !mobileUserMenuButton.contains(event.target) && !mobileUserDropdown.contains(event.target)) {
        mobileUserDropdown.classList.add('hidden');
    }
    
    // 桌面端菜单
    if (desktopUserMenuButton && !desktopUserMenuButton.contains(event.target) && !desktopUserDropdown.contains(event.target)) {
        desktopUserDropdown.classList.add('hidden');
    }
});

// 夜间模式切换
const themeToggle = document.getElementById('theme-toggle');
const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const desktopMoonIcon = document.getElementById('desktop-moon-icon');
const desktopSunIcon = document.getElementById('desktop-sun-icon');

// 更新图标显示状态
function updateThemeIcons() {
    if (document.documentElement.classList.contains('dark')) {
        // 移动端图标
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        
        // 桌面端图标
        desktopMoonIcon.style.display = 'none';
        desktopSunIcon.style.display = 'block';
    } else {
        // 移动端图标
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        
        // 桌面端图标
        desktopMoonIcon.style.display = 'block';
        desktopSunIcon.style.display = 'none';
    }
}

// 检查本地存储中的主题设置
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// 初始化图标显示
updateThemeIcons();

// 主题切换函数
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    
    // 更新图标显示
    updateThemeIcons();
    
    // 保存主题设置到本地存储
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// 移动端主题切换按钮
themeToggle.addEventListener('click', toggleTheme);

// 桌面端主题切换按钮
desktopThemeToggle.addEventListener('click', toggleTheme);

// 登录/注册模态框
const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// 桌面端登录按钮
loginButton.addEventListener('click', () => {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// 移动端登录按钮
const mobileLoginButton = document.getElementById('mobile-login-button');
if (mobileLoginButton) {
    mobileLoginButton.addEventListener('click', () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // 关闭移动端菜单
        mobileMenu.classList.remove('active');
    });
}

function closeModalFunc() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeModalFunc);
modalOverlay.addEventListener('click', closeModalFunc);

loginTab.addEventListener('click', () => {
    loginTab.classList.add('border-primary-500', 'text-primary-500');
    loginTab.classList.remove('border-gray-200', 'dark:border-gray-700', 'text-gray-500', 'dark:text-gray-400');
    
    registerTab.classList.remove('border-primary-500', 'text-primary-500');
    registerTab.classList.add('border-gray-200', 'dark:border-gray-700', 'text-gray-500', 'dark:text-gray-400');
    
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('border-primary-500', 'text-primary-500');
    registerTab.classList.remove('border-gray-200', 'dark:border-gray-700', 'text-gray-500', 'dark:text-gray-400');
    
    loginTab.classList.remove('border-primary-500', 'text-primary-500');
    loginTab.classList.add('border-gray-200', 'dark:border-gray-700', 'text-gray-500', 'dark:text-gray-400');
    
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

// 高级筛选面板功能
const toggleFilterPanel = document.getElementById('toggle-filter-panel');
const filterPanel = document.getElementById('filter-panel');
const resetAllFilters = document.getElementById('reset-all-filters');
const applyAllFilters = document.getElementById('apply-all-filters');

// 切换筛选面板显示/隐藏
toggleFilterPanel.addEventListener('click', () => {
    filterPanel.classList.toggle('hidden');
    // 切换箭头方向
    const icon = toggleFilterPanel.querySelector('i');
    if (filterPanel.classList.contains('hidden')) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
});

// 重置所有筛选
resetAllFilters.addEventListener('click', () => {
    // 重置单选按钮
    const radioButtons = document.querySelectorAll('input[name="sort"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    // 重置复选框
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // 显示重置成功提示
    showNotification('筛选条件已重置');
});

// 应用筛选
applyAllFilters.addEventListener('click', () => {
    // 获取选中的排序方式
    const selectedSort = document.querySelector('input[name="sort"]:checked');
    const sortText = selectedSort ? selectedSort.closest('label').querySelector('span').textContent : '默认排序';
    
    // 获取选中的内容类型
    const selectedTypes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent);
    
    // 显示应用成功提示
    showNotification(`已应用筛选: ${sortText}${selectedTypes.length > 0 ? '，类型: ' + selectedTypes.join(', ') : ''}`);
    
    // 模拟筛选效果 - 滚动到内容区域
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// 通知提示函数
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    notification.textContent = message;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 2秒后淡出
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// 为筛选选项添加点击效果
document.querySelectorAll('#filter-panel label').forEach(label => {
    label.addEventListener('click', function() {
        // 移除其他选项的选中样式
        if (this.querySelector('input[type="radio"]')) {
            this.closest('div').querySelectorAll('label').forEach(l => {
                l.classList.remove('border-primary-500', 'bg-primary-50', 'dark:bg-primary-900/20');
            });
        }
        
        // 添加当前选项的选中样式
        if (this.querySelector('input').checked) {
            this.classList.add('border-primary-500', 'bg-primary-50', 'dark:bg-primary-900/20');
        } else {
            this.classList.remove('border-primary-500', 'bg-primary-50', 'dark:bg-primary-900/20');
        }
    });
});

// 为时间范围按钮添加点击效果
document.querySelectorAll('#filter-panel button:not(#reset-all-filters):not(#apply-all-filters)').forEach(button => {
    button.addEventListener('click', function() {
        // 移除其他按钮的选中样式
        this.closest('div').querySelectorAll('button').forEach(btn => {
            btn.classList.remove('bg-primary-500', 'text-white');
            btn.classList.add('bg-white/50', 'dark:bg-gray-800/50');
        });
        
        // 添加当前按钮的选中样式
        this.classList.remove('bg-white/50', 'dark:bg-gray-800/50');
        this.classList.add('bg-primary-500', 'text-white');
    });
});

// 卡片动画
gsap.utils.toArray('.glass-card').forEach((card, i) => {
    gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.1
    });
});

// 侧边栏项目动画
gsap.utils.toArray('.sidebar-item').forEach((item, i) => {
    gsap.from(item, {
        x: -20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.05
    });
});

// 标签动画
gsap.utils.toArray('.tag').forEach((tag, i) => {
    gsap.from(tag, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: tag,
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.05
    });
});

// 轮播图功能已移至HTML内联脚本

// 头像动画
gsap.utils.toArray('.avatar').forEach((avatar, i) => {
    gsap.from(avatar, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: avatar,
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        delay: i * 0.1
    });
});

// 按钮点击效果
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        
        let ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 模拟登录功能
document.querySelector('#login-form button').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        // 模拟登录成功
        alert('登录成功！');
        closeModalFunc();
    } else {
        alert('请填写完整的登录信息');
    }
});

// 模拟注册功能
document.querySelector('#register-form button').addEventListener('click', function() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const terms = document.getElementById('terms').checked;
    
    if (username && email && password && confirmPassword && terms) {
        if (password === confirmPassword) {
            // 模拟注册成功
            alert('注册成功！');
            closeModalFunc();
        } else {
            alert('两次输入的密码不一致');
        }
    } else {
        alert('请填写完整的注册信息并同意服务条款');
    }
});

// 轮播图初始化代码已移至HTML内联脚本

// 友情链接加载更多功能
const loadMoreButton = document.getElementById('load-more-links');
const loadMoreText = document.getElementById('load-more-text');
const loadMoreIcon = document.getElementById('load-more-icon');
const hiddenLinks = document.querySelectorAll('.friendship-link.hidden');
let isExpanded = false;

if (loadMoreButton && hiddenLinks.length > 0) {
    loadMoreButton.addEventListener('click', () => {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            // 显示隐藏的链接
            hiddenLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.classList.remove('hidden');
                    link.classList.add('animate-fade-in');
                }, index * 100); // 错开显示时间，增加动画效果
            });
            
            // 更新按钮文本和图标
            loadMoreText.textContent = '收起';
            loadMoreIcon.classList.remove('fa-chevron-down');
            loadMoreIcon.classList.add('fa-chevron-up');
        } else {
            // 隐藏额外的链接
            hiddenLinks.forEach(link => {
                link.classList.add('hidden');
                link.classList.remove('animate-fade-in');
            });
            
            // 更新按钮文本和图标
            loadMoreText.textContent = '加载更多';
            loadMoreIcon.classList.remove('fa-chevron-up');
            loadMoreIcon.classList.add('fa-chevron-down');
        }
    });
}