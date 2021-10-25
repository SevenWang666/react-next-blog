---

title:  regular-expression

date:  2021-10-08

cover：https://www.google.com/url?sa=i&url=https%3A%2F%2F699pic.com%2Ftupian%2Fai.html&psig=AOvVaw2nxAzmn44sKfBPhO3GcFIf&ust=1635211685045000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi2xq605PMCFQAAAAAdAAAAABAD

---



### 简介

在编程语言中，正则常常用来简化文本处理的逻辑。在 Linux 命令中，它也可以帮助我们轻松地查找或编辑文件的内容，甚至实现整个文件夹中所有文件的内容替换，比如 grep、egrep、sed、awk、vim 等。另外，在各种文本编辑器中，比如 Atom，Sublime Text 或 VS Code 等，在查找或替换的时候也会使用到它。总之，正则是无处不在的，已经渗透到了日常工作的方方面面。

### 流程
正则表达式解决流程

**第一步,做分解**。拿到一个问题后，我们要先思考：这个问题可以分为几个子问题？每个子问题是否独立？我们拿最常见的电子邮件地址匹配来说。从文本结构来看，它可以分为“username + @ + domain name”这三个独立的部分。怎么画呢？我们可以先画出逻辑结构图。通过这个过程来厘清思路。当然，这是软件⼯程最基本的思路，相信你做起来应该问题不大。

**第二部，分析各个子问题**。某个位置上可能有多个字符？那就用字符组。某个位置上可能有多个字符串？那就用多选结构。出现的次数不确定？那就用量词。对出现的位置有要求？那就用锚点锁定位置…… 某种程度上，这就像武术里的见招拆招，每个问题都有对应的解法，只要熟练掌握了，知道什么时候用字符组，什么时候用多选结构，什么时候用量词，什么时候用锚点，就很容易搭建起完整的概念模型。

**第三部，套皮**。你大概注意到了，到现在，我们还没有谈论正则表达式的典型标志，比如方括号、星号、花括号。要知道，这些典型标志无非只是一些符号而已，真正重要的是字符组、多选结构、量词等等这些概念。一旦你的概念模型清楚了，写出正则表达式就非常简单了，无非是查阅语法手册，把之前得到的概念模型按照对应语言或工具的约定写下来而已。许多人觉得正则表达式难懂，总是纠缠于“这里为什么要多一个星号？那里为什么是方括号而不是花括号？”，原因恰恰在于对概念模型不清楚。虽然各种语言或工具对正则表达式的支持大同小异，但细微差别仍然不可忽视。不过只要你心怀正念，洞若观火，这些差异其实并不是大问题。

**第四步,调试**。很多人都说，正则表达式的麻烦之处在于它像个黑箱子，很难调试，迄今为止仍然没有特别好用的⼯具，所以我们没法⼀步步跟进去看匹配的具体过程，只能笼统地知道“匹配了”或者“没匹配”。

### 书写注意事项

**第⼀，能用普通字符串处理的，坚决⽤普通字符串处理**。字符串处理的速度不见得差，可读性却好上很多。如果要在大段文本中定位所有的 today 或者 tomorrow，用最简单的字符串查找，直接找两遍，明显比 to(day|morrow) 看起来更清楚。

**第⼆，能写注释的正则表达式，⼀定要写注释**。正则表达式的语法非常古老，不够直观，为了便于阅读和维护，如今大部分语言里都可以通过 x 打开注释模式。有了注释，复杂正则表达式的结构也能一目了然。

**第三，能用多个简单正则表达式解决的，⼀定不要苛求用一个复杂的正则表达式**。这里最明显的例子就是输入条件的验证。比如说，常见的密码要求“必须包含数字、小写字母、大写字母、特殊符号中的至少两种，且长度在 8 到 16 之间”。



### 元字符的概念



元字符就是指那些在正则表达式中具有特殊意义的专用字符

