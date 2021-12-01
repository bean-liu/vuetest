<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['0', '1']" :default-active="$route.path">
        <el-submenu
          v-for="(item, index) in $router.options.routes"
          :index="index + ''"
          v-bind:key="item.id"
        >
          <template #title
            ><i class="el-icon-setting"></i>{{ item.name }}</template
          >
          <template v-for="(item2) in item.children">
            <el-menu-item
                :index="item2.path"
                v-bind:key="item2.id"
                v-show="item2.show"
                >{{ item2.name }}
            </el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped>
</style>