// ShipTools.top - 简洁版工具导航站

// 工具数据
const toolsData = {
    inspiration: [
        {
            name: "Google Trends",
            url: "https://trends.google.com",
            description: "发现全球搜索趋势，洞察市场需求变化",
            icon: "GT"
        },
        {
            name: "Product Hunt",
            url: "https://producthunt.com",
            description: "每日产品发现平台，获取创新灵感",
            icon: "PH"
        },
        {
            name: "BuzzSumo",
            url: "https://buzzsumo.com",
            description: "内容分析工具，发现热门话题",
            icon: "BS"
        }
    ],
    essentials: [
        {
            name: "Vercel",
            url: "https://vercel.com",
            description: "现代化前端部署平台，快速上线",
            icon: "VC"
        },
        {
            name: "Cloudflare",
            url: "https://cloudflare.com",
            description: "CDN和DNS服务，提升网站性能",
            icon: "CF"
        },
        {
            name: "Supabase",
            url: "https://supabase.com",
            description: "开源Firebase替代方案",
            icon: "SB"
        }
    ],
    templates: [
        {
            name: "Tailwind UI",
            url: "https://tailwindui.com",
            description: "专业的Tailwind CSS组件库",
            icon: "TU"
        },
        {
            name: "Next.js",
            url: "https://nextjs.org",
            description: "React全栈框架，生产就绪",
            icon: "NJ"
        },
        {
            name: "Webflow",
            url: "https://webflow.com",
            description: "可视化网站构建器",
            icon: "WF"
        }
    ],
    consulting: [
        {
            name: "Stripe Atlas",
            url: "https://stripe.com/atlas",
            description: "公司注册和法律服务",
            icon: "SA"
        },
        {
            name: "Clerky",
            url: "https://clerky.com",
            description: "初创公司法律文件管理",
            icon: "CK"
        },
        {
            name: "Pilot",
            url: "https://pilot.com",
            description: "初创公司记账和税务服务",
            icon: "PL"
        }
    ],
    marketing: [
        {
            name: "Mailchimp",
            url: "https://mailchimp.com",
            description: "邮件营销自动化平台",
            icon: "MC"
        },
        {
            name: "Buffer",
            url: "https://buffer.com",
            description: "社交媒体管理和调度",
            icon: "BF"
        },
        {
            name: "SEMrush",
            url: "https://semrush.com",
            description: "SEO和竞争对手分析",
            icon: "SR"
        }
    ],
    monetization: [
        {
            name: "Stripe",
            url: "https://stripe.com",
            description: "在线支付处理平台",
            icon: "ST"
        },
        {
            name: "PayPal",
            url: "https://paypal.com",
            description: "全球数字支付平台",
            icon: "PP"
        },
        {
            name: "Paddle",
            url: "https://paddle.com",
            description: "SaaS订阅计费平台",
            icon: "PD"
        }
    ]
};

// 分类标题映射
const categoryTitles = {
    inspiration: '需求灵感工具',
    essentials: '上站必备工具', 
    templates: '上站模版效率工具',
    consulting: '咨询服务工具',
    marketing: '推广营销工具',
    monetization: '变现支付工具'
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 默认显示第一个分类
    showCategory('inspiration');
});

// 工具分类切换功能
function showCategory(categoryId) {
    // 移除所有按钮的active状态
    const allButtons = document.querySelectorAll('.category-nav-item');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // 激活选中的按钮
    const targetButton = document.querySelector(`[onclick="showCategory('${categoryId}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // 更新标题
    const titleElement = document.getElementById('current-category-title');
    if (titleElement && categoryTitles[categoryId]) {
        titleElement.textContent = categoryTitles[categoryId];
    }
    
    // 在工具展示区域显示工具
    const toolsContainer = document.getElementById('tools-container');
    if (toolsContainer && toolsData[categoryId]) {
        const tools = toolsData[categoryId];
        const toolsHTML = tools.map(tool => `
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-card">
                <div class="tool-header">
                    <div class="tool-icon">${tool.icon}</div>
                    <div class="tool-name">${tool.name}</div>
                </div>
                <div class="tool-description">${tool.description}</div>
                <div class="tool-link">
                    访问工具 <i class="fas fa-external-link-alt"></i>
                </div>
            </a>
        `).join('');
        
        toolsContainer.innerHTML = toolsHTML;
    }
}

// 导出函数供全局使用
window.showCategory = showCategory; 