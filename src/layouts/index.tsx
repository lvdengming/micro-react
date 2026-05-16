/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-13 07:21:55
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-16 16:52:15
 */
import {
  GlobalState,
  globalState$,
  setGlobalState,
} from '@/services/micro-app';
import { useEffect, useState } from 'react';
import { Outlet } from 'umi';
import styles from './index.module.less';

export default () => {
  useEffect(() => {
    const subscription = globalState$.subscribe((state: GlobalState) => {
      setStates((prevStates: Array<GlobalState>) => [state, ...prevStates]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const [states, setStates] = useState<Array<GlobalState>>([]);

  return (
    <>
      <Outlet />

      <div className="actions-wrapper">
        <button onClick={() => sendData()}>Send Data</button>
      </div>

      <div className={styles['micro-states-wrapper']}>
        {states.map((state: GlobalState, index: number) => (
          <p key={index} className="micro-state-item">
            <span>[{state.timeStr}] </span>
            <span>{state.from}: </span>
            <span>{state.data}</span>
          </p>
        ))}
      </div>
    </>
  );
};

/** 发送数据到微前端 */
function sendData(): void {
  const timeStr = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());

  // setGlobalState 是 Object.assign 方式，订阅者会拿到合并后的全局状态
  const state: GlobalState = {
    from: 'react',
    timeStr,
    data: 'Hello from react - ' + Math.random().toString(16).slice(2, 6),
  };

  setGlobalState(state);
}
