import '@ant-design/v5-patch-for-react-19' // React 19 补丁
import { StrictMode } from 'react' // React 核心模块
import { createRoot } from 'react-dom/client' // React DOM 渲染模块
import { ConfigProvider } from 'antd' // Ant Design 核心组件
import zhCN from 'antd/locale/zh_CN' // Ant Design 的 Locale 配置
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
