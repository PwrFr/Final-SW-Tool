<template>
  <v-row justify="center" align="center">
    <v-col class="mt-15" cols="10">
      <v-row justify="center">
        <v-img
          contain
          max-height="60"
          max-width="60"
          src="https://app.dtac.co.th/vaccine/assets/images/logo-nbtc@2x.png"
        ></v-img>
        <v-img
          class="mx-4"
          contain
          max-height="60"
          max-width="60"
          src="https://app.dtac.co.th/vaccine/assets/images/logo-moph@2x.png"
        ></v-img>
        <v-img
          contain
          max-height="60"
          max-width="60"
          src="https://app.dtac.co.th/vaccine/assets/images/logo-mot@2x.png"
        ></v-img>
      </v-row>
      <h1 style="font-size: 2.5rem; color: #18aaf8" class="mt-7 text-center">
        ลงทะเบียนรับสิทธิ์วัคซีน
      </h1>
      <h2>ศูนย์ฉีดวัคซีนกลางบางซื่อ</h2>
      <h2 v-if="type == 'เข็มที่ 3 : อายุ 12-18 ปี'" style="color: #007ad0">
        {{ type }}
      </h2>
      <h2 v-else-if="type == 'กระตุ้นเข็มที่ 3'" style="color: #ff5a28">
        {{ type }}
      </h2>
      <h2 v-else-if="type == 'กระตุ้นเข็มที่ 4'" style="color: #ff648c">
        {{ type }}
      </h2>

      <v-row class="mt-5">
        <v-col cols="12" md="4">
          <span>asasd</span
          ><v-select :items="items" label="โปรดเลือกคำนำหน้า" solo></v-select
        ></v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            solo
            label="ชื่อภาษาไทย"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            solo
            :rules="nameRules"
            label="นามสกุลภาษาไทย"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  async asyncData({ query }) {
    const type = query.type
    return { type }
  },
}
</script>

<style>
</style>