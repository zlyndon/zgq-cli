#! /usr/bin/env node

const cmd = require("commander");
const chalk = reqire("chalk");
const downGit = require('./src/downLoad')

cmd.command('init').description('初始化模板').action(async (args) => {
    typeof args !== 'string' && (console.log(chalk.red('缺少必填参数')), process.exit(1))
    console.log(chalk.yellow('zgq脚手架初始化模板 \n'))
})

cmd.parse(process.argv)

