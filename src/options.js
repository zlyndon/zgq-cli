const inquirer = require("inquirer");
const inqurer = require("inquirer");
let optionsArr = [{
    name: "type",
    message: "创建什么类型模板(vue|react|flutter)",
    default: "vue"
},
{
    name: "tem",
    message: "选择项目类型('空模板：template|后台管理系统：adminTemplate')",
    default: "template"
}]
module.exports = ()=>{
    return inquirer.prompt(optionsArr)
}