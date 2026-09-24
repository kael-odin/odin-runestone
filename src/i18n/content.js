// Central content model for the portfolio. Chinese first, English second.
// All display strings flow through here so the whole site can switch languages.

export const site = {
  name: { zh: "汤勇 Kael Odin", en: "Kael Odin" },
  location: { zh: "中国 · 江苏 · 徐州", en: "Xuzhou, Jiangsu, China" },
  credit: { zh: "用心构建", en: "Crafted with care" },
  email: "sczxtangyong@163.com",
};

export const nav = {
  brand: { zh: "Kael Odin", en: "Kael Odin" },
  links: [
    { to: "/", zh: "首页", en: "Home" },
    { to: "/projects", zh: "项目", en: "Projects" },
    { to: "/aboutme", zh: "关于我", en: "About" },
    { to: "/contactme", zh: "联系", en: "Contact" },
  ],
};

export const splash = {
  // Opening-screen greetings. Chinese / Japanese / Korean first, then a world tour.
  // Each entry: { text, lang (label shown small), locale (html lang for font shaping) }
  greetings: [
    { text: "你好", label: "中文", locale: "zh-CN" },
    { text: "こんにちは", label: "日本語", locale: "ja" },
    { text: "안녕하세요", label: "한국어", locale: "ko" },
    { text: "Hello", label: "English", locale: "en" },
    { text: "Bonjour", label: "Français", locale: "fr" },
    { text: "Hola", label: "Español", locale: "es" },
    { text: "Ciao", label: "Italiano", locale: "it" },
    { text: "Olá", label: "Português", locale: "pt" },
    { text: "Hallo", label: "Deutsch", locale: "de" },
    { text: "नमस्ते", label: "हिन्दी", locale: "hi" },
    { text: "สวัสดี", label: "ภาษาไทย", locale: "th" },
    { text: "Xin chào", label: "Tiếng Việt", locale: "vi" },
    { text: "Apa kabar", label: "Bahasa Indonesia", locale: "id" },
    { text: "Kamusta", label: "Filipino", locale: "fil" },
    { text: "مرحبا", label: "العربية", locale: "ar" },
    { text: "Привет", label: "Русский", locale: "ru" },
    { text: "Hej", label: "Svenska", locale: "sv" },
    { text: "Hallå", label: "Norsk", locale: "nb" },
    { text: "Guten tag", label: "Deutsch · CH", locale: "de" },
  ],
};

export const hero = {
  hello: { zh: "你好，我是汤勇 Kael Odin", en: "Hello, I'm Kael Odin" },
  based: { zh: "坐标", en: "Based in" },
  city: { zh: "中国 · 徐州", en: "Xuzhou, China" },
  line1: { zh: "AI 应用", en: "AI-NATIVE" },
  line2: { zh: "工程师", en: "ENGINEER" },
  line3: { zh: "测试工程", en: "QA" },
  line4: { zh: "& 开源", en: "& OPEN SOURCE" },
  roleSide: { zh: "AI 应用工程师\n测试工程师\n开源爱好者", en: "AI Application Engineer\nQA Engineer\nOpen Source" },
  tagline: {
    zh: "先跑通，再讲清楚：把测试、AI 落地和自动化做成真正可用的东西。",
    en: "Make it work first, explain it second — testing, AI adoption and automation that actually ships.",
  },
  tagWords: {
    efficiency: { zh: "效率", en: "Efficiency" },
    aesthetics: { zh: "美学", en: "Aesthetics" },
    functionality: { zh: "功能", en: "Functionality" },
  },
  connect: { zh: "联系我", en: "Let's Connect" },
};

