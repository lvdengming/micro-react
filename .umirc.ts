/*
 * @Author: error: git config user.email & please set dead value or install git
 * @Date: 2026-05-13 07:21:55
 * @LastEditors: error: git config user.email & please set dead value or install git
 * @LastEditTime: 2026-05-13 07:28:36
 */
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/react-home', component: 'home' },
    { path: '/react-detail', component: 'detail' },
  ],
  npmClient: 'pnpm',
  // 微前端场景下不能用 utoopack，需使用 webpack
  // utoopack: {},
});
