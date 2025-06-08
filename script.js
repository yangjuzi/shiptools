// ShipTools.top - 出海工具导航站

// 工具数据
const toolsData = {
    inspiration: [
        {
            name: "Google Trends",
            url: "https://trends.google.com",
            description: "全球最权威的搜索趋势分析工具，实时掌握用户搜索热点，发现新兴市场机会，验证产品需求真实性，支持多地区对比分析",
            icon: "GT"
        },
        {
            name: "Product Hunt",
            url: "https://producthunt.com",
            description: "全球最大的产品发现平台，每日精选创新产品，获取最新科技趋势，学习成功产品的推广策略，寻找合作伙伴和投资机会",
            icon: "PH"
        },
        {
            name: "BuzzSumo",
            url: "https://buzzsumo.com",
            description: "专业的内容营销分析平台，发现社交媒体热门话题，分析竞争对手内容策略，找到行业影响者，优化内容传播效果",
            icon: "BS"
        },
        {
            name: "GitHub Trending",
            url: "https://github.com/trending",
            description: "发现最热门的开源项目和技术趋势，学习最新编程技术，寻找可复用的代码库，跟踪技术发展方向和开发者动态",
            icon: "GH"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            description: "全球最大的论坛社区，深入了解各行业用户真实需求和痛点，发现小众市场机会，获取产品反馈和改进建议",
            icon: "RD"
        },
        {
            name: "V2EX",
            url: "https://v2ex.com",
            description: "中文技术社区，汇聚程序员和创业者，分享技术经验和创业心得，发现国内市场需求，建立技术人脉关系",
            icon: "V2"
        },
        {
            name: "1000UserGuide",
            url: "https://1000userguide.com",
            description: "专门指导如何获得前1000个用户的实战指南，提供具体可执行的用户获取策略，适合早期创业项目冷启动",
            icon: "1K"
        },
        {
            name: "Google关键词规划",
            url: "https://ads.google.com/aw/keywordplanner",
            description: "Google官方关键词研究工具，分析搜索量和竞争程度，发现长尾关键词机会，制定SEO和广告投放策略",
            icon: "GK"
        },
        {
            name: "Toolify",
            url: "https://www.toolify.ai",
            description: "AI工具排行榜和评测平台，追踪最新AI产品趋势，分析热门AI应用的功能特点，发现AI领域的创业机会",
            icon: "TF"
        },
        {
            name: "There's An AI For That",
            url: "https://theresanaiforthat.com",
            description: "最全面的AI工具数据库，用户可以提交AI工具需求，开发者可以发现市场缺口，是AI产品灵感的重要来源",
            icon: "AI"
        }
    ],
    essentials: [
        {
            name: "Vercel",
            url: "https://vercel.com",
            description: "现代化的前端部署平台，支持Next.js、React等框架，提供全球CDN加速，零配置部署，适合快速上线MVP产品",
            icon: "VC"
        },
        {
            name: "Cloudflare",
            url: "https://cloudflare.com",
            description: "全球领先的CDN和网络安全服务商，免费提供DDoS防护、SSL证书、DNS解析，大幅提升网站访问速度和安全性",
            icon: "CF"
        },
        {
            name: "Supabase",
            url: "https://supabase.com",
            description: "开源的Firebase替代方案，提供实时数据库、用户认证、文件存储等后端服务，支持PostgreSQL，开发者友好",
            icon: "SB"
        },
        {
            name: "GitHub",
            url: "https://github.com",
            description: "全球最大的代码托管平台，提供版本控制、协作开发、自动化部署等功能，支持静态网站免费托管，开发者必备",
            icon: "GH"
        },
        {
            name: "Porkbun",
            url: "https://porkbun.com",
            description: "性价比极高的域名注册商，价格透明无隐藏费用，免费提供WHOIS隐私保护和DNS管理，支持多种域名后缀",
            icon: "PK"
        },
        {
            name: "Namecheap",
            url: "https://namecheap.com",
            description: "知名域名注册和网络托管服务商，提供域名注册、SSL证书、主机服务，客户服务优质，价格合理，信誉良好",
            icon: "NC"
        },
        {
            name: "域名查询",
            url: "https://instantdomainsearch.com",
            description: "快速域名可用性查询工具，实时检查域名注册状态，支持多种后缀搜索，界面简洁操作便捷，域名选择必备工具",
            icon: "DM"
        },
        {
            name: "批量域名查询",
            url: "https://query.domains",
            description: "支持批量查询多个域名的注册状态和到期时间，提供域名投资分析，适合域名投资者和批量项目管理",
            icon: "QD"
        },
        {
            name: "宝塔面板",
            url: "https://www.bt.cn",
            description: "简单易用的Linux服务器管理面板，一键安装LAMP/LNMP环境，可视化管理网站、数据库、FTP等，降低服务器运维门槛",
            icon: "BT"
        },
        {
            name: "Google Analytics",
            url: "https://analytics.google.com",
            description: "Google官方网站分析工具，详细追踪用户行为数据，分析流量来源和转化率，提供深度数据洞察，制定优化策略",
            icon: "GA"
        },
        {
            name: "Google Search Console",
            url: "https://search.google.com/search-console",
            description: "Google官方SEO工具，监控网站在搜索结果中的表现，提供关键词排名、索引状态、技术问题诊断等功能",
            icon: "GS"
        },
        {
            name: "Bing站长工具",
            url: "https://www.bing.com/webmasters",
            description: "微软Bing搜索引擎的官方站长工具，管理网站在Bing的索引表现，提供搜索流量分析和SEO优化建议",
            icon: "BW"
        }
    ],
    templates: [
        {
            name: "Tailwind UI",
            url: "https://tailwindui.com",
            description: "Tailwind CSS官方组件库，提供精美的现成UI组件和页面模板，由Tailwind团队精心设计，代码质量高，商业项目首选",
            icon: "TU"
        },
        {
            name: "Next.js",
            url: "https://nextjs.org",
            description: "React全栈开发框架，支持服务端渲染、静态生成、API路由等功能，性能优秀，SEO友好，适合构建现代化Web应用",
            icon: "NJ"
        },
        {
            name: "Webflow",
            url: "https://webflow.com",
            description: "专业的可视化网站构建器，无需编程即可创建响应式网站，生成高质量代码，适合设计师和非技术创业者快速建站",
            icon: "WF"
        },
        {
            name: "Flowbite",
            url: "https://flowbite.com",
            description: "基于Tailwind CSS的开源组件库，提供丰富的UI组件和交互元素，文档详细，社区活跃，适合快速原型开发",
            icon: "FB"
        },
        {
            name: "Tailwind Play",
            url: "https://play.tailwindcss.com",
            description: "官方在线Tailwind CSS编辑器，实时预览样式效果，支持组件分享，适合快速测试设计想法和学习Tailwind语法",
            icon: "TP"
        },
        {
            name: "Pagedone UI",
            url: "https://pagedone.io",
            description: "现代化的UI组件库，提供FAQ、定价表、联系表单等常用网站组件，设计精美，复制即用，大幅提升开发效率",
            icon: "PD"
        },
        {
            name: "StaticHunt",
            url: "https://statichunt.com",
            description: "精选免费静态网站模板资源库，涵盖各种行业和风格，模板质量高，适合快速启动项目，节省设计和开发时间",
            icon: "SH"
        },
        {
            name: "HelloGitHub",
            url: "https://hellogithub.com",
            description: "发现有趣的开源项目，每月推荐优质GitHub项目，涵盖各种编程语言和应用领域，学习新技术的好去处",
            icon: "HG"
        },
        {
            name: "技术栈工具",
            url: "https://chuhai.tools",
            description: "专为独立开发者打造的出海技术栈工具集，包含建站工具、UI组件、开发资源等，一站式解决技术需求",
            icon: "CT"
        },
        {
            name: "多语言翻译",
            url: "https://www.i18ncode.com",
            description: "专业的JSON文件多语言翻译工具，支持批量翻译，自动识别语言，大幅简化国际化开发流程，出海产品必备",
            icon: "I18"
        },
        {
            name: "图标制作",
            url: "https://ray.so/icon",
            description: "在线图标生成器，支持多种风格和格式，可自定义颜色和尺寸，快速生成应用图标和Logo，设计师友好",
            icon: "IC"
        },
        {
            name: "隐私政策生成器",
            url: "https://app.freeprivacypolicy.com",
            description: "免费生成符合GDPR等法规要求的隐私政策和使用条款，自动适配不同地区法律，确保产品合规性",
            icon: "PP"
        }
    ],
    consulting: [
        {
            name: "Stripe Atlas",
            url: "https://stripe.com/atlas",
            description: "Stripe官方公司注册服务，帮助全球创业者在美国注册公司，提供银行开户、税务咨询等一站式服务，出海必备",
            icon: "SA"
        },
        {
            name: "Clerky",
            url: "https://clerky.com",
            description: "专业的初创公司法律文件管理平台，提供股权管理、期权计划、法律文件起草等服务，硅谷初创企业首选",
            icon: "CK"
        },
        {
            name: "Pilot",
            url: "https://pilot.com",
            description: "专为初创公司提供记账、税务申报、财务报表等服务，由专业会计师团队操作，让创业者专注产品开发",
            icon: "PL"
        },
        {
            name: "生财有术",
            url: "https://scys.com",
            description: "国内知名的创业社群，汇聚互联网从业者和创业者，分享实战经验和商业机会，提供出海资源和人脉连接",
            icon: "SC"
        },
        {
            name: "出海手册",
            url: "https://chuhai.tools",
            description: "完整的出海创业实战指南，涵盖从产品开发到海外推广的全流程，提供工具推荐和实操案例，新手出海必读",
            icon: "CH"
        },
        {
            name: "独立开发者社区",
            url: "https://www.indiehackers.site",
            description: "中文独立开发者社区，分享产品开发经验、技术选型、商业模式等，连接同行，获取创业灵感和支持",
            icon: "IH"
        },
        {
            name: "W2Solo",
            url: "https://w2solo.com",
            description: "独立开发者社区平台，专注个人开发者的产品分享和经验交流，提供项目展示、技术讨论、商业合作机会",
            icon: "W2"
        },
        {
            name: "信息差周刊",
            url: "https://gapis.money",
            description: "专注独立开发者出海的信息分享平台，每周分享最新的工具、资源、商业机会和行业趋势，保持信息敏感度",
            icon: "GP"
        }
    ],
    marketing: [
        {
            name: "Mailchimp",
            url: "https://mailchimp.com",
            description: "全球领先的邮件营销平台，提供邮件自动化、用户分段、A/B测试等功能，界面友好，免费版功能丰富，中小企业首选",
            icon: "MC"
        },
        {
            name: "Buffer",
            url: "https://buffer.com",
            description: "专业的社交媒体管理工具，支持多平台内容发布和调度，提供数据分析和团队协作功能，提高社媒运营效率",
            icon: "BF"
        },
        {
            name: "SEMrush",
            url: "https://semrush.com",
            description: "全能的数字营销工具套件，提供SEO分析、PPC管理、内容营销、社媒监控等功能，竞争对手分析的行业标准",
            icon: "SR"
        },
        {
            name: "Ahrefs",
            url: "https://ahrefs.com",
            description: "专业的SEO工具平台，拥有全球最大的反链数据库，提供关键词研究、网站审计、排名跟踪等功能，SEO专家必备",
            icon: "AH"
        },
        {
            name: "Twitter/X",
            url: "https://x.com",
            description: "全球影响力最大的社交媒体平台之一，适合品牌推广、产品发布、KOL营销，特别适合技术产品和B2B市场营销",
            icon: "TW"
        },
        {
            name: "Reddit推广",
            url: "https://www.reddit.com",
            description: "全球最大的论坛社区，拥有活跃的用户群体，适合软性营销和产品讨论，需要遵循社区规则，避免过度推销",
            icon: "RD"
        },
        {
            name: "V2EX推广",
            url: "https://v2ex.com/go/create",
            description: "中文技术社区推广平台，程序员和创业者聚集地，适合技术产品推广，需要提供有价值的内容才能获得认可",
            icon: "V2"
        },
        {
            name: "SM.MS图床",
            url: "https://sm.ms",
            description: "免费稳定的图片上传服务，支持外链调用，适合博客、论坛、社交媒体等场景的图片托管，推广内容制作必备",
            icon: "SM"
        },
        {
            name: "关键词密度检测",
            url: "https://tool.chinaz.com/tools/density.aspx",
            description: "网页关键词密度分析工具，检测页面关键词分布情况，优化SEO效果，避免关键词堆砌，提高搜索引擎排名",
            icon: "KD"
        },
        {
            name: "AITDK竞品分析",
            url: "https://aitdk.com",
            description: "AI工具行业竞品分析平台，追踪竞争对手产品动态、功能更新、市场表现，制定差异化竞争策略",
            icon: "AT"
        }
    ],
    monetization: [
        {
            name: "Stripe",
            url: "https://stripe.com",
            description: "全球领先的在线支付处理平台，支持信用卡、数字钱包等多种支付方式，API友好，安全可靠，开发者首选支付解决方案",
            icon: "ST"
        },
        {
            name: "PayPal",
            url: "https://paypal.com",
            description: "全球最大的数字支付平台，覆盖200多个国家和地区，支持多币种交易，用户基数庞大，跨境支付的经典选择",
            icon: "PP"
        },
        {
            name: "Paddle",
            url: "https://paddle.com",
            description: "专为SaaS产品设计的订阅计费平台，处理税务合规、发票管理、订阅管理等复杂业务，让创业者专注产品开发",
            icon: "PD"
        },
        {
            name: "小报童",
            url: "https://xiaobot.net",
            description: "知识付费和内容变现平台，支持付费专栏、课程销售、会员订阅等模式，适合内容创作者和知识工作者变现",
            icon: "XB"
        },
        {
            name: "小报童精选",
            url: "https://xiaobaot.best",
            description: "小报童平台的优质专栏推荐网站，帮助用户发现高质量付费内容，为内容创作者提供额外的曝光和推广渠道",
            icon: "XS"
        },
        {
            name: "Google AdSense",
            url: "https://www.google.com/adsense",
            description: "Google官方网站广告变现平台，智能匹配相关广告内容，按点击和展示付费，适合内容型网站和应用的流量变现",
            icon: "GS"
        },
        {
            name: "RackNerd服务器",
            url: "https://my.racknerd.com",
            description: "性价比极高的VPS服务器提供商，价格低廉但性能稳定，适合初创项目降低服务器成本，支持多种操作系统",
            icon: "RN"
        },
        {
            name: "Ideogram AI",
            url: "https://ideogram.ai",
            description: "先进的AI图像生成工具，支持文字转图像，可用于设计、营销素材制作，为创意产业提供AI变现的新思路",
            icon: "ID"
        },
        {
            name: "FreeMind白噪音",
            url: "https://freemind.fit",
            description: "专注和放松的白噪音应用，提供多种环境音效，展示了利基市场应用的成功变现模式，简单产品也能盈利",
            icon: "FM"
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