const validator = require('../validator');
const {check} = require('express-validator/check');
const path = require('path');

module.exports = new class aboutDesc1 extends validator {
  handle() {
    return [
      check('desc')
        .not().isEmpty()
        .withMessage('متن About First Description نمی تواند خالی باشد'),
      check('photoVal')
        .custom(async (value , {req})=>{
          
          if(req.method == 'PUT' && value) {
            let fileExt = ['.png', '.jpg', '.jpeg', '.svg'];
            if (!fileExt.includes(path.extname(value))) {
              throw new Error('پسوند فایل وارد شده در About First Description از پسوند های تصاویر نمی باشد');
            }
          } else if(req.method == 'POST') {
            if(!value) throw new Error('وارد کردن تصویر الزامیست');
            if (!fileExt.includes(path.extname(value))) {
              throw new Error('پسوند فایل وارد شده از پسوندهای تصاویر نیست');
            }
          }
          
        }),   
    ]
  }
}