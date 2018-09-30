const list = [
  {
    id: '11',
    name: '湖北维力律师事务所',
    item: [
      {
        name: '服务范围',
        list1: [
          { name: '出口买方信贷保险' },
          { name: '出口卖方信贷保险' },
          { name: '再融资保险' },
          { name: '海外融资租赁保险' },
        ],
        list2: [
          { name: '海外投资（股权）' },
          { name: '保险海外投资（债权）保险' },
        ],
        list3: [
          { name: '融资担保' },
          { name: '非融资担保' },
        ],
        list4: [
          { name: '企业投保' },
          { name: '银行投保' },
          { name: '出口特险' },
          { name: '国内贸易信用保险' },
          { name: '进口预付款保险' },
        ],
        list5: [
          { name: '信保融资' },
          { name: '资信服务' },
          { name: '报告发布' },
          { name: '理赔服务' },
        ],
      },
      {
        name: '机构简介',
        list1: [
          { name: '2出口买方信贷保险' },
          { name: '出口卖方信贷保险' },
          { name: '再融资保险' },
          { name: '海外融资租赁保险' },
        ],
        list2: [
          { name: '2海外投资（股权）' },
          { name: '保险海外投资（债权）保险' },
        ],
        list3: [
          { name: '2融资担保' },
          { name: '非融资担保' },
        ],
        list4: [
          { name: '2企业投保' },
          { name: '银行投保' },
          { name: '出口特险' },
          { name: '国内贸易信用保险' },
          { name: '进口预付款保险' },
        ],
        list5: [
          { name: '2信保融资' },
          { name: '资信服务' },
          { name: '报告发布' },
          { name: '理赔服务' },
        ],
      },
      {
        name: '经典案例',
        list1: [
          { name: '3出口买方信贷保险' },
          { name: '出口卖方信贷保险' },
          { name: '再融资保险' },
          { name: '海外融资租赁保险' },
        ],
        list2: [
          { name: '3海外投资（股权）' },
          { name: '保险海外投资（债权）保险' },
        ],
        list3: [
          { name: '3融资担保' },
          { name: '非融资担保' },
        ],
        list4: [
          { name: '3企业投保' },
          { name: '银行投保' },
          { name: '出口特险' },
          { name: '国内贸易信用保险' },
          { name: '进口预付款保险' },
        ],
        list5: [
          { name: '3信保融资' },
          { name: '资信服务' },
          { name: '报告发布' },
          { name: '理赔服务' },
        ],
      },
      {
        name: '服务产品',
        list1: [
          { name: '4出口买方信贷保险' },
          { name: '出口卖方信贷保险' },
          { name: '再融资保险' },
          { name: '海外融资租赁保险' },
        ],
        list2: [
          { name: '4海外投资（股权）' },
          { name: '保险海外投资（债权）保险' },
        ],
        list3: [
          { name: '4融资担保' },
          { name: '非融资担保' },
        ],
        list4: [
          { name: '4企业投保' },
          { name: '银行投保' },
          { name: '出口特险' },
          { name: '国内贸易信用保险' },
          { name: '进口预付款保险' },
        ],
        list5: [
          { name: '4信保融资' },
          { name: '资信服务' },
          { name: '报告发布' },
          { name: '理赔服务' },
        ],
      },
      {
        name: '联系我们',
        list1: [
          { name: '5出口买方信贷保险' },
          { name: '出口卖方信贷保险' },
          { name: '再融资保险' },
          { name: '海外融资租赁保险' },
        ],
        list2: [
          { name: '5海外投资（股权）' },
          { name: '保险海外投资（债权）保险' },
        ],
        list3: [
          { name: '5融资担保' },
          { name: '非融资担保' },
        ],
        list4: [
          { name: '5企业投保' },
          { name: '银行投保' },
          { name: '出口特险' },
          { name: '国内贸易信用保险' },
          { name: '进口预付款保险' },
        ],
        list5: [
          { name: '5信保融资' },
          { name: '资信服务' },
          { name: '报告发布' },
          { name: '理赔服务' },
        ],
      }
    ],
  },
]

export default {
  'GET /api/details/:ids': function (req, res, next) {
    const { params: { ids } } = req;
    return res.json({
      list: list.filter(({ id }) => id === ids)
    });
  }
};
