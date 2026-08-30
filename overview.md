# tutu 官网 — 代码结构说明（overview）

> 这份文件是给「未来的你 / 新接手的人」快速看懂本项目用的。
> 下次打开这个项目，先读这一份就够了。

---

## 一、项目是什么

**tutu** 是一个面向 **全球跨境电商卖家** 的「**商品图精修服务**」官网（**国际版，中英双语**）。

客户定位：**Amazon / eBay / Shopify / Etsy / Walmart 等全球平台卖家**（不再做淘宝/拼多多/抖音等国内平台）。

> 方向变更记录：
> - 2026-08-30 决定**只做国际版**，放弃国内备案路线（GitHub Pages 境外托管，免备案）。
> - 同日从「东南亚/非洲跨境」扩展为「全球跨境（北美/欧洲/亚洲/新兴市场）」，主推 Amazon 等主流平台。
> - 中英双语：**`index.html` = 英文主站（默认/国际）**，**`zh.html` = 中文版**（面向会中文的国际卖家 + 你维护用）。两页都在仓库根目录，共用 `styles.css` / `script.js`。

- 你提供的服务：卖家发来产品「原图」，你把它处理成**能直接挂上商品链接的精修商品图**（去背、调光、换场景、平台尺寸合规、多语言配图等）
- 这个站的作用：**展示技能 + 接单**（含跨境收款说明：PayPal / Wise / Stripe / USDT）

## 二、技术栈（刻意保持简单）

| 项 | 选择 | 原因 |
|----|------|------|
| 前端 | 纯静态 HTML + CSS + 原生 JS | 零构建、打开即看、后续好接后端 |
| 后端 | 暂无 | 表单当前是「演示态」，只本地反馈，没接真实收单 |
| 部署 | GitHub Pages（境外托管，免备案） | 静态站，境外托管无需 ICP 备案；中英双语两页 |

## 三、文件清单

| 文件 | 作用 |
|------|------|
| `index.html` | **英文主站（en）**。页面结构，各区块有英文注释（nav / hero / services / showcase / cases / process / reviews / global / pricing / faq / contact / footer） |
| `zh.html` | **中文版（zh-CN）**。与英文版结构一一对应，文案为中文；两者通过导航右上角语言切换互相跳转 |
| `styles.css` | 样式。墨黑 + 暖橙配色，响应式（手机自适应），含滑块与动画样式，以及导航里的**中英语言切换**样式（`.lang-switch`）。顶部 `:root` 放了配色变量，改主题改这里 |
| `script.js` | 交互。移动端菜单切换、Before/After 拖动滑块、**上传图片预览（CSS 滤镜模拟精修）**、表单提交反馈 |
| `robots.txt` | SEO：允许全站抓取，并指向 sitemap |
| `sitemap.xml` | SEO：站点地图，列出两个语言页，含 `xhtml:link` 双语标注 |
| `overview.md` | **本说明文件** |

## 四、页面板块 → 对应代码位置

| 板块 | 锚点 / class | 说明 |
|------|--------------|------|
| 导航栏 | `nav` | 锚点跳转各板块 + 语言切换（EN / 中文）|
| Hero 主张 | `.hero` | 「Pro product images that make your listings sell」+ 立即估价 CTA |
| 信任背书 | `.trust` | 服务店铺数 / 满意度 / 覆盖平台 |
| 服务能力 | `#services` | 去背 / 精修 / 场景 / 平台尺寸合规 / 批量 / 多语言配图 |
| 作品对比 | `#showcase` `.ba-slider` | 可拖动滑块 Before/After；**支持「上传你的图看效果」** |
| 案例展示 | `#cases` `.gallery` | 6 个品类占位卡 |
| 服务流程 | `#process` | 提交原图 → 沟通需求 → 精修交付 → 上架无忧 |
| 商家评价 | `#reviews` `.reviews` | 3 条示例评价 |
| 服务全球卖家 | `#global` `.cb-grid` | 双栏：北美欧洲（Amazon/eBay/Etsy）/ 亚洲新兴（Shopee/Lazada/Jumia），含跨境收款（PayPal/Wise/Stripe/USDT）|
| 套餐价格 | `#pricing` | Starter / Standard（标「Most popular」）/ Monthly，USD 报价 |
| 联系下单 | `#contact` | Email / WhatsApp 占位 + 需求表单（演示态）|
| 常见问题 | `#faq` | FAQ 折叠 + FAQPage 结构化数据 |
| 页脚 | `footer` | 版权与备案占位 |

> SEO：两个 HTML 均含 `canonical`、Open Graph、`hreflang` 三件套（en / zh-CN / x-default→英文页）、JSON-LD（Service + FAQPage）；`sitemap.xml` 用 `xhtml:link` 标注双语 alternate。

## 五、怎么本地预览

```bash
cd tutu
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/        （英文主站）
#           http://localhost:8000/zh.html  （中文版）
```

## 六、待你替换的「占位内容」（重要）

1. **Before/After 案例图** —— 用真实处理案例替换（`#showcase`）
2. **案例展示图** —— 用真实作品替换 `#cases` 的 6 个占位卡
3. **商家评价** —— 换成真实客户反馈（`#reviews`）
4. **联系信息** —— Email / WhatsApp / 二维码占位（`#contact`）
5. **套餐价格** —— 按你实际报价改（`#pricing`）
6. **表单接后端** —— 当前只本地弹提示，未真实收单

## 七、怎么部署上线

- **GitHub Pages**（推荐，免费）：仓库 Settings → Pages → Source 选 `main` 分支 → 保存
  - 英文主站：`https://gushan-park.github.io/tutu/`
  - 中文版：`https://gushan-park.github.io/tutu/zh.html`
- **自有域名**（可选）：境外注册商（Cloudflare / Namecheap）买国际后缀（.com 等），境外托管，**不需要 ICP 备案**

### 换域名时必须改的 5 个地方

站点基准 URL 目前写死为 `https://gushan-park.github.io/tutu/`，买域名后全局替换：

| 文件 | 位置 |
|------|------|
| `index.html` | `canonical` / `og:url` / hreflang 三件套 / JSON-LD `provider.url` |
| `zh.html` | 同上（中文页 URL 末尾为 `/zh.html`）|
| `sitemap.xml` | 两个 `<loc>` 及 6 条 `xhtml:link` |
| `robots.txt` | `Sitemap:` 那一行 |

### 双语 SEO 规则（改动时别破坏）

1. 两个页面**各自 canonical 指向自己**
2. `hreflang` 三件套：`en` / `zh-CN` / `x-default`（x-default 指向英文页）
3. `sitemap.xml` 用 `xhtml:link` 标注双语 alternate

## 八、怎么改内容（给未来的自己）

- 改英文文案 → 编辑 `index.html`；改中文文案 → 编辑 `zh.html`（两套需同步）
- 改配色/风格 → 编辑 `styles.css` 顶部 `:root` 变量
- 改交互 → 编辑 `script.js`
- 想加后端/真实下单 → 在 `script.js` 的表单提交处接 fetch 到你的接口

---

*最后更新：2026-08-30（v5：国际版定稿 —— 面向 Amazon/eBay/Shopify/Etsy 全球卖家；`index.html`=英文主站、`zh.html`=中文版，均在根目录共用样式与脚本；修正导航语言切换与双语 SEO；移除国内平台定位）*
