/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-13 07:37:48
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-16 16:52:44
 */
import {
  GlobalState,
  globalState$,
  initGlobalStateSetter,
  QiankunBootstrapProps,
  QiankunMountProps,
  QiankunUnmountProps,
} from './services/micro-app';

export const qiankun = {
  async bootstrap(props: QiankunBootstrapProps) {},
  async mount(props: QiankunMountProps) {
    console.log('[MicroReact] app init.');

    initGlobalStateSetter(props.setGlobalState);
    props.onGlobalStateChange((state: GlobalState) => {
      globalState$.next(state);
    }, true);
  },
  async unmount(props: QiankunUnmountProps) {},
};
