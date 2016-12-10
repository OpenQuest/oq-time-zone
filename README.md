# oq-time-zone

> Pretty time zone: `+2` or `-9:30`.优化时区

## INSTALL
```sh
$ npm install --save oq-time-zone
```
## USAGE
```js
var timeZone = require('oq-time-zone');

// current time zone (in Norway)
// 挪威非夏令时时区（当前时间为12月，为非夏令时，不受影响）
timeZone();
//=> '+1'

// time zone in May (in Norway)
// 挪威五月份时区，受夏令时影响，时区会发生变化
timeZone(new Date(2016, 5, 1));
//=> '+2'

// current time zone (in French Polynesia)
// 法属波利尼西亚的时区，不是整时，还有很多地区的时区也不是整时
timeZone();
//=> '-9:30'
```

## API

### timeZone([date])

#### date 可选参数，Date对象

Type: `Date`
Default: `new Date()`

Custom date.自定义Date对象，一般在时区会随着时间有变动的地区有用

#### 返回值（字符串）
+ 本地时间领先于UTC时间，返回”+“
+ 本地时间落后于UTC时间，返回"_"
+ 零区时区为‘0’
+ 有些地区因夏令时、地理、历史原因，时区不是整数，返回"-9:30"、“+4:30”等形式

> 想了解更多时区问题，参加[convertworld](http://www.convertworld.com/zh-hans/time-zone/)

## License

MIT

## AUTHORS
> This project belongs to [OpenQuest](https://github.com/OpenQuest)---A open organization concentrates on reading excellent codes from npm.org and github.com and commenting them so that everyone can understand easily.
> You can check the [index_comment.js](./index_comment.js) to get the source comments.
> For more information, linking to [https://github.com/OpenQuest](https://github.com/OpenQuest).