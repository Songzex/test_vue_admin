(function() {
    function setRem() {
        const designWidth = 1920; // 改成你电脑的屏幕宽度（比如1680/1366，按实际的来）
        const rootFontSize = 100; // 不用改，1rem=100px方便你计算
        const minFontSize = 60; // 手机端文字最小尺寸，避免看不清
        const screenWidth = document.documentElement.clientWidth;

        // 逻辑：PC端按你电脑尺寸1:1显示，手机/Pad自动缩小且不小于最小字体
        let fontSize = (screenWidth / designWidth) * rootFontSize;
        fontSize = Math.max(fontSize, minFontSize);

        document.documentElement.style.fontSize = fontSize + 'px';
    }
    window.addEventListener('load', setRem);
    window.addEventListener('resize', setRem);
})();
