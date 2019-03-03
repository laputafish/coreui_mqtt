<template>
  <div class="animated fadeIn">
    <div class="sub" v-html="buff">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'mqtt',
    mounted () {
      this.$mqtt.subscribe('topic')
    },
    data () {
      return {
        buff: 'Sub1:<br>'
      }
    },
    mqtt: {
      'topic' (data) {
        this.buff = this.buff + data + '<br>'
      }
    }
  }
</script>
