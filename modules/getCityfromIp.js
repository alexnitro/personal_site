const Promise = require('promise');
const maxmind = require('maxmind');

module.exports = function(req,res,next){	
	//if(req.path.indexOf('/weather') > -1){
		//const ip = req.clientIp;
		const getCity = new Promise((resolve, reject) => {
			maxmind.open('./GeoLite2-City.mmdb',(err, cityLookUp) => {
				try {					
					resolve(cityLookUp.get('122.111.64.217'));				
				} catch(err){
					console.log(err);
					next();
				}
			});
		});
		getCity.then((city) => {
			console.log(city.city.geoname_id);
			res.locals.geoId = city.city.geoname_id;
			next();
		});
	//}
}  
