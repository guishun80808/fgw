import * as React from 'react';
import { Accordion, List } from 'antd-mobile';
import styles from './inforProject.css';
import router from 'umi/router';

function InforPage({ list1=[], list2=[], list3=[] }) {
  return (
    <React.Fragment>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}}>
          <Accordion.Panel header={<div><span className={styles['icon1']}></span><span className={styles['middle']}>走出去</span></div>}>
            <List>
              {list1.map((val, index) => {
                if(index===4){
                  return(
                    <p key={index} className={styles['more']} onClick={()=>{router.push(`/itemBYInfor/zouchuqu`);}}>+查看更多</p>
                  )
                }else{
                  return(
                    <List.Item key={index} className={styles['list']} onClick={()=>{
                      router.push(`/detailsBYInfor/`+[val.id]);
                    }}>{val.title}</List.Item>
                  )
                }
              })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header={<div><span className={styles['icon2']}></span><span className={styles['middle']}>引进来</span></div>}>
            <List>
              {list2.map((val, index) => {
                  if(index===4){
                    return(
                      <p key={index} className={styles['more']} onClick={()=>{router.push(`/itemBYInfor/yinjinlai`);}}>+查看更多</p>
                    )
                  }else{
                    return(
                      <List.Item key={index} className={styles['list']} onClick={()=>{
                        router.push(`/detailsBYInfor/`+[val.id]);
                      }}>{val.title}</List.Item>
                    )
                  }
                })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header={<div><span className={styles['icon3']}></span><span className={styles['middle']}>合作共进</span></div>}>
            <List>
              {list3.map((val, index) => {
                  if(index===4){
                    return(
                      <p key={index} className={styles['more']} onClick={()=>{router.push(`/itemBYInfor/hzgj`);}}>+查看更多</p>
                    )
                  }else{
                    return(
                      <List.Item key={index} className={styles['list']} onClick={()=>{
                        router.push(`/detailsBYInfor/`+[val.id]);
                      }}>{val.title}</List.Item>
                    )
                  }
                })}
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
    </React.Fragment>
  );
}

export default InforPage;
