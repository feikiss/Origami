import request from 'superagent';

export function modifyDeployed(repoData) {
  let URL = `http://0.0.0.0:3000/api/githubdemomodel/${repoData.id}`;
  return new Promise(function(resolve, reject) {
    request
      .put(URL)
      .send(repoData)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          reject(err);
        } else {
          resolve(res.text);
        }
      });
  });
}
