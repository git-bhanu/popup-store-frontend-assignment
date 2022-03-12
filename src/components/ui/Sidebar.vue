<template>
    <aside class="sidebar">
        <header class="sidebar__header">
            <slot name="header"></slot>
        </header>
        <div class="sidebar__body">
            <slot></slot>
        </div>
        <div class="sidebar__footer">
            <slot name="footer"></slot>
        </div>
        
    </aside>
</template>


<script>

import SidebarBody from "./SidebarBody.vue"

export default {
    components: {
        SidebarBody
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/ui/Sidebar.scss';
</style>