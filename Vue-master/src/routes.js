/**
 *
 * @authors Zoey Huang (1768771373@qq.com)
 * @date    2019-07-21 13:27:48
 * @version $Id$
 */

// 引入各个组件
import Page from './components/Page.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'

// 设置路径
export default[
	{path:"/0",component:Page},
	{path:"/1",component:Page1},
	{path:"/2",component:Page2},
	{path:"/3",component:Page3}
]
