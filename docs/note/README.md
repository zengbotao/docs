<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-08 20:38:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 20:43:04
-->
思路：在点击树的节点时，利用右键点击事件获取鼠标位置，并显示右键弹窗
```javascript
		//外部套一个盒子@click.native="rightMenuClose"
        <el-tree
          ref="tree"
          class="tree"
          :data="treeData"
          node-key="id"
          :props="lazyProps"
          default-expand-all="true"
          highlight-current
          :filter-node-method="filterNode"
          :expand-on-click-node="true"
          @node-contextmenu="nodeMenu"
          @node-click="nodeClick"
        >
          <span slot-scope="{ node, data }">
            <span>
              <i class="el-icon-folder-opened" v-show="data.childType === 1"></i>
              <span v-show="data.childType === 2">
                <i class="el-icon-document-checked"></i>
              </span>
              {{ node.label }}
            </span>
          </span>
        </el-tree>
        
    <div id="right-menu" class="right-menu" :style="{ left: optionCardX + 'px', top: optionCardY + 'px' }" v-show="optionCardShow">
      <span @click="CreateFolderModalShow" class="menu-btn" v-show="this.rightoptionData.childType === 1">新建文件夹</span>
      <span @click="createqueryModalShow" class="menu-btn" v-show="this.rightoptionData.childType === 1">新建Query</span>
      <span @click="renameNode" class="menu-btn">重命名</span>
      <span @click="deleteNode" class="menu-btn">删除</span>
    </div>

//方法中添加
    nodeMenu(e, data, n, t) {
      this.optionCardShow = false
      this.optionCardX = e.x // 让右键菜单出现在鼠标右键的位置
      this.optionCardY = e.y
      this.rightoptionData = data
      this.node = n // 将当前节点保存
      this.optionCardShow = true // 展示右键菜单
    },
	    rightMenuClose(event) {
      let dom = document.getElementById('right-menu')
      if (dom) {
        if (!dom.contains(event.target)) {
          //点击到了id为right-menu以外的区域，就隐藏菜单
          this.optionCardShow = false
        }
      }
    },
```