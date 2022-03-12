<template>
    <Sidebar>
        <template #header>
          <TitleIcon :icon="'bolt'" :title="'Action'" :color="'#F9B506'" />
          <div>
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="icon alt"/>
          </div>
        </template>


      <ActionList />

    </Sidebar>

</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";
import ActionList from "@/components/actions/ActionList.vue";
import TitleIcon from "@/components/ui/TitleIcon.vue";

export default {
    components: {
        Sidebar,
        ActionList,
        TitleIcon,
    }
}
</script>