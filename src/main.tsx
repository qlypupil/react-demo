import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import zhCN from 'antd/locale/zh_CN'
import App from '@/App.tsx'

// 全局样式
import '@/common/styles/frame.styl'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
