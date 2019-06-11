const Base = require('./../base.js');
module.exports = class extends Base {
    constructor(ctx) {
        super(ctx);
    };

    async addAction(ctx) {
        const json = this.ctx.post();
        json.id = think.uuid('v4');
        const user = this.model('user'); // controller 里实例化模型
        const data = await user.add(json);
        return this.success(data);
    }

    async indexAction() {
        const user = this.model('user'); // controller 里实例化模型
        const data = await user.select();
        return this.success(data);
    }
};