export const intro = {
  blend: {
    pre: { zh: "我融合", en: "My blend of " },
    design: { zh: "测试工程、", en: "QA engineering, " },
    code: { zh: "AI 落地、", en: "AI adoption, " },
    func: { zh: "自动化", en: "automation " },
    and: { zh: "与", en: "and " },
    interaction: { zh: "开源", en: "open source " },
    post: { zh: "，在质量与效率之间找最优解。", en: "— optimizing for both quality and velocity." },
  },
  side: {
    zh: "白天保障三条代理/数据采集产品线的质量，业余把想法做成开源工具。持续输出，相信小而可用的力量。",
    en: "By day I guard the quality of three proxy/data product lines; after hours I ship small open-source tools. Ship often, ship small.",
  },
  big1: { zh: "以测试守住质量", en: "Guard Quality" },
  big2: { zh: "以 AI 提速落地", en: "Ship with AI" },
  para: {
    zh: "负责过 300+ 缺陷的发现与修复推动，也主导过大模型的私有化部署；既懂「怎么测」，也懂「怎么用 AI 提效」。",
    en: "From driving 300+ defects to fix to deploying LLMs on-prem — I know how to test it and how to make AI speed it up.",
  },
  aboutCta: { zh: "关于我", en: "About Me" },
  whatido: { zh: "我的能力", en: "WHAT I DO" },
  cards: [
    {
      title: { zh: "测试工程", en: "QA Engineering" },
      color: "text-blue-500",
      description: { zh: "300+ 缺陷的发现与修复推动：接口、抓包、Playwright 自动化与 SQL 数据核对。", en: "300+ defects driven to fix: API testing, traffic analysis, Playwright automation and SQL validation." },
    },
    {
      title: { zh: "AI 落地", en: "AI Adoption" },
      color: "text-purple-500",
      description: { zh: "llama.cpp 私有化部署与调优、FastGPT 知识库、模型选型评测。", en: "llama.cpp private deployment & tuning, FastGPT knowledge base, model selection reviews." },
    },
    {
      title: { zh: "自动化", en: "Automation" },
      color: "text-cyan-400",
      description: { zh: "GitHub Actions 流水线：榜单、镜像站每日自动更新，零服务器成本。", en: "GitHub Actions pipelines: leaderboards and mirrors updating daily at zero server cost." },
    },
    {
      title: { zh: "开源持续输出", en: "Open Source" },
      color: "text-yellow-300",
      description: { zh: "学术 Skill 每日榜、2205 条提示词中文镜像，先跑通再讲清楚。", en: "Academic skill leaderboard and a 2205-prompt Chinese mirror — make it work, then explain it." },
    },
  ],
};

export const projects = {
  title: { zh: "我的项目", en: "My Projects" },
  loadMore: { zh: "查看更多", en: "Load More" },
  items: [
    {
      title: "Academic Skills 榜单",
      color: "purple-500",
      role: { zh: "开发", en: "Development" },
      tech: "JavaScript, GitHub Actions, Agent Skills",
      description: { zh: "学术论文与科研 Agent Skill 每日排行榜（85★），自动搜索过滤排名，每日更新。", en: "Daily-ranked leaderboard (85★) of academic research Agent Skills, auto-updated." },
      link: "https://github.com/kael-odin/awesome-academic-research-skills",
    },
    {
      title: "Prompts Chat 中文站",
      color: "gray-200",
      role: { zh: "开发", en: "Development" },
      tech: "Astro, i18n, 增量翻译流水线",
      description: { zh: "2205 条公开提示词的中英对照镜像：全文搜索、一键复制、持续增量翻译。", en: "A zh/en mirror of 2205 public prompts: full-text search, one-click copy, incremental translation." },
      link: "https://github.com/kael-odin/prompts-chat-zh",
    },
    {
      title: "企业 AI 基础设施",
      color: "blue-500",
      role: { zh: "AI 落地", en: "AI Adoption" },
      tech: "llama.cpp, FastGPT, RAG",
      description: { zh: "大模型私有化部署与调优 + 企业知识库 + 模型选型评测，为 50+ 同事提供 AI 支持。", en: "On-prem LLM deployment & tuning plus a FastGPT knowledge base; AI support for 50+ colleagues." },
      link: "#/",
    },
  ],
};

export const tech = {
  intro: {
    pre: { zh: "我的专长覆盖广泛的技术栈，能够交付", en: "My expertise spans a diverse range of technologies, enabling me to deliver " },
    hi: { zh: "全面且前沿", en: "comprehensive and " },
    mid: { zh: "的解决方案。", en: "solutions" },
    hi2: { zh: "", en: " across various platforms." },
  },
  heading: {
    pre: { zh: "我以", en: "I Build " },
    amazing: { zh: "惊艳", en: "amazing" },
    mid: { zh: "的速度构建 Web 应用", en: " Webapps at " },
    cover: { zh: "极速", en: "Warping speed" },
  },
  items: ["Python", "JavaScript", "Playwright", "Postman", "llama.cpp", "FastGPT", "SQL", "Linux", "Git"],
};

