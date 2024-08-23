
          window._AMapSecurityConfig = {
              securityJsCode: "d61436f65a5e0f7a349cb1c51c40204b",
          };
  
          AMapLoader.load({
              key: "74cf9168248e953f06c963edf447be1b",
              version: "2.0", 
              plugins: ['AMap.CitySearch','AMap.Weather'] 
          }).then(() => {
            /*获取城市*/
              AMap.plugin('AMap.CitySearch', function () {
                  var citySearch = new AMap.CitySearch();
                  citySearch.getLocalCity(function (status, result) {
                      if (status === 'complete' && result.info === 'OK') {
                          document.getElementById("location").innerText = `${result.city}`;
                      } else {
                          document.getElementById("location").innerText = '无法检测';
                      }
                  });
              });
            /*获取天气*/
              AMap.plugin("AMap.Weather", function () {
                var weather = new AMap.Weather();
                weather.getLive("杭州市", function (err, data) {
                  console.log(err, data);
                document.getElementById("weather").innerText = `天气:${data.weather}`;
                document.getElementById("temperature").innerText = `温度:${data.temperature}℃`;
                });
              });
          }).catch(e => {
              console.error(e);
          });
