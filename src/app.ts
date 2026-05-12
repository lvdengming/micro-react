/*
 * @Author: error: git config user.email & please set dead value or install git
 * @Date: 2026-05-13 07:37:48
 * @LastEditors: error: git config user.email & please set dead value or install git
 * @LastEditTime: 2026-05-13 07:38:01
 */
export const qiankun = {
  async bootstrap(props: any) {
    console.log('子应用 bootstrap', props);
  },
  async mount(props: any) {
    console.log('子应用 mount', props);
  },
  async unmount(props: any) {
    console.log('子应用 unmount', props);
  },
};
