export const api = 'http://localhost:3002/api/v1';
export const host = 'http://localhost:3000';
export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
};
export const rateLevel = [
  {
    value: 1,
    result: '< span class="fa fa-star checked" ></span><span class="fa fa-star"></span>' +
      '<span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
    text: 'Very Bad'
  },
  {
    value: 2,
    result: '< span class="fa fa-star checked" ></span><span class="fa fa-star checked"></span>' +
      '<span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
    text: 'Bad'
  },
  {
    value: 3,
    result: '< span class="fa fa-star checked" ></span><span class="fa fa-star checked"></span>' +
      '<span class="fa fa-star checked "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
    text: 'Normal'
  },
  {
    value: 4,
    result: '< span class="fa fa-star checked" ></span><span class="fa fa-star checked"></span>' +
      '<span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    text: 'Good'
  },
  {
    value: 5,
    result: '< span class="fa fa-star checked" ></span><span class="fa fa-star checked"></span>' +
      '<span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    text: 'Very Good'
  }

]
