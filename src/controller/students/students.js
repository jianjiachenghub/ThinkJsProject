const Base = require('./../base.js');
module.exports = class extends Base {
  constructor(ctx) {
    super(ctx);
  };

  async getAction(ctx) {
    const json = this.ctx.post();
    const params = json.login;
    const data = await this.model('students').getAction(params);
    console.log(data[0])
    // const list = await user.select();
    // list.where({})
    return this.success(data[0]);
  }
  async addAction(ctx) {
    const json = this.ctx.post();
    console.log(json);
    //json.id = think.uuid('v4');
    const data = await this.model('students').addAction(json);
    // const list = await user.select();
    // list.where({})
      console.log(data)
    return this.success(data[0]);
  }
    async loginAction(ctx) {
        const json = this.ctx.post();
        console.log(json)
        //json.id = think.uuid('v4');
        const data = await this.model('students').loginAction(json);
        // const list = await user.select();
        // list.where({})
        console.log(data)
        return this.success(data);
    }
};