![image-20210920205711717](https://tva1.sinaimg.cn/large/008i3skNgy1gune2cb9mej60i80o7abf02.jpg)



### 贪婪模式

**定义**：表示次数的量词，尽可能最大长度去匹配字符串

```js
let regex = /a*/g;
let str = 'aaabb';
let array = [...str.matchAll(regexp)];
console.log(array)
```

结果如下:

![image-20210728224622226](https://tva1.sinaimg.cn/large/008i3skNgy1gsx1r8lhb8j30om04k757.jpg)

使用 a* 在 aaabb 这个字符串中进行查找，这次我们看到可以找到 4 个匹配结果

![image-20210728225205119](https://tva1.sinaimg.cn/large/008i3skNgy1gsx1x70sjgj30gy086dg9.jpg)

a* 在匹配开头的 a 时，会尝试尽量匹配更多的 a，直到第一个字母 b 不满足要求为止，匹配上三个 a，后面每次匹配时都得到了空字符串。

![image-20210920211316195](https://tva1.sinaimg.cn/large/008i3skNgy1gunej0p277j60f107fgly02.jpg)





regex = “xy{1,3}z”

text = “xyyz”

在匹配时，y{1,3}会尽可能长地去匹配，当匹配完 xyy 后，由于 y 要尽可能匹配最长，即三个，但字符串中后面是个 z 就会导致匹配不上，这时候正则就会向前回溯，吐出当前字符 z，接着用正则中的 z 去匹配。

![image-20210801200251574](https://tva1.sinaimg.cn/large/008i3skNgy1gt1jicfk3xj30hh06zaaa.jpg)





### 非贪婪模式

**定义**："数量"元字符后加?,找出长度最小且满足要求的的字符串， 尽可能短地去匹配字符串

regex = “xy{1,3}?z”

text = “xyyz”

由于 y{1,3}? 代表匹配 1 到 3 个 y，尽可能少地匹配。匹配上一个 y 之后，也就是在匹配上 text 中的 xy 后，正则会使用 z 和 text 中的 xy 后面的 y 比较，发现正则 z 和 y 不匹配，这时正则就会向前回溯，重新查看 y 匹配两个的情况，匹配上正则中的 xyy，然后再用 z 去匹配 text 中的 z，匹配成功。

![image-20210801200140585](https://tva1.sinaimg.cn/large/008i3skNgy1gt1jh4ead2j30g806jjro.jpg)



### 独占模式

不管是贪婪模式，还是非贪婪模式，都需要发生回溯才能完成相应的功能，但是在一些场景下，我们不需要回溯，匹配不上返回失败就好了，独占模式类似贪婪匹配，但匹配过程不会发生回溯。具体方法在量词后面加上加号(+)

```python
re.findall('xy{1,3}+yz','xyyz')
```

不过在python中会报错(目前python和go标准库并不支持独占模式) 加号会被程序认为是重复次数的元字符

![image-20210801145354310](https://tva1.sinaimg.cn/large/008i3skNgy1gt1akx83trj30u009ijsw.jpg)

可以安装regex模块

```python

>>> import regex
>>> regex.findall(r'xy{1,3}z', 'xyyz')  # 贪婪模式
['xyyz']
>>> regex.findall(r'xy{1,3}+z', 'xyyz') # 独占模式
['xyyz']
>>> regex.findall(r'xy{1,2}+yz', 'xyyz') # 独占模式
[]
```



|            | 正则      | 文本 | 结果   |
| ---------- | --------- | ---- | ------ |
| 贪婪模式   | x{1,3}xy  | xxxy | 匹配   |
| 非贪婪模式 | x{1,3}?xy | xxxy | 匹配   |
| 独占模式   | x{1,3}+xy | xxxy | 不匹配 |

如果用x{1,3}+xy去匹配xxxy字符串，x{1,3}会把前面三个x都用掉,那文本中只剩下一个y，正则+后面的x无法匹配，导致匹配失败。



**造成回溯的条件**

* 多分枝结构
* 量词

### 分组与引用

分组用括号括起

* 可以表示一个整体
* 复用



#### 分组与编号

括号在正则中可以用于分组，被括号括起来的部分”子表达式“会被保存成一个子组。

![image-20210801220251264](https://tva1.sinaimg.cn/large/008i3skNgy1gt1mz7ebksj30h605jq2z.jpg)

如果括号嵌套的话，只需要数左括号是第几个，就可以确定是第几个子组

![image-20210801220645844](https://tva1.sinaimg.cn/large/008i3skNgy1gt1n39gosfj30g503owej.jpg)

不保存子组可以提高正则性能 在括号里面加?:

保存子组后续可以继续使用



#### 命名分组

前面我们讲了分组编号，但由于编号得数在第几个位置，后续如果发现正则有问题，改动了括号的个数，还可能导致编号发生变化，因此一些编程语言提供了命名分组（named grouping），这样和数字相比更容易辨识，不容易出错。命名分组的格式为(?P<分组名>正则)

| 编程语言   | 查找时引用方式 | 替换时引用方式 |
| ---------- | -------------- | -------------- |
| Python     | \number 如\1   | \number 如\1   |
| Go         | 官方包不支持   | 官方包不支持   |
| Java       | \number 如\1   | $number, 如$1  |
| JavaScript | $number,如$1   | $number，如$1  |
| PHP        | \number 如\1   | \number 如\1   |
| Ruby       | \number 如\1   | \number 如\1   |



```js
the little cat cat is in the hat hat hat, we like it.

查找匹配
/(\b\w+\b)(?:\s+\1)+/gm
  
替换匹配
/1

```

示例分享: <https://regex101.com/r/2RVPTJ/2> 

#### 匹配模式

### 匹配模式

概念: 正则中一些改变元字符匹配行为的方式

#### 不区分大小写模式

![image-20210824230903544](https://tva1.sinaimg.cn/large/008i3skNgy1gtsa56ct57j60ex05nq2y02.jpg)



1. 不区分大小写模式的指定方式，使用模式修饰符(?i);
2. 修饰符如果在括号内，作用范围是这个括号内的正则，而不是整个正则
3. 使用编程语言时可以使用预定义好的常量来指定匹配模式
4. 在js中需要使用/regex/i来指定匹配模式。

#### 点号通配模式

让英文的点可以匹配上包括换行的任何字符

![image-20210824234533681](https://tva1.sinaimg.cn/large/008i3skNgy1gtsb75mjxaj60ra04p0sy02.jpg)

**在js中不支持这种语法，可以用[\s\S]+代替**

![image-20210824234748287](https://tva1.sinaimg.cn/large/008i3skNgy1gtsb9hlpfrj60r904j0sv02.jpg)

#### 多行匹配模式

概念：^匹配整个字符串的开头，$ 匹配整个字符串的结尾。多行匹配模式改变的就是 ^ 和 $ 的匹配行为

![image-20210824235301168](https://tva1.sinaimg.cn/large/008i3skNgy1gtsbewqh6wj60r70443yk02.jpg)

多行模式的作用在于，使 ^ 和 $ 能匹配上每行的开头或结尾，我们可以使用模式修饰符号 (?m) 来指定这个模式。

![image-20210824235354546](https://tva1.sinaimg.cn/large/008i3skNgy1gtsbfuf0qhj60r903vq3202.jpg)

#### 注释模式

在实际工作中，正则可能会很复杂，这就导致编写、阅读和维护正则都会很困难。我们在写代码的时候，通常会在一些关键的地方加上注释，让代码更易于理解。很多语言也支持在正则中添加注释，让正则更容易阅读和维护，这就是正则的注释模式。正则中注释模式是使用 (?#comment) 来表示

![image-20210825000315718](https://tva1.sinaimg.cn/large/008i3skNgy1gtsbpks8apj60qy06n3ys02.jpg)

```js
var template = 'cat cat CAt cAt caT CAT Dog Dog ABC ABC'
var regex = /((?i)(\w+))(?#word) \1(?#word repeat again)/gm
```



### 断言

什么是断言呢？简单来说，断言是指对匹配到的文本位置有要求。比如\d{11} 能匹配上 11 位数字，但这 11 位数字可能是 18 位身份证号中的一部分。再比如，去查找一个单词，我们要查找 tom，但其它的单词，比如 tomorrow 中也包含了 tom。也就是说，在有些情况下，我们对要匹配的文本的位置也有一定的要求。为了解决这个问题，正则中提供了一些结构，只用于匹配位置，而不是文本内容本身，这种结构就是断言。常见的断言有三种：单词边界、行的开始或结束以及环视

#### 单词边界

```js
var template = 'tom asked me if I would go fishing with him tomorrow.'
//匹配tom这个单词
var regex = /\btom\b/
```

单词的组成一般可以用元字符 \w+ 来表示，\w 包括了大小写字母、下划线和数字（即 [A-Za-z0-9_]）。那如果我们能找出单词的边界，也就是当出现了\w 表示的范围以外的字符，比如引号、空格、标点、换行等这些符号，我们就可以在正则中使用\b 来表示单词的边界。 \b 中的 b 可以理解为是边界（Boundary）这个单词的首字母。



#### 行的开始/结束

如果我们要求匹配的内容要出现在一行文本开头或结尾，就可以使用 ^ 和 $ 来进行位置界定

* \A 匹配整个字符串的开始，可以匹配任意行结尾，不支持多行模式
* \z仅匹配整个字符串的结束，不支持多行模式



应用: 

**日志起始行的判断** 

最常见的例子就是日志收集，我们在收集日志的时候，通常可以指定日志行的开始规则，比如以时间开头，那些不是以时间开头的可能就是打印的堆栈信息，我们就通过日期时间开头来判断哪一行是日志的第一行，在日期时间后面的日志都属于同一条日志。除非我们看见下一个日期时间的出现，才是下一条日志的开始

 **输入数据校验**

在 Web 服务中，我们常常需要对输入的内容进行校验，比如要求输入 6 位数字，我们可以使用 \d{6} 来校验。但你需要注意到，如果用户输入的是 6 位以上的数字呢？在这种情况下，如果不去要求用户录入的 6 位数字必须是行的开头或结尾，就算验证通过了，结果也可能不对。比如下面的示例，在不加行开始和结束符号时，用户输入了 7 位数字，也是能校验通过的：

```js
var template = '123456';
var regex = /^\d{6}$/;
console.log(template.match(regex));
```



#### 环视

环视就是要求匹配部分的前面或后面要满足（或不满足）某种规则，有些地方也称环视为零宽断言

| 正则   | 名称                            | 含义      | 示例                                    |
| ------ | ------------------------------- | --------- | --------------------------------------- |
| (?<=Y) | 肯定逆序环视postive-lookbehind  | 左边是Y   | (?<=\d)th左边是数字的th，能匹配1th      |
| (?<!Y) | 否定逆序环视negative-lookbehind | 左边不是Y | (?<!\d)th左边不是数字的th，能匹配health |
| (?=Y)  | 肯定顺序环视postive-lookahead   | 右边是Y   | Six(?=\d)右边是数字的Six,能匹配Six6     |
| (?!Y)  | 否定顺序环视negative-lookahead  | 右边不是Y | hi(?!\d) 右边不是数字的hi，能匹配high   |



### 转义

​	**维基百科:** 在计算机科学与远程通信中，当转义字符放在字符序列中，它将对它后续的几个字符进行替代并解释。通常，判定某字符是否为转义字符由上下文确定。转义字符即标志着转义序列开始的那个字符。



![image-20210922213332770](https://tva1.sinaimg.cn/large/008i3skNgy1gupqct6pe9j612x040aam02.jpg)



转义序列通常有两种功能

1. 功能是编码无法用字母表直接表示的特殊数据
2. 用于表示无法直接键盘录入的字符(如回车符)



下面是一些常见的转义字符以及它们的含义

| 转义字符 | 意义                               | ASCII码值(十进制) |
| -------- | ---------------------------------- | ----------------- |
| \n       | 换行(LF)，将当前位置移到下一行开头 | 010               |
| \r       | 回车(CR)，将当前位置移到本行开头   | 013               |
| \t       | 水平制表(HT) (跳到下一个TAB位置)   | 009               |
| \v       | 垂直制表(VT)                       | 011               |
| \\\      | 代表一个反斜线字符\                | 092               |
| \\'      | 代表一个单引号(撇号)字符           | 039               |
| \\"      | 代表一个双引号字符                 | 034               |

#### 字符串转义

字符串转义：输入字符串到字符串文本的过程

#### 正则转义

正则文字到正则表达式的过程



![image-20210827001634487](https://tva1.sinaimg.cn/large/008i3skNgy1gtunc1jkkrj6130096glv02.jpg)

如上图所示，\\\\\\\从输入字符串到正则表达式，其实有两步转换过程，分别是字符串转义和正则转义,四个反斜杠\\\\\\\,经过第一步字符串转义，它代表的含义是两个反斜杠\;这两个反斜杠再经过第二步正则转义，它就可以代表单个反斜杠\了。



```shell
const str = '\\n\n\\'
const sources = ['\n', '\\n', '\\\n', '\\\\n']
const regs = []

sources.forEach(s => regs.push(new RegExp(s, 'g')))
regs.forEach(reg => {
  console.log('[current reg] ', reg)
  let once_match = reg.exec(str)
  console.log('[result]', once_match)
})
```

在js中的执行结果

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gtuna2hkc5j60eo03uaak02.jpg" alt="image-20210827001438104"  />

1. '\n'    字符串转义\n(换行符) ,匹配'\\\n\\n\\\\'到一个换行符
2. '\\\\n'   字符串转义'\\n'(\\和n) , 正则转义\n(换行符) ,匹配'\\\n\\n\\\\'到一个换行符
3. '\\\\\\n'  字符串转义'\\\' \n(\\和换行符), 正则转义\n(换行符),匹配'\\\n\\n\\\\'到一个换行符
4. '\\\\\\\n' 字符串转义'\\\\n'，正则转义'\\n'(字符\和n), 匹配'\\\n\\n\\\\'到一个换行符



**使用编程语言中的函数消除元字符特殊含义**

* Python re.escape(text)
* Go regexp.QuoteMeta(text)
* Pattern.quote(text)
* PHP greg_quote(text)

js 将正则文本和正则表达式转换为其他编码,虽能匹配但是是其他编码

```js
const reg1 = new RegExp(encodeURIComponent('\\'),'g')
const template1 = encodeURIComponent('abb\\bb\\aa')
console.log([...template1.matchAll(reg1)])
```

![image-20210922224736203](https://tva1.sinaimg.cn/large/008i3skNgy1gupshsn6q6j60x4040mxp02.jpg)



### 正则有哪些常见的流派及其特性

#### POSIX流派

定义了正则表达式的两种标准

* **BRE标准**(Basic Regular Expression) 基本正则表达式
* **ERE标准**(Extended Regular Expression 扩展正则表达式)



早期 BRE 与 ERE 标准的区别主要在于，BRE 标准不支持量词问号和加号，也不支持多选分支结构管道符。BRE 标准在使用花括号，圆括号时要转义才能表示特殊含义。BRE 标准用起来这么不爽，于是有了 ERE 标准，在使用花括号，圆括号时不需要转义了，还支持了问号、加号 和 多选分支。我们现在使用的 Linux 发行版，大多都集成了 GNU 套件。GNU 在实现 POSIX 标准时，做了一定的扩展，主要有以下三点扩展。GNU BRE 支持了 +、?，但转义了才表示特殊含义，即需要用\+、\?表示。GNU BRE 支持管道符多选分支结构，同样需要转义，即用 \|表示。GNU ERE 也支持使用反引用，和 BRE 一样，使用 \1、\2…\9 表示。BRE 标准和 ERE 标准的详细区别，我给了你一个参考图，你可以看一下，浅黄色背景是 BRE 和 ERE 不同的地方，三处天蓝色字体是 GNU 扩展。



![image-20210922225647356](https://tva1.sinaimg.cn/large/008i3skNgy1gupsrccstoj60gs094dgc02.jpg)

**POSIX字符组**

POSIX 流派还有一个特殊的地方，就是有自己的字符组，叫 POSIX 字符组。这个类似于我们之前学习的 \d 表示数字，\s 表示空白符等，POSIX 中也定义了一系列的字符组。具体的清单和解释如下所示：

![image-20210922225731447](https://tva1.sinaimg.cn/large/008i3skNgy1gupss3v7pdj60g30d9aav02.jpg)



#### PCRE流派

除了 POSIX 标准外，还有一个 Perl 分支，也就是我们现在熟知的 PCRE。随着 Perl 语言的发展，Perl 语言中的正则表达式功能越来越强悍，为了把 Perl 语言中正则的功能移植到其他语言中，PCRE 就诞生了。目前大部分常用编程语言都是源于 PCRE 标准，这个流派显著特征是有\d、\w、\s 这类字符组简记方式。



**PCRE流派的兼容问题**

虽然 PCRE 流派是与 Perl 正则表达式相兼容的流派，但这种兼容在各种语言和工具中还存在程度上的差别，这包括了直接兼容与间接兼容两种情况。而且，即便是直接兼容，也并非完全兼容，还是存在部分不兼容的情况。原因也很简单，Perl 语言中的正则表达式在不断改进和升级之中，其他语言和工具不可能完全做到实时跟进与更新。



* 直接兼容, PCRE 流派中与 Perl 正则表达式直接兼容的语言或工具。比如 Perl、PHP preg、PCRE 库等，一般称之为 Perl 系。
* 间接兼容，比如 Java 系（包括 Java、Groovy、Scala 等）、Python 系（包括 Python2 和 Python3）、JavaScript 系（包括原生 JavaScript 和扩展库 XRegExp）、.Net 系（包括 C#、VB.Net 等）等。



**在Linux中使用正则**

在遵循 POSIX 规范的 UNIX/LINUX 系统上，按照 BRE 标准 实现的有 grep、sed 和 vi/vim 等，而按照 ERE 标准 实现的有 egrep、awk 等。



**PCRE 流派与 POSIX 流派的对比**

![image-20210922230646487](https://tva1.sinaimg.cn/large/008i3skNgy1gupt1qh20kj60j50b9gm502.jpg)

```shell

使用 ERE 标准
grep -E '[[:digit:]]+' access.log

使用 PCRE 标准
grep -P '\d+' access.log

```









### 正则处理Unicode

​	

#### Unicode基础知识

Unicode（中文：万国码、国际码、统一码、单一码）是计算机科学领域里的一项业界标准。它对世界上大部分的文字进行了整理、编码。Unicode 使计算机呈现和处理文字变得简单。



现在的 Unicode 字符分为 17 组编排，每组为一个平面（Plane），而每个平面拥有 65536（即 2 的 16 次方）个码值（Code Point）。然而，目前 Unicode 只用了少数平面，我们用到的绝大多数字符都属于第 0 号平面，即 BMP 平面。除了 BMP 平面之外，其它的平面都被称为补充平面。



![image-20210922232653128](https://tva1.sinaimg.cn/large/008i3skNgy1guptmnvi8yj61c30j0gqa02.jpg)

Unicode 相当于规定了字符对应的码值，这个码值得编码成字节的形式去传输和存储。最常见的编码方式是 UTF-8，另外还有 UTF-16，UTF-32 等。UTF-8 之所以能够流行起来，是因为其编码比较巧妙，采用的是变长的方法。也就是一个 Unicode 字符，在使用 UTF-8 编码表示时占用 1 到 4 个字节不等。最重要的是 Unicode 兼容 ASCII 编码，在表示纯英文时，并不会占用更多存储空间。而汉字呢，在 UTF-8 中，通常是用三个字节来表示。





### 如何理解正则的匹配原理以及优化原则

#### 有穷状态自动机

正则之所以能够处理复杂文本，就是因为采用了有穷状态自动机（finite automaton）。那什么是有穷自动机呢？有穷状态是指一个系统具有有穷个状态，不同的状态代表不同的意义。自动机是指系统可以根据相应的条件，在不同的状态下进行转移。从一个初始状态，根据对应的操作（比如录入的字符集）执行状态转移，最终达到终止状态（可能有一到多个终止状态）。有穷自动机的具体实现称为正则引擎，主要有 DFA 和 NFA 两种，其中 NFA 又分为传统的 NFA 和 POSIX NFA。



![image-20210921224812714](https://tva1.sinaimg.cn/large/008i3skNly1guomw61kmcj60g405nmxd02.jpg)



* 确定型与非确定型，在没有编写正则表达式之前，就可以直接确定字符匹配顺序的就是确定型，不能确定字符匹配顺序的则为非确定型
* 有穷: 有穷即表示有限的意思，有限次数能得到结果
* 自动机: 自动机便是自动完成，在我们设置好匹配规则后由引擎自动完成。



 **NFA**

![image-20210921225047806](https://tva1.sinaimg.cn/large/008i3skNly1guomysvwpfj60h2049dfu02.jpg)

在状态 s3 时，不需要输入任何字符，状态也有可能转换成 s1。你可以理解成 a(bb)+a 在匹配了字符 abb 之后，到底在 s3 状态，还是在 s1 状态，这是不确定的。这种状态机就是非确定性有穷状态自动机（Non-deterministic finite automaton 简称 NFA）。



**DFA**

![image-20210921225406729](https://tva1.sinaimg.cn/large/008i3skNgy1guon29bwt6j60i505maa302.jpg)

NFA 和 DFA 是可以相互转化的，当我们把上面的状态表示成下面这样，就是一台 DFA 状态机了，因为在 s0-s4 这几个状态，每个状态都需要特定的输入，才能发生状态变化。



**POSIX NFA**

![image-20210923233802835](https://tva1.sinaimg.cn/large/008i3skNgy1guqzkmbsbrj60fj08owem02.jpg)

如上图所示使用，使用正则 pos|posix 在文本 posix 中进行匹配，传统的 NFA 从文本中找到的是 pos，而不是 posix，而 POSIX NFA 找到的是 posix。POSIX NFA 引擎与传统的 NFA 引擎类似，但不同之处在于，POSIX NFA 在找到可能的最长匹配之前会继续回溯，也就是说它会尽可能找最长的，如果分支一样长，以最左边的为准（“The Longest-Leftmost”）



#### **NFA工作机制**

NFA 是以正则为主导，反复测试字符串，这样字符串中同一部分，有可能被反复测试很多次



```tex

text: We study hdreact
regex: hd(vue|react|regex)
```



NFA 引擎的工作方式是，先看正则，再看文本，而且以正则为主导。正则中的第一个字符是 h，NFA 引擎在字符串中查找 h，接着匹配其后是否为 d。



```te
text: We study hdreact
                  ^

regex: hd(vue|react|regex)
          ^
```

再根据正则看文本后面的是不是v,发现不是，此时vue分支淘汰，

```tex
text: We study hdreact
                  ^

regex: hd(vue|react|regex)
          		^        
```

接着看第二个分支，发现匹配上了。整个文本匹配完毕，也就不会去看后面的regex分支了。如果正则表达式改成hd(vue|regex|react)



```tex
text: We study hdreact
                  	^
regex: hd(vue|regex|react)
						  	^
```

当正则regex中g匹配不上react中a的时候会接着用第三个分支react来匹配,并且重新从r开始



**特点**

1. 正则表达式主导: 按照表达式的一部分执行，如果不匹配换其他部分继续匹配，直到表达式匹配完成
2. 会发生回溯，字符串中同一部分可能会对比很多次
3. 支持子组和反向引用





#### **DFA工作机制**

```tex
text: We study hdreact

regex: hd(vue|react|regex)


```



DFA 会先看文本，再看正则表达式，是以文本为主导的。在具体匹配过程中，DFA 会从 We 中的 w 开始依次查找 h，定位到 h ，这个字符后面是 d。所以我们接着看正则部分是否有 d ，如果正则后面是个 d ，d后面的是r，DFA接着看正则表达式部分，此时zhushou分支被淘汰，开头是r的react regex符合要求。



```te
text: We study hdreact

regex: hd(vue|react|regex)
					^		^			^
				 淘汰 符合	符合
```

继续看后面的字符串e和正则比较，符合要求，然后看a ，淘汰regex分支，react分支符合要求。接着看act，和正则比较符合要求。匹配成功。



**特点**

1. 文本主导: 按照文本的顺序执行。
2. 记录当前有效的所有可能: 当执行(zhushou|shijian|shixi)时，同时比较zhushou shijian shixi 时需要更多的内存
3. 每个字符只检查一次: 提高了执行效率
4. 不能使用反向引用，捕获子组等功能
5. 无法回溯



兼容性

![image-20210921235951589](https://tva1.sinaimg.cn/large/008i3skNgy1guooynsuytj60hb071jrq02.jpg)

优化原则



* 提前编译好正则
* 提取出公共部分
* 尽量准确地表示范围
* 必要时才使用子组等
* 测试正则性能，使用ipython或regex101等
* 出现可能性大的放左边
* 避免不同分支重复匹配





### 正则网站or软件

1.  https://regex101.com/ 
2.  https://tool.oschina.net/regex/
3.  http://tool.chinaz.com/regex/
4.  https://www.w3cschool.cn/tools/index?name=re
5.  https://c.runoob.com/front-end/854
6.  http://tools.haokh.net/Regex
7.  Windows 上推荐：RegexBuddy
8.  Mac上推荐：Expressions
