/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-13 07:21:55
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-16 16:59:43
 */
import { defineConfig } from 'umi';

export default defineConfig({
  // 微前端配置
  base: '/',
  plugins: [
    // 启用 qiankun 插件
    '@umijs/plugins/dist/qiankun',
  ],
  qiankun: {
    // 声明为子应用
    slave: {},
  },
  routes: [
    { path: '/react-home', component: 'Home/Home' },
    { path: '/react-detail', component: 'Detail/Detail' },
  ],
  npmClient: 'pnpm',
  // 微前端场景下不能用 utoopack，需使用 webpack
  // utoopack: {},
});
