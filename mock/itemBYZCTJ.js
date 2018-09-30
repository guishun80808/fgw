import Mock from 'mockjs';

const data = [
  {
    id: '11',
    xqbt: '11天津：结合“一基地三区”建设 加强与沿线',
    xqjj:
      '在“一带一路”建设中，天津将发挥港口优势、产业优势、开放优势和教育优势这四大优势。这是天津市副市长孙文魁19日在参加建设“一带一路”分论坛时介绍的。',
    xqly: '新华网',
    xqsj: '2018-09-18',
  },
  {
    id: '12',
    xqbt: '12天津：结合“一基地三区”建设 加强与沿线',
    xqjj:
      '在“一带一路”建设中，天津将发挥港口优势、产业优势、开放优势和教育优势这四大优势。这是天津市副市长孙文魁19日在参加建设“一带一路”分论坛时介绍的。',
    xqly: '新华网',
    xqsj: '2018-09-18',
  },
];

export default {
  'GET /api/itemBYZCTJ': function({ query: { page = 0, size = 5 } }, res) {
    res.json({
      list: data,
      params: {
        page,
        size,
      },
    });
  },
};
