// configer API RapidAPI-Key and URL
const options = {
  method: 'GET',
  url: 'https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs',
  qs: {phase: 'published'},
  headers: {
    'X-RapidAPI-Host': 'workable.p.rapidapi.com',
    'X-RapidAPI-Key': '98aa347db2msh3cafebd568e6494p110941jsn1440e397562b',
    useQueryString: true
  }
};

module.exports=options;