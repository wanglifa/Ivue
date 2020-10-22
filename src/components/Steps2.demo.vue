<demo>
支持slot插槽
</demo>
<template>
  <Steps :current="1">
    <Step>
      <template v-slot:title>Finished</template>
      <template v-slot:subTitle>ccc</template>
      <template v-slot:description>
        <span>This is a description.</span>
      </template>
    </Step>
    <Step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description."/>
  </Steps>
</template>
<script lang="ts">
import Steps from '../lib/Steps.vue'
import Step from '../lib/Step.vue'
export default {
  components: {
    Steps,
    Step
  }
}
</script>