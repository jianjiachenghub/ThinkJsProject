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
        // const list = await user.select();
        // list.where({})
        return this.success(data);
    }

    async indexAction() {
        const json = this.ctx.post();
        const user = this.model('user'); // controller 里实例化模型
        const data = await user.select();
        console.log(data)
        // data.forEach((e)=>{
        //     if(e.name === json.name && e.courseId === json.courseId){
        //         data.errno = 1;
        //         data.errmsg="该课程已购买"
        //     }
        // })
        // console.log(json);
        return this.success(data);
    }
};