/**
 * 动画效果集合
 * 包含用户交互动画和头像特效
 */

// 用户信息卡片点击彩纸彩带效果 - 从天上飘落
document.addEventListener('DOMContentLoaded', function() {
    // 获取用户信息卡片和头像
    const userInfoCard = document.querySelector('.glass-card');
    const userAvatar = document.getElementById('user-avatar');
    
    // 创建全局彩纸容器
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.inset = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '100';
    confettiContainer.style.overflow = 'hidden';
    
    // 将彩纸容器添加到用户信息卡片中
    if (userInfoCard) {
        userInfoCard.style.position = 'relative';
        userInfoCard.appendChild(confettiContainer);
    }
    
    // 为用户信息卡片添加点击事件
    if (userInfoCard) {
        userInfoCard.addEventListener('click', function(e) {
            // 如果点击的是头像，不触发卡片的点击事件（避免重复触发）
            if (userAvatar && userAvatar.contains(e.target)) {
                return;
            }
            
            // 创建彩纸彩带效果
            createFallingConfetti();
        });
    }
    
    // 为头像添加鼠标悬停事件
    if (userAvatar) {
        userAvatar.addEventListener('mouseenter', function() {
            // 添加悬停动画
            userAvatar.classList.add('scale-110');
            
            // 创建彩纸彩带效果
            createFallingConfetti();
        });
        
        userAvatar.addEventListener('mouseleave', function() {
            // 移除悬停动画
            userAvatar.classList.remove('scale-110');
        });
    }
    
    // 从天上飘落的彩纸彩带效果函数
    function createFallingConfetti() {
        // 清空之前的彩纸
        confettiContainer.innerHTML = '';
        
        // 创建彩带和彩纸 - 减少数量，避免过于密集
        const confettiCount = 60; // 减少数量，避免过于密集
        const confettiTypes = [
            { type: 'paper', colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'] },
            { type: 'ribbon', colors: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'] }
        ];
        
        // 获取卡片尺寸
        const cardRect = userInfoCard.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        // 创建彩纸彩带
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            const type = Math.random() > 0.3 ? 'paper' : 'ribbon'; // 70% 纸，30% 彩带
            const confettiType = confettiTypes.find(ct => ct.type === type);
            const color = confettiType.colors[Math.floor(Math.random() * confettiType.colors.length)];
            
            // 设置样式
            confetti.style.position = 'absolute';
            confetti.style.opacity = '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '101';
            
            if (type === 'paper') {
                // 彩纸样式 - 优化为更美观的形状
                const size = Math.random() * 10 + 8;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.backgroundColor = color;
                confetti.style.borderRadius = '2px';
                confetti.style.boxShadow = `0 0 6px rgba(0,0,0,0.1)`;
            } else {
                // 彩带样式 - 优化为更美观的形状
                confetti.style.width = '2px'; // 减细彩带
                confetti.style.height = `${Math.random() * 20 + 15}px`;
                confetti.style.backgroundColor = color;
                confetti.style.borderRadius = '1px';
                confetti.style.boxShadow = `0 0 4px rgba(0,0,0,0.1)`;
            }
            
            // 添加到容器
            confettiContainer.appendChild(confetti);
            
            // 随机动画参数 - 从顶部飘落
            const startX = Math.random() * 100; // 随机水平位置
            const duration = Math.random() * 3000 + 2000; // 飘落时间更长
            const delay = Math.random() * 1500; // 随机延迟，使飘落更自然
            const horizontalDrift = (Math.random() - 0.5) * 30; // 水平漂移量
            const rotationAmount = Math.random() * 1440 - 720; // 旋转量
            
            // 设置起始位置（顶部随机位置）
            confetti.style.left = `${startX}%`;
            confetti.style.top = '-20px'; // 从卡片顶部上方开始
            confetti.style.transform = `translateX(-50%) rotate(0deg)`;
            
            // 动画
            setTimeout(() => {
                // 渐入动画
                confetti.style.transition = `opacity 300ms ease-in`;
                confetti.style.opacity = '1';
                
                // 飘落动画
                setTimeout(() => {
                    confetti.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
                    confetti.style.top = `${cardHeight + 20}px`; // 落到卡片底部下方
                    confetti.style.left = `${startX + horizontalDrift}%`; // 水平漂移
                    confetti.style.transform = `translateX(-50%) rotate(${rotationAmount}deg)`; // 旋转
                    
                    // 淡出动画
                    setTimeout(() => {
                        confetti.style.transition = `opacity 500ms ease-out`;
                        confetti.style.opacity = '0';
                        
                        // 移除元素
                        setTimeout(() => {
                            if (confetti.parentNode === confettiContainer) {
                                confettiContainer.removeChild(confetti);
                            }
                        }, 500);
                    }, duration - 500);
                }, 300);
            }, delay);
        }
    }
});

// 用户交互动画
document.addEventListener('DOMContentLoaded', function() {
    const userItems = document.querySelectorAll('.user-item');
    
    userItems.forEach((item, index) => {
        // 添加鼠标悬停效果
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
            this.style.transition = 'all 0.3s ease';
        });
        
        // 添加点击效果
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // 创建点击波纹效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 简化的论坛统计交互动画
    const statCards = document.querySelectorAll('.stat-card');
    
    // 基础数字增长动画函数
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString();
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // 简单的视口检测
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
    
    // 初始化统计卡片动画
    function initStatAnimations() {
        statCards.forEach((card, index) => {
            const value = parseInt(card.getAttribute('data-value'));
            const numberElement = card.querySelector('.stat-number');
            
            // 简单的入场动画
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                card.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    
                    // 数字动画
                    setTimeout(() => {
                        animateValue(numberElement, 0, value, 1500);
                    }, 200);
                }, 50);
            }, index * 100);
            
            // 极简鼠标悬停效果
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            // 简单的点击效果
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 基本波纹效果
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // 重新播放数字动画
                numberElement.textContent = '0';
                setTimeout(() => {
                    animateValue(numberElement, 0, value, 1500);
                }, 100);
            });
        });
    }
    
    // 监听滚动事件
    let animated = false;
    function checkScroll() {
        if (!animated && statCards.length > 0 && isInViewport(statCards[0])) {
            initStatAnimations();
            animated = true;
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    // 初始检查
    checkScroll();
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .stat-card {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .stat-card:hover .stat-number {
            color: var(--tw-primary-600);
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
    `;
    document.head.appendChild(style);
});