export const experience = {
  dot: { zh: "技术与产品", en: "Technical Product" },
  para: {
    zh: "与工程协作，善用现代技术，把产品从想法送到上线。",
    en: "Collaborating with engineering, leveraging modern technologies, and shipping products from idea to launch.",
  },
  title: { zh: "经验与技能", en: "Experience & skills" },
  groups: [
    {
      id: "01",
      title: { zh: "测试工程", en: "QA" },
      description: {
        zh: "三条代理/数据采集产品线的功能测试全流程：需求评审到回归验证，累计 300+ 缺陷。",
        en: "Full-cycle testing across three proxy/data product lines: 300+ defects found and driven to fix.",
      },
      skills: ["Playwright + pytest", "Postman", "Charles / DevTools 抓包", "SQL 数据校验", "Python 测试脚本", "Teambition 缺陷管理"],
      color: "text-accentv",
    },
    {
      id: "02",
      title: { zh: "AI 落地", en: "AI Adoption" },
      description: { zh: "大模型私有化部署与企业知识库：从量化调参到检索调优，让 AI 真正进业务。", en: "On-prem LLMs and enterprise knowledge bases: from quantization to retrieval tuning." },
      skills: ["llama.cpp 部署调优", "FastGPT / RAG", "Prompt 工程", "模型评测与选型", "ComfyUI / SD / Midjourney"],
      color: "text-accentc",
    },
    {
      id: "03",
      title: { zh: "开发", en: "Development" },
      description: { zh: "把想法做成能用的小工具：小程序、内部系统与自动化流水线。", en: "Shipping small usable tools: mini programs, internal systems and automation pipelines." },
      skills: ["Python", "Java", "JavaScript / HTML / CSS", "MySQL", "微信小程序", "Git / Linux"],
      color: "text-accenty",
    },
    {
      id: "04",
      title: { zh: "自驱学习", en: "Self-driven" },
      description: { zh: "高考 660 入浙大竺可桢学院，肄业重考后半工半读读完 AI 本科；创业三年再转向 AI 行业。", en: "Gaokao 660 into Zhejiang University; re-took it and earned an AI degree while running a startup." },
      skills: ["英语 CET-6", "AI 编程工具", "教培创业 100+ 学生", "快速上手新栈"],
      color: "text-accentp",
    },
  ],
};

export const caseStudies = {
  title: { zh: "案例研究", en: "Case Studies" },
  all: { zh: "全部案例", en: "All Case Studies" },
  items: [
    {
      title: "学术 Skill 每日榜",
      enTitle: "Academic Skills Daily Leaderboard",
      role: { zh: "独立开发 · 持续维护 · 2026", en: "Solo build · maintained · 2026" },
      metric: "85★",
      metricLabel: { zh: "GitHub Star", en: "GitHub Stars" },
      link: "https://github.com/kael-odin/awesome-academic-research-skills",
    },
    {
      title: "提示词中文镜像站",
      enTitle: "Prompts Chat Chinese Mirror",
      role: { zh: "独立开发 · Astro + 增量翻译 · 2026", en: "Solo build · Astro + incremental i18n · 2026" },
      metric: "2205",
      metricLabel: { zh: "条提示词中英对照", en: "Prompts mirrored (zh/en)" },
      link: "https://github.com/kael-odin/prompts-chat-zh",
    },
    {
      title: "企业 AI 基础设施",
      enTitle: "Enterprise AI Infrastructure",
      role: { zh: "主导落地 · llama.cpp + FastGPT · 2025.11 起", en: "Lead adoption · llama.cpp + FastGPT · since 2025.11" },
      metric: "50+",
      metricLabel: { zh: "名同事获得 AI 支持", en: "Colleagues supported" },
      link: "",
    },
  ],
};

export const aboutPage = {
  hello: { zh: "你好！我是 Kael Odin", en: "Hello! I'm Kael Odin" },
  big: { zh: "以数字匠心，造卓越体验", en: "Crafting Digital Excellence" },
  para1: { zh: "我是汤勇（Kael Odin），一名 AI 应用工程师 / 测试工程师：负责三条代理/数据采集产品线的测试全流程，也主导过大模型私有化部署与企业知识库。", en: "I am Tang Yong (Kael Odin), an AI application engineer & QA engineer: full-cycle testing for three proxy/data product lines, plus on-prem LLM deployment and enterprise knowledge bases." },
  para2: { zh: "教培创业三年、带教 100+ 名学生之后转向 AI 行业——我相信「先跑通，再讲清楚」，也相信持续输出的小项目比宏大的计划更有力量。", en: "After three years running a tutoring startup (100+ students), I pivoted to AI. I believe in shipping small and explaining later." },
  help: { zh: "我能帮你", en: "I can help you with" },
  services: [
    { title: { zh: "设计", en: "Design" }, description: { zh: "交付稳健好用的数字设计，与开发无缝衔接，每个项目既好看又好用。", en: "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development." } },
    { title: { zh: "开发", en: "Development" }, description: { zh: "从零构建可扩展网站，专注微动画、转场与交互，用 Next.js / React.js，配 GSAP 与 Framer Motion。", en: "I build scalable websites from scratch that fit seamlessly with design, focused on micro animations, transitions, and interaction with Next.js, React.js, GSAP and Framer Motion." } },
    { title: { zh: "全栈交付", en: "The full package" }, description: { zh: "从概念到实现的全栈应用：设计眼光加前后端与数据库功底，成就出色项目。", en: "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation, with design taste plus frontend, backend and database expertise." } },
  ],
  contactCta: { zh: "联系我", en: "Contact Me" },
};

