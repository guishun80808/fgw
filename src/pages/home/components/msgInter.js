import * as React from 'react';
import { Tabs } from 'antd-mobile';
import styles from './msgInter.css';
import router from 'umi/router';

function MsgPage({ list1=[], list2=[], list3=[], list4=[], list5=[], list6=[], list7=[] }) {
  const tabs = [{ title: '国内信息' }];//, { title: '国别信息' }
  const tabs2 = [{ title: '华东' }, { title: '华中' }, { title: '华北' }, { title: '华南' }, { title: '西南' }, { title: '西北' }, { title: '东北' }];
  return (
    <React.Fragment>
      <div>
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div>
            <Tabs tabs={tabs2}
              initialPage={1}
            >
              <div>
                <ul className={styles['list']}>
                  {list1.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/huadong');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list2.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/huazhong');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list3.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/huabei');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list4.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/huanan');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list5.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/xinan');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list6.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/xibei');
                    }}>+查看更多</p>
              </div>
              <div>
                <ul className={styles['list']}>
                  {list7.map((val, index) => (
                    <li key={index} onClick={()=>{
                      router.push(`/detailsBYGN/`+[val.id]);
                    }}><i>◇</i><span>{val.title}</span></li>
                  ))}
                </ul>
                <p className={styles['more']} onClick={()=>{
                      router.push('/itemBYGN/dongbei');
                    }}>+查看更多</p>
              </div>
            </Tabs>
          </div>
          {/* <div>国别信息</div> */}
        </Tabs>
      </div>
    </React.Fragment>
  );
}

export default MsgPage;
