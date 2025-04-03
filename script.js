// 为目的地卡片添加点击事件
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有"查看详情"按钮
    const detailButtons = document.querySelectorAll('.btn-details');
    
    // 为每个按钮添加点击事件
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // 获取目的地信息
            const card = this.closest('.destination-card');
            const title = card.querySelector('h3').textContent;
            const location = card.querySelector('.destination-overlay p').textContent;
            const description = card.querySelector('.destination-info p').textContent;
            
            // 创建弹窗
            showDestinationModal(title, location, description);
        });
    });
});

// 创建并显示目的地详情弹窗
function showDestinationModal(title, location, description) {
    // 创建模态框元素
    const modal = document.createElement('div');
    modal.className = 'destination-modal';
    
    // 添加模态框内容
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${title}</h2>
            <h3>${location}</h3>
            <p>${description}</p>
        </div>
    `;
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .destination-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            position: relative;
            animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .close-button {
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        
        .close-button:hover {
            color: #000;
        }
        
        .modal-content h2 {
            margin-bottom: 0.5rem;
            color: #00b894;
        }
        
        .modal-content h3 {
            margin-bottom: 1rem;
            color: #666;
        }
    `;
    
    // 添加样式到页面
    document.head.appendChild(style);
    
    // 添加模态框到页面
    document.body.appendChild(modal);
    
    // 添加关闭按钮事件
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.remove();
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 为首页的特色目的地卡片添加点击效果
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('click', function() {
        const link = this.getAttribute('onclick');
        if (link) {
            eval(link);
        }
    });
});