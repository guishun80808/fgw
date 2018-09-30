const ImgUrlPath = 'http://www.hbydyl.gov.cn/image/';

export default {
  'GET /api/ImgUrlPath': function(req, res, next) {
    res.json(ImgUrlPath);
  },
};
