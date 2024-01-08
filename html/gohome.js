document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            if (sectionId === "home") {
                // 如果是回到首頁的要求，直接跳轉到首頁
                window.location.href = 'file:///C:/Users/asus/OneDrive/%E6%A1%8C%E9%9D%A2/html/index.html#';
            } else {
                // 否則滑動到指定的區塊
                window.location.href = 'file:///C:/Users/asus/OneDrive/%E6%A1%8C%E9%9D%A2/html/index.html#';
                const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});