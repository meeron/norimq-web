import 'whatwg-fetch'

class ApiSerice {  
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _fetch = (url) => fetch(`${this.baseUrl}${url}`);

  getQueues() {
    return this._fetch('/queues')
      .then(r => r.json());
  }
}

export default new ApiSerice('http://localhost:5891/api');