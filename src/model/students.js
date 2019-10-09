module.exports = class extends think.Model {
  get relation() {
    return {
      lifedata: think.Model.HAS_ONE,
      studydata: think.Model.HAS_ONE,
      playdata: think.Model.HAS_ONE,
      healthydata: think.Model.HAS_ONE
    };
  }
  async getAction(params) {
    return this.model('students').where({ number: params }).select();
  }
  async addAction(json) {
    const data = await this.model('students').add(json.students);
    const data2 = await this.model('lifedata').add(json.lifedata);
    const data3 = await this.model('studydata').add(json.studydata);
    const data4 = await this.model('playdata').add(json.playdata);
    const data5 = await this.model('healthydata').add(json.healthydata);
    return this.model('students').where({ id: data }).select();
  }

  async loginAction(params) {
    console.log(params)
    const data = await this.model('students').where({ number: params.login }).select();
    if(data.length) {
        if (data[0].password == params.password) {

            return 1;

        }else{

            return 0;
        }
    } else {
      return 0;
    }

  }
};
