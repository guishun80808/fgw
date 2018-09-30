import Mock from 'mockjs';

const list = [
  {
    id: '81',
    xqbt: '101天津：结合“一基地三区”建设 加强与沿线...',
    xqly: '新华网',
    xqnr:
      '<p style="text-align: center;"><img src="http://www.hbydyl.gov.cn/image/UEditor/201809190837193919.jpg" title="1123449843_15372769616741n.jpg" alt="1123449843_15372769616741n.jpg"/></p><p style="text-align: center;"><strong>9月18日，国家主席习近平在北京人民大会堂会见来华出席夏季达沃斯论坛的拉脱维亚总统韦约尼斯。（图片来源：新华社 记者 黄敬文 摄）</strong></p><p style="text-indent: 2em;">新华社北京9月18日电（记者李忠发）国家主席习近平18日在人民大会堂会见来华出席夏季达沃斯论坛的拉脱维亚总统韦约尼斯。</p><p style="text-indent: 2em;">习近平指出，当前中拉关系发展势头良好。拉脱维亚在波罗的海国家中率先同中方签署共建“一带一路”合作文件。中方愿同拉方一道，在相互尊重、平等相待基础上，继续深化政治互信，拓展经贸合作，密切人文交流，更好造福两国人民。双方要推动两国发展战略对接，加强在交通物流、基础设施建设等方面合作，促进亚欧互联互通深入发展。</p><p style="text-indent: 2em;">习近平指出，中欧作为世界两大稳定力量和两大主要经济体，应该加强战略沟通，保持相互开放，以中欧合作来维护多边主义，共建开放型世界经济，促进世界和平、稳定、发展。这是中欧关系大局，也是中欧共同责任。中国和中东欧合作是中欧关系重要组成部分和有益补充，也是“一带一路”倡议融入欧洲经济圈的重要承接带。中国愿同拉脱维亚加强在中国－欧盟和中东欧和中国合作框架内合作。</p><p style="text-indent: 2em;">韦约尼斯表示，拉中双方保持着良好的政治互信和密切交流，合作潜力巨大。拉脱维亚高度评价“一带一路”重要倡议，认为中东欧和中国合作机制对拉脱维亚非常重要，主张将两者相互对接，加强在经贸、投资、交通、物流、旅游等领域合作，密切人文交流。拉方也愿致力于推动欧中关系发展。<span style="text-indent: 2em;">　</span></p><p style="text-indent: 2em;"><span style="text-indent: 2em;">会见后，两国元首共同见证了双边合作文件的签署。</span></p><p style="text-indent: 2em;">杨洁篪、王毅、何立峰等参加会见。</p><p style="text-indent: 2em;">（原标题：习近平会见拉脱维亚总统韦约尼斯）<br/></p>',
    xqsj: '2018-09-18',
  }
];

export default {
  'GET /api/detailsBYZCTJ/:ids': function(req, res, next) {
    const {
      params: { ids },
    } = req;
    return res.json({
      list: list.filter(({ id }) => id === ids),
    });
  },
};
