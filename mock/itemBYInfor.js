import Mock from 'mockjs';

const data = [
  {
    id: '101',
    xqbt: "11天津：结合“一基地三区”建设 加强与沿线",
    xqjj: '在“一带一路”建设中，天津将发挥港口优势、产业优势、开放优势和教育优势这四大优势。这是天津市副市长孙文魁19日在参加建设“一带一路”分论坛时介绍的。',
    xqly: "新华网",
    xqsj: "2018-09-18",
    mark: "zouchuqu",
  },
  {
    id: '102',
    xqbt: "11天津：结合“一基地三区”建设 加强与沿线",
    xqjj: '在“一带一路”建设中，天津将发挥港口优势、产业优势、开放优势和教育优势这四大优势。这是天津市副市长孙文魁19日在参加建设“一带一路”分论坛时介绍的。',
    xqly: "新华网",
    xqsj: "2018-09-18",
    mark: "yinjinlai",
  },
  {
    id: '103',
    xqbt: "11天津：结合“一基地三区”建设 加强与沿线",
    xqjj: '在“一带一路”建设中，天津将发挥港口优势、产业优势、开放优势和教育优势这四大优势。这是天津市副市长孙文魁19日在参加建设“一带一路”分论坛时介绍的。',
    xqly: "新华网",
    xqsj: "2018-09-18",
    mark: "hzgj",
  },
]

export default {
  'GET /api/itemBYInfor': function ({ query: { page = 0, size = 5, mark } }, res) {
    res.json({
      list: data.filter(item => {
        if (mark) {
          return item['mark'] === mark;
        }
        return true;
      }),
      params: {
        page,
        size,
      },
    });
  }
};
