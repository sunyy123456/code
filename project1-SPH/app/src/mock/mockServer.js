// 注意Mock首字母大写
import Mock from 'mockjs';

// 把JSON数据格式引入进来，JSON数据格式根本没有对外暴露，但是是可以引入的
// webpack默认对外暴露的有：图片、JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据：第一个参数是请求地址，第二个参数是请求的数据
Mock.mock('/mock/banner', {code: 200, data: banner});
Mock.mock('/mock/floor', {code: 200, data: floor});