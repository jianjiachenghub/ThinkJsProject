module.exports = class extends think.Logic {
  async getAction() {
    this.allowMethods = 'post';
    const rules = {
    };
    const flag = this.validate(rules);
/*    if (!flag) {
      return this.fail('数据格式错误', this.validateErrors);
    }*/
  };
    async addAction() {
        this.allowMethods = 'post';
        const rules = {
        };
        const flag = this.validate(rules);
        /*    if (!flag) {
              return this.fail('数据格式错误', this.validateErrors);
            }*/
    };
    async loginAction() {
        this.allowMethods = 'post';
        const rules = {
        };
        const flag = this.validate(rules);
        /*    if (!flag) {
              return this.fail('数据格式错误', this.validateErrors);
            }*/
    };
  async indexAction() {

  }
};
