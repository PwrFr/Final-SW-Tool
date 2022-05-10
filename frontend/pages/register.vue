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
      <v-form ref="form" v-model="valid">
        <h1 class="mt-15">ข้อมูลทั่วไป</h1>

        <v-row>
          <v-col cols="12" md="2">
            <span>คำนำหน้า {{ prename }}</span
            ><v-select
              :rules="nameRules"
              v-model="prename"
              :items="items"
              label="โปรดเลือกคำนำหน้า"
              solo
            ></v-select
          ></v-col>
          <v-col cols="12" md="5">
            <span>ชื่อ {{ firstname }}</span>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              solo
              label="ชื่อภาษาไทย"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="5">
            <span>นามสกุล {{ lastname }}</span>
            <v-text-field
              v-model="lastname"
              solo
              :rules="nameRules"
              label="นามสกุลภาษาไทย"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <span>บัตรประจำตัว {{ identityType }}</span
            ><v-select
              :rules="nameRules"
              v-model="identityType"
              :items="IDtype"
              label="โปรดเลือก ประเภทบัตร"
              solo
            ></v-select
          ></v-col>
          <v-col cols="12" md="5">
            <span>เลขบัตรประจำตัว {{ identity }}</span>
            <v-text-field
              v-model="identity"
              :rules="IDRules"
              solo
              label="หมายเลขบัตรของคุณ"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="5">
            <span>วัน/เดือน/ปีเกิด {{ date }}</span>

            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  solo
                  v-model="date"
                  label="วัน/เดือน/ปีเกิด"
                  readonly
                  v-bind="attrs"
                  :rules="nameRules"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <h1 class="mt-15">ที่อยู่</h1>

        <v-row>
          <v-col cols="12" md="6">
            <span>รายละเอียดที่อยู่ {{ address }}</span>
            <v-text-field
              v-model="address"
              :rules="nameRules"
              solo
              label="บ้านเลขที่ ชื่อถนน"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <span>จังหวัด {{ provice }}</span>
            <v-text-field
              v-model="provice"
              solo
              :rules="nameRules"
              label="จังหวัด"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <span>เขต / อำเภอ {{ zone }}</span>
            <v-text-field
              v-model="zone"
              :rules="nameRules"
              solo
              label="เขต / อำเภอ"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <span>แขวง / ตำบล {{ district }}</span>
            <v-text-field
              v-model="district"
              solo
              :rules="nameRules"
              label="แขวง / ตำบล"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <span>หมายเลขโทรศัพท์ของคุณ {{ phone }}</span>
            <v-text-field
              v-model="phone"
              :rules="nameRules"
              solo
              label="กรอกหมายเลขดีเทค"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <hr />
      <v-row justify="center" align="center">
        <v-checkbox
          class="text-center mt-8"
          v-model="checkbox"
          label="ฉันยอมรับเงื่อนไขและข้อกำหนดใช้งาน"
        ></v-checkbox>
      </v-row>
      <div class="text-center my-8">
        <v-btn
          :disabled="!checkbox"
          color="primary"
          class="px-10"
          @click="register()"
        >
          ถัดไป
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: ['ด.ช.', 'ด.ญ.', 'นาย', 'นาง', 'นางสาว'],
      valid: false,
      prename: '',
      firstname: '',
      lastname: '',
      IDtype: ['บัตรประจำตัวประชาชน', 'บัตรชมพู', 'หนังสือเดินทาง'],
      identityType: '',
      identity: '',
      address: '',
      provice: '',
      zone: '',
      district: '',
      phone: '',
      checkbox: false,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters',
      ],
      IDRules: [
        (v) => !!v || 'ID is required',
        (v) => v.length == 13 || 'Name must be 11 characters',
      ],
      date: '',
      menu: false,
      modal: false,
      menu2: false,
    }
  },
  async asyncData({ query }) {
    const type = query.type
    return { type }
  },
  methods: {
    async register() {
      console.log(this.type)
      const data = {
        id: Math.floor(Math.random() * (1 - 999 + 1) + 999),
        vaccine: this.type,
        pname: this.prename,
        fname: this.firstname,
        lname: this.lastname,
        type_identity: this.identityType,
        identity: this.identity,
        dob: this.date,
        address: this.address,
        province: this.provice,
        district: this.district,
        zone: this.zone,
        phone: this.phone,
      }
      if (this.$refs.form.validate()) {
        await this.$axios
          .$post('http://localhost:3000/users/create', data)
          .then((res) => console.log(res))
          this.$router.push({path: '/confirm', query: {user: data}});
      } else {
        alert('Please Fill all inputs')
      }
    },
  },
}
</script>

<style>
</style>