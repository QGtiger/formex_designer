import { Button, Typography, Card, Divider, Space, Row, Col } from "antd";
import {
  DragOutlined,
  FormOutlined,
  EyeOutlined,
  SettingOutlined,
  ShareAltOutlined,
  RightOutlined,
  AppstoreOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

export default function FormexHomepage() {
  const nav = useNavigate();
  const jumpToEditor = () => {
    nav("/editor");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center">
              <FormOutlined className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold">Formex</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-violet-500"
            >
              功能
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-violet-500"
            >
              工作原理
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button type="default">登录</Button> */}
            <Button
              type="primary"
              style={{ backgroundColor: "#8b5cf6" }}
              className="hover:bg-violet-600"
              onClick={jumpToEditor}
            >
              免费试用
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold mb-6">
            通过拖拽轻松创建
            <br />
            <span className="text-violet-500">专业表单</span>
          </Title>
          <Paragraph className="text-lg text-slate-600 mb-8">
            Formex
            是一款强大的低代码表单构建工具，让您无需编写代码即可创建复杂的表单。拖拽组件、实时预览、即时分享，一切尽在掌握。
          </Paragraph>
          <Space size="middle">
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#8b5cf6" }}
              className="hover:bg-violet-600"
              onClick={jumpToEditor}
            >
              立即开始 <RightOutlined />
            </Button>
            <Button onClick={jumpToEditor} size="large">
              查看演示
            </Button>
          </Space>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-violet-200"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xyBLLSVVLibuDyXwG2jAO18vHU6kzO.png"
              alt="Formex 界面预览"
              className="relative rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Title level={2} className="text-3xl font-bold mb-4">
              强大的功能，简单的操作
            </Title>
            <Paragraph className="text-lg text-slate-600 max-w-2xl mx-auto">
              Formex
              提供了一系列强大的功能，让您能够轻松创建各种复杂的表单，无需编写一行代码。
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <DragOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    拖拽式编辑
                  </Title>
                  <Paragraph className="text-slate-600">
                    通过简单的拖拽操作，从左侧组件库中选择所需的表单元素，轻松构建您的表单。
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <AppstoreOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    丰富的组件库
                  </Title>
                  <Paragraph className="text-slate-600">
                    提供多种表单组件，包括输入框、下拉选择、日期选择器等，满足各种表单需求。
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <EyeOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    实时预览
                  </Title>
                  <Paragraph className="text-slate-600">
                    在编辑过程中实时预览表单效果，所见即所得，让您的设计更加直观。
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <SettingOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    灵活配置
                  </Title>
                  <Paragraph className="text-slate-600">
                    右侧配置面板可以精细调整每个组件的属性，满足个性化需求。
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <ShareAltOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    实时分享
                  </Title>
                  <Paragraph className="text-slate-600">
                    一键分享您的表单设计，与团队成员协作或直接发布给用户使用。
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-500 mb-6">
                    <MobileOutlined className="text-2xl" />
                  </div>
                  <Title level={3} className="text-xl font-bold mb-4">
                    响应式设计
                  </Title>
                  <Paragraph className="text-slate-600">
                    创建的表单自动适应不同设备屏幕，确保在手机、平板和电脑上都有良好的显示效果。
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Title level={2} className="text-3xl font-bold mb-4">
              如何使用 Formex
            </Title>
            <Paragraph className="text-lg text-slate-600 max-w-2xl mx-auto">
              只需三个简单步骤，即可创建并发布您的专业表单
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-500 text-white text-2xl font-bold mb-6">
                1
              </div>
              <Title level={3} className="text-xl font-bold mb-4">
                选择组件
              </Title>
              <Paragraph className="text-slate-600">
                从左侧组件库中选择所需的表单元素，拖拽到中间的预览区域。
              </Paragraph>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-500 text-white text-2xl font-bold mb-6">
                2
              </div>
              <Title level={3} className="text-xl font-bold mb-4">
                配置属性
              </Title>
              <Paragraph className="text-slate-600">
                在右侧配置面板中调整组件的属性，如标签、占位符、验证规则等。
              </Paragraph>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-500 text-white text-2xl font-bold mb-6">
                3
              </div>
              <Title level={3} className="text-xl font-bold mb-4">
                发布分享
              </Title>
              <Paragraph className="text-slate-600">
                完成设计后，点击分享按钮，获取链接或嵌入代码，即可发布您的表单。
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-violet-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Title
            level={2}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            开始创建您的第一个表单
          </Title>
          <Paragraph className="text-xl mb-8 max-w-2xl mx-auto">
            无需编码技能，立即体验 Formex 的强大功能，免费开始您的表单设计之旅。
          </Paragraph>
          <Button
            type="default"
            size="large"
            className="bg-white text-violet-500 hover:bg-slate-100 min-w-40"
            onClick={jumpToEditor}
          >
            免费注册 <RightOutlined />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center">
                  <FormOutlined className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold text-white">Formex</span>
              </div>
              <Paragraph className="text-slate-400">
                简单易用的低代码表单构建工具，让表单创建变得轻松高效。
              </Paragraph>
            </div>
            <div>
              <Title level={4} className="!text-white text-lg font-bold mb-4">
                产品
              </Title>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-violet-300">
                    功能
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    模板
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    集成
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    价格
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Title level={4} className="!text-white text-lg font-bold mb-4">
                资源
              </Title>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-violet-300">
                    文档
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    教程
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    博客
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    支持
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Title level={4} className="!text-white text-lg font-bold mb-4">
                公司
              </Title>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-violet-300">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    联系我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-violet-300">
                    服务条款
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Divider className="border-slate-700 mt-8 mb-6" />
          <div className="text-center text-slate-400">
            <p>© {new Date().getFullYear()} Formex. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
