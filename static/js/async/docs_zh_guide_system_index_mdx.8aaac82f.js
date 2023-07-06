(self.webpackChunkleet_code=self.webpackChunkleet_code||[]).push([["docs_zh_guide_system_index_mdx"],{90545:function(e,n,r){e.exports=r.p+"static/image/bu-1.c633cfca.png"},17723:function(e,n,r){e.exports=r.p+"static/image/bu-2.e787fb9c.png"},68264:function(e,n,r){e.exports=r.p+"static/image/parse.a51d4558.jpeg"},79792:function(e,n,r){e.exports=r.p+"static/image/rever-2.a7dc1e17.png"},70918:function(e,n,r){e.exports=r.p+"static/image/sum.c75d8a4c.png"},85349:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var s,i=r("20040"),c=r("5371"),l=r("79792"),d=r("90545"),h=r("17723"),a=r("70918"),x=r("68264");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",strong:"strong",img:"img",ol:"ol",li:"li",ul:"ul",hr:"hr",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"二进制",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#二进制",children:"#"}),"二进制"]}),"\n",(0,i.jsxs)(n.p,{children:["js中的二进制，主要使用",(0,i.jsx)(n.code,{children:"Number.toString(radix)"}),"，其中的",(0,i.jsx)(n.code,{children:"radix"}),"表示要转换成多的进制数，默认值为",(0,i.jsx)(n.code,{children:"10"}),"。\n有",(0,i.jsx)(n.code,{children:"ES6"}),"中通过添加",(0,i.jsx)(n.code,{children:"0b"}),"后面添加一系列二进制的数字（0或1），来表示一个二进制数。js中最高位用于表示符号：0为正，1为负"]}),"\n",(0,i.jsxs)(n.h2,{id:"原码补码反码",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#原码补码反码",children:"#"}),"原码、补码、反码"]}),"\n",(0,i.jsx)(n.p,{children:"这些知识点，我在有限的脑海里应该是在本科学习《计算机组成原理》时学到的东西。"}),"\n",(0,i.jsx)(n.p,{children:"前提：为了简化问题，二进制都是用一个字节，即8个二进制数来表示。"}),"\n",(0,i.jsxs)(n.h3,{id:"原码",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#原码",children:"#"}),"原码"]}),"\n",(0,i.jsx)(n.p,{children:"先来说一说真值，表示自然数（正数、负数、0）以 +1 和 -1用二进制表示"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"+ 00000001 # +1\n- 00000001 # -1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["8位二进制能表示的范围为",(0,i.jsx)(n.code,{children:"[-2 ^ 8, +2 ^ 8]"})]}),"\n",(0,i.jsxs)(n.p,{children:["由于计算机的二进制只能用0和1进行表示，无法表示正负。所以就有了如下的规矩：取",(0,i.jsx)(n.strong,{children:"首位"}),"为符号为",(0,i.jsx)(n.code,{children:"0"}),"表示为正；",(0,i.jsx)(n.code,{children:"1"}),"表示为负，剩下的七位表示真值的绝对值。这种方法叫 ",(0,i.jsx)(n.code,{children:"原码表示法"}),"。上面的例子 +1和-1表示如下 :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"0 0000001 # +1\n1 0000001 # -1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["思考一下，那",(0,i.jsx)(n.code,{children:"100000000"})," 表示什么？ ",(0,i.jsx)(n.code,{children:"-0"}),"。但是",(0,i.jsx)(n.code,{children:"-0"}),"这个值是没有意义的。 所以规定 ",(0,i.jsx)(n.code,{children:"10000000"})," 用来表示",(0,i.jsx)(n.code,{children:"-128"}),",这样算下来负数就比正数多了一位，所以二进制的表示范围：[-2 ^7, +2 ^ 7 - 1]"]}),"\n",(0,i.jsxs)(n.h3,{id:"反码",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#反码",children:"#"}),"反码"]}),"\n",(0,i.jsxs)(n.p,{children:["反码是另一种表示数字的方法，规定如下：",(0,i.jsx)(n.strong,{children:"符号位保持不变，正数的反码就是本身，负数的反码，其余各值取按位反"}),"。例子如下："]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"00000101"})," 反码 ",(0,i.jsx)(n.code,{children:"01111010"})]}),"\n",(0,i.jsx)(n.p,{children:"但是为什么会出现反码这个东西呢？正常的计算机只能计算加法，但是遇到负数的时候怎么办？"}),"\n",(0,i.jsx)(n.p,{children:"负数的反码变成了正值，这样就能通过反码把两个负数的运算转换为加法。从而简化问题。引用网上的例子如下（-1 + -2）："}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/rever-1.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"取负数的反码之后进行运算"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:l})}),"\n",(0,i.jsxs)(n.h2,{id:"补码",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#补码",children:"#"}),"补码"]}),"\n",(0,i.jsx)(n.p,{children:"思考一个问题，负数与负数的运算可以解决了，正数与负数的运算也可以正常运算了。但是还有一个问题：在原码中有+0， -0这两个特殊的值，可以在反码中正常运算吗？"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d})}),"\n",(0,i.jsxs)(n.p,{children:["从上面的运算结果来看，反码解决不了这个问题。于是就引出来的补码。\n先来看下补码的定义：",(0,i.jsx)(n.strong,{children:"符号位保持不变，正数的原码与补码一样，负数的补码，其余按位取反，最后末尾+1（即反码末尾+1）"}),"。让我们来看下补码后的所有数："]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:h})}),"\n",(0,i.jsx)(n.p,{children:"OK，解决了-0和+0的问题。所有运算都可以转换成为补码进行运算了.\n最后总结下补码的表示区间。"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a})}),"\n",(0,i.jsx)(n.p,{children:"总结一下："}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"原码：能够直接表示数值的大小情况，也是人最容易能理解的一类计算表示数。首位为符号位：0代码正、1代表负"}),"\n",(0,i.jsx)(n.li,{children:"反码：是一个过渡码，正数的反码就是本身，负数的反码为：符号为保持不变，其余按位取反"}),"\n",(0,i.jsx)(n.li,{children:"补码：是计算机中存储数值的形式，解决了负数加法的问题，使得符号位直接参与运算。"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["注：在一些位运算的题中要注意数范围是否有符号数，在js中可以用",(0,i.jsx)(n.code,{children:">>>0"}),"的方式，把一个数值转换为无符号为的形式。"]}),"\n",(0,i.jsxs)(n.h3,{id:"进制转换",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#进制转换",children:"#"}),"进制转换"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"十进制转换为k进制。主要通过，除以 k ，右侧为余数，最终的结果为：从下到上，高位到低位进行转换。如下图："}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:x})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"二进制转换为十进制"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"101转换为十进制：从右往左进行实现(^表示次方的意思)"}),"\n",(0,i.jsx)(n.p,{children:"1 x 2 ^ 0 = 1"}),"\n",(0,i.jsx)(n.p,{children:"0 x 2 ^ 1 = 0"}),"\n",(0,i.jsx)(n.p,{children:"1 x 2 ^ 2 = 4"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"即：4 + 1  = 5"}),"\n",(0,i.jsxs)(n.h2,{id:"js中的位运算符号",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js中的位运算符号",children:"#"}),"js中的位运算符号"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"|"})," 或"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"|"})," 逻辑或运算："]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"如果都为0，则返回0"}),"\n",(0,i.jsx)(n.li,{children:"运算中两位数其中有一个为1，则为1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"    101\n    001\n=   101\nconsole.log((0b101 | 0b001).toString(2)); # 101\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"&"})," 与"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"&"}),"运算的规律如下：如果都为1则为1，运算中有一个为0，则为0"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"    101\n    001\n=   001\n\n(0b101 & 0b011).toString(2) # 1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"^"})," 异或"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"异或，就是比较两个数是否相同，相同则为0，不同则为1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"\n    101\n    001\n=   100\n\n(0b101 ^ 0b001).toString(2) # 100\n"})}),"\n",(0,i.jsxs)(n.p,{children:["总结： ",(0,i.jsx)(n.code,{children:"^"}),"和",(0,i.jsx)(n.code,{children:"|"}),"都可以用于把一个二进制第i位数字还原到对应的位置中去"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"~"})," 非"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xb7~\xb7运算符，则会对每一位进行取反，1变为0， 0变为1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",meta:"",children:"    101\n=   010\n\n(~0b101).toString(2) # -110\n# 这里返回的结果为 -110,是因为最高为符号默认为 0，取反后为1，就变成了负数\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"位置移动类",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#位置移动类",children:"#"}),"位置移动类"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<<"})," 左移"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"1 << i"}),",表示把一个二进制数的第",(0,i.jsx)(n.code,{children:"i"}),"位值"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"t |= 1 << i"}),"表示的意思是把第i位的二进制值还到数字t的第i位中"]}),"\n",(0,i.jsx)(n.p,{children:"左移：就是每一位都向左移动一位，尾数补0，基效果相当于x2，其实计算机就是使用移位来进行乘法计算的。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:"",children:"(0b010 << 1).toString(2) // 100\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:">>"})," 右移（有符号右移）"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"右移：向右移动 n 位，右边的值被丢弃。左边空位值使用符号位的数值进行补充"}),"\n",(0,i.jsxs)(n.p,{children:["常见操作 ",(0,i.jsx)(n.code,{children:"n >> i"})," 这个操作是用于在n的二进制中取第i位的值从左到右。即 ",(0,i.jsx)(n.code,{children:"(n >> i) & 1"}),"可以判断当前为是 1还是0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:">>>"})," 逻辑右移（无符号右移）"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"该运算符将第一个操作数向右移动指定的位数。向右移动的多余位将被丢弃。零位从左侧移入。其符号位变为 0，因此其表示的结果始终为非负数。与其他按位运算符不同，零填充右移返回无符号 32 位整数。"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"技巧",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#技巧",children:"#"}),"技巧"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["js中使用",(0,i.jsx)(n.code,{children:"toString(2)"})," 把一个数转换为指定进制数"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["移除二进制数中右侧的最后一个",(0,i.jsx)(n.code,{children:"1"})," n & (n-1)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["获取最后一个",(0,i.jsx)(n.code,{children:"1"}),"也叫LowBit，有两个公式"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"x & -x"}),"\n",(0,i.jsx)(n.li,{children:"n &(n ^ (n - 1))"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["使用位运算来判断一个数字是奇数还是偶数，注意是 ",(0,i.jsx)(n.code,{children:"=="}),"并不是严格等于。"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"i & 1 == 1"})," 为奇数"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"i & 1 == 0"})," 为偶数"]}),"\n",(0,i.jsxs)(n.p,{children:["因为在二进制中奇数的最后一位肯定不是0，一个数 ",(0,i.jsx)(n.code,{children:"%2"}),"有余数才为奇数。而十进制转换为二进制的过程最后的试算正是用的%2的余数"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"参考",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参考",children:"#"}),"参考"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/computercode.html",target:"_blank",rel:"noopener noreferrer",children:"https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/computercode.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://graphics.stanford.edu/~seander/bithacks.html#OperationCounting",target:"_blank",rel:"noopener noreferrer",children:"http://graphics.stanford.edu/~seander/bithacks.html#OperationCounting"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.51cto.com/article/663685.html",target:"_blank",rel:"noopener noreferrer",children:"https://www.51cto.com/article/663685.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://xiaochen1024.com/courseware/60b4f11ab1aa91002eb53b18/6196420ac1553b002e57bf19",target:"_blank",rel:"noopener noreferrer",children:"https://xiaochen1024.com/courseware/60b4f11ab1aa91002eb53b18/6196420ac1553b002e57bf19"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.aliyun.com/article/841237",target:"_blank",rel:"noopener noreferrer",children:"https://developer.aliyun.com/article/841237"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://yanhaijing.com/javascript/2016/07/20/binary-in-js/",target:"_blank",rel:"noopener noreferrer",children:"https://yanhaijing.com/javascript/2016/07/20/binary-in-js/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://segmentfault.com/a/1190000038208382",target:"_blank",rel:"noopener noreferrer",children:"https://segmentfault.com/a/1190000038208382"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cnblogs.com/fusiwei/p/11752540.html",target:"_blank",rel:"noopener noreferrer",children:"https://www.cnblogs.com/fusiwei/p/11752540.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators",target:"_blank",rel:"noopener noreferrer",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.michealwayne.cn/2019/10/29/notes/js%E4%B8%AD%E4%BD%8D%E8%BF%90%E7%AE%97%E7%9A%84%E9%AA%9A%E6%93%8D%E4%BD%9C/",target:"_blank",rel:"noopener noreferrer",children:"js中位运算的骚操作"})}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fleet-code%2Fleet-code%2Fdocs%2Fzh%2Fguide%2Fsystem%2Findex.mdx"]={toc:[{id:"原码补码反码",text:"原码、补码、反码",depth:2},{id:"原码",text:"原码",depth:3},{id:"反码",text:"反码",depth:3},{id:"补码",text:"补码",depth:2},{id:"进制转换",text:"进制转换",depth:3},{id:"js中的位运算符号",text:"js中的位运算符号",depth:2},{id:"位置移动类",text:"位置移动类",depth:3},{id:"技巧",text:"技巧",depth:2},{id:"参考",text:"参考",depth:2}],title:"二进制",frontmatter:{}};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);