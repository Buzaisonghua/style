## nestjs依赖包
- @nestjs/core NestJS的核心模块，提供构建，启动和管理NestJS应用程序的基础设施
- @nestjs/common 包含了构建NestJ应用程序基础设施和常用装饰器，像控制器，服务，中间件，守卫，拦截器，管道，异常过滤器等
- rxjs 用于构建异步和事件驱动程序的库
- reflect-metadata 实现元编程的库，提供原数据反射API，可以在运行时检查和操作对象的元数据
- nestjs/platform-express Nest的express平台适配器，提供中间件，路由等功能

## tsconfig.json
- "experimentalDecorators":  true 启用实验性的装饰器特性
- "target": "ESNext", 指定ECMAScript目标版本
- "moduleResolution": "NodeNext", 如何查找第三方模块
- "module": "NodeNext" 指定生成的模块代码系统

## NestJs
- 核心其实就是Express🏠装饰器