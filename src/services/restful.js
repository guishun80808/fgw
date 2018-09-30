import request from '../utils/request';
import qs from 'qs';

/**
 * GET请求
 * 
 * @export GET
 * @param {string} url
 * @param {Object} params
 * @returns response
 */
export async function GET(url, params) {
  return request(`${url}${params ? '?' : ''}${qs.stringify(params)}`, {
    method: 'GET',
  });
};


/**
 * POST请求
 * 
 * @export POST
 * @param {string} url
 * @param {Object} params
 * @returns response
 */
export async function POST(url, params) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(params),
  });
};

/**
 * DELETE请求
 * 
 * @export DELETE
 * @param {string} url
 * @param {number|string} id
 * @returns response
 */
export async function DELETE(url, id) {
  return request(`${url}/${id}`, {
    method: 'DELETE',
  });
};


/**
 * PUT请求
 * 
 * @export PUT
 * @param {string} url
 * @param {Object} params
 * @param {number|string} id
 * @returns response
 */
export async function PUT(url, params, id) {
  // {}
  // {} + {id:..,name:..} =>  {id:..,name:..}
  // {} + {id:..,name:..} + {id:1} = > {id:1, name:..}
  return request(url, {
    method: 'PUT',
    body: JSON.stringify(Object.assign({}, params, { id: `${id}` })),
  });
};
