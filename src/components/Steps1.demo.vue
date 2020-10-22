<demo>
常规用法
</demo>
<template>
  <Steps :current="2">
    <Step title="Finished"/>
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