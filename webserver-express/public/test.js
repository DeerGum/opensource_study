let xhr = new XMLHttpRequest();
let url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'; /*URL*/
let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'rIGDG4GJOBHSiJzAcycITR%2BpTLX0dfw7m3x96ibyz0ypQ5TwMxWEOmC7Vx2yqaXHESp08e3iM1m75pxUxNMKmw%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200710'); /**/
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200712'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        
        // alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        let xml = this.responseXML;
        let value = xml.getElementsByTagName("decideCnt");
        let date = xml.getElementsByTagName("stateDt");
        document.getElementById("print").innerHTML = "날짜 : "+date[0].childNodes[0].nodeValue+ " 확진자 : "+value[0].childNodes[0].nodeValue;
    }
};

xhr.send('');