export const contactPage = {
  title: { zh: "我们连线吧！", en: "Let's Connect!" },
  para: {
    zh: "无论是合作项目、攻克难题，还是聊聊技术，都欢迎联系。一起把想法变成现实。",
    en: "Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.",
  },
  fields: [
    { key: "name", num: "01", label: { zh: "你怎么称呼？", en: "What's your name?" }, placeholder: { zh: "李明*", en: "Ada Lovelace*" }, required: true },
    { key: "email", num: "02", label: { zh: "你的邮箱？", en: "What's your email?" }, placeholder: { zh: "you@example.com*", en: "you@example.com*" }, type: "email", required: true },
    { key: "organization", num: "03", label: { zh: "你的组织是？", en: "What's the name of your organization?" }, placeholder: { zh: "某某公司", en: "Analytical Society" } },
    { key: "taskArea", num: "04", label: { zh: "需要哪方面的帮助？", en: "What specific area or task do you need help with?" }, placeholder: { zh: "比如：优化 Next.js 应用性能", en: "To improve the performance of a Next.js application" } },
    { key: "message", num: "05", label: { zh: "留言", en: "Your message" }, placeholder: { zh: "你好，能帮我看看……*", en: "Hello, can you help me with...*" }, required: true },
  ],
  send: { zh: "发送留言", en: "Send Message" },
  sending: { zh: "发送中…", en: "Sending..." },
  success: { zh: "已在邮件客户端打开留言，确认后即可发送。", en: "Opened in your mail client — review and send from there." },
  fail: { zh: "发送失败，请稍后再试。", en: "Failed to send message. Please try again later." },
  contactDetails: { zh: "联系方式", en: "CONTACT DETAILS" },
  socials: { zh: "社交媒体", en: "SOCIALS" },
  email: "sczxtangyong@163.com",
};

export const projectsPage = {
  title: { zh: "我的项目", en: "My Projects" },
};

export const footer = {
  brand: {
    pre: { zh: "让", en: "Where " },
    aesthetics: { zh: "美学", en: "aesthetics" },
    mid: { zh: "与", en: " &" },
    func: { zh: "功能", en: "functionality" },
    post: { zh: "相遇", en: " meet" },
  },
  explore: { zh: "探索", en: "Explore" },
  exploreLinks: [
    { to: "/", zh: "首页", en: "Home" },
    { to: "/aboutme", zh: "关于我", en: "About Me" },
    { to: "/contactme", zh: "联系", en: "Contact" },
  ],
  follow: { zh: "关注我", en: "Follow Me" },
  socials: [
    { label: "GitHub", url: "https://github.com/kael-odin" },
    { label: "Blog", url: "https://odin-saga.vercel.app/" },
    { label: "Email", url: "mailto:sczxtangyong@163.com" },
  ],
  contactCard: { zh: "联系我", en: "Contact Me" },
  contactHint: { zh: "打个招呼吧！", en: "Say Hello!" },
  projectsCard: { zh: "我的项目", en: "My Projects" },
  projectsHint: { zh: "看看项目", en: "Explore Projects" },
  madeWith: { zh: "用心构建", en: "Made with" },
  watermark: { zh: "Kael Odin", en: "Kael Odin" },
};

export const social = {
  tagline: { zh: "// 测试，AI，\n开源", en: "// QA, AI,\nOpen Source" },
  email: "sczxtangyong@163.com",
};

export const notFound = {
  title: "404",
  para: { zh: "页面不存在", en: "Page not found" },
  cta: { zh: "回首页", en: "Go to Home Page" },
};
