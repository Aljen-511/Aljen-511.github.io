# Mywebsite

基于 Hexo 和 NexT 的个人博客，源码托管在 GitHub，正式发布通过 GitHub Actions 部署到 GitHub Pages。

## Requirements

- Node.js 20 LTS
- npm

## Install

```powershell
cmd /c npm ci
```

如果你在 Windows PowerShell 里直接执行 `npm` 遇到执行策略限制，优先使用 `npm.cmd` 或 `cmd /c npm ...`。

## Local Development

清理缓存和生成目录：

```powershell
cmd /c npm run clean
```

本地构建：

```powershell
cmd /c npm run build
```

启动本地预览服务器：

```powershell
cmd /c npm run server
```

默认预览地址是 `http://localhost:4000`。

## Writing Notes

- 文章源码位于 `source/_posts/`
- 页面源码位于 `source/about/`、`source/tags/`、`source/categories/`
- 站点使用 NexT 自带的 MathJax 支持，适合包含行内公式、块级公式和带编号公式的文章

## Deployment

- 日常写作、构建和验收在本地完成
- 正式线上发布统一通过 GitHub Actions 执行
- 推送到 `main` 后，工作流会自动构建并发布到 GitHub Pages

工作流配置文件见 [.github/workflows/hexo-deploy.yml](D:/codes/Mywebsite/.github/workflows/hexo-deploy.yml)。
