import Mock from 'mockjs';

const list = [
  {
    id: 11,
    title: '湖北维力律师事务所',
    imgIcon: 'http://www.hbydyl.gov.cn/image/c0a667f8-9381-452d-87fa-14849b97d196',
  },
  {
    id: 12,
    title: '京师(武汉)律师事务部',
    imgIcon: 'http://www.hbydyl.gov.cn/image/c0a667f8-9381-452d-87fa-14849b97d196',
    con: '北京市京师律师事务所是一家具有24年历史的大型综合性律师事务所，肇造于1994年，总部...',
  },
  {
    id: 13,
    title: '北京盈科（武汉）律师事务所',
    imgIcon: 'http://www.hbydyl.gov.cn/image/c0a667f8-9381-452d-87fa-14849b97d196',
  },
  {
    id: 14,
    title: '北京德恒（武汉）律师事务所',
    imgIcon: 'http://www.hbydyl.gov.cn/image/c0a667f8-9381-452d-87fa-14849b97d196',
  },
  {
    id: 15,
    title: '湖北多能律师事务所',
    imgIcon: 'http://www.hbydyl.gov.cn/image/c0a667f8-9381-452d-87fa-14849b97d196',
  },
];

export default {
  'GET /api/service/:ids': function(req, res, next) {
    return res.json({
      list: list
    });
  },
};
