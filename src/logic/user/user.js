module.exports = class extends think.Logic {
    async addAction() {
        this.allowMethods = 'post';
        const rules = {
            name: {
                string: true,
                required: true,
            },
            telephone: {
                mobile: true,
                required: true
            },
            email: {
                email: true,
                required: true
            },
            enterpriseName: {
                string: true
            },
            remark: {
                string: true
            },
            payment: {
                int: true,
                required: true
            },
            invoiceCode: {
                string: true,
            },
            duty:{
                string: true,
            },
            courseId:{
                int:true,
                required: true
            },
            buyer:{
                string: true
            }
        };
        const flag = this.validate(rules);
        if (!flag) {
            return this.fail('数据格式错误', this.validateErrors);
        }
    }
};
