/**
 * 轮播图功能
 * 负责处理首页轮播图的切换、指示器和控制按钮功能
 */

// 简单直接的轮播图实现
(function() {
    console.log('轮播图脚本执行');
    
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!carousel || !items.length || !prevBtn || !nextBtn || !indicators.length) {
        console.error('轮播图元素缺失');
        return;
    }
    
    console.log('轮播图元素准备就绪，项目数量:', items.length);
    
    let currentIndex = 0;
    let interval;
    
    // 设置轮播图高度
    items.forEach(item => {
        item.style.height = '200px';
    });
    
    // 更新轮播图状态
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 更新指示器
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('bg-white');
                indicator.classList.remove('bg-white/50');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-white/50');
            }
        });
    }
    
    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // 设置自动轮播
    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }
    
    // 停止自动轮播
    function stopAutoSlide() {
        clearInterval(interval);
    }
    
    // 点击指示器
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
    });
    
    // 点击控制按钮
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    // 鼠标悬停时停止自动轮播
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // 初始化
    startAutoSlide();
})();