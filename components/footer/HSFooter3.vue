<template lang="pug">
    .footer
        .copyright
            p {{data.company}} {{data.copyrigth}}
        .contact-info
            p {{data.phone}}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
// Footer
.footer {
  background: #fece00;
  color: #fff;
  padding: 10px 20px;
  p {
    margin: 0;
    font-size: 0.5rem;
    line-height: normal;
    color: #0061b5;
    margin: 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.copyright {
  // @media (max-width: 540px) {
  //   padding-bottom: 10px;
  // }
}
</style>

