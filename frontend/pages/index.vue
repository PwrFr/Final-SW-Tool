<template>
  <v-row justify="center" align="center">
    <v-img
      class="rounded-xl"
      max-height="100%"
      src="https://app.dtac.co.th/vaccine/assets/images/banner/WebBanner-desktop-1120x400-Th_2022-Apr-28.jpg"
    ></v-img>
    <v-col cols="8">
      <h1 style="font-size: 2.5rem" class="mt-7">
        ดีแทค เปิดลงทะเบียน รับการฉีดวัคซีนโควิด-19
      </h1>
      <div>
        <h2 class="mt-15 mb-8">เลือกศูนย์ฉีดวัคซีนโควิด -19</h2>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              expand-icon=""
              style="display: block"
              class="font-weight-bold pb-1"
            >
              <p class="mb-0">ศูนย์ฉีดวัคซีนกลางบางซื่อ</p>
              <br />
              <p class="mb-0">
                <v-icon> mdi-map-marker </v-icon>ศูนย์ฉีดวัคซีนกลางบางซื่อ
                โดยเข้าทาง ถ.กำแพงเพชร
              </p>
            </v-expansion-panel-header>

            <v-expansion-panel-content class="p-5">
              <v-row>
                <v-col>
                  <h2 style="color: #007ad0" class="mb-4">
                    กระตุ้นเข็มที่ 3 (12-18ปี)
                  </h2>
                  <p>
                    สำหรับคนไทยและต่างชาติ อายุตั้งแต่ 12-18 ปี
                    ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์
                    โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน เริ่มฉีด 1 - 31
                    พ.ค. 65 ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ
                    ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
                  </p>
                </v-col>
                <v-col align="end" class="ml-10">
                  <nuxt-link
                    :to="{
                      name: 'register',
                      query: { type: 'เข็มที่ 3 : อายุ 12-18 ปี' },
                    }"
                    ><v-btn class="mt-8" color="primary">
                      ลงทะเบียนฉีดวัคซีนเข็มที่ 3 (12-18ปี)
                    </v-btn>
                  </nuxt-link></v-col
                >
              </v-row>
              <hr />
            </v-expansion-panel-content>

            <v-expansion-panel-content class="p-5">
              <v-row>
                <v-col>
                  <h2 style="color: #ff5a28" class="mb-4">กระตุ้นเข็มที่ 3</h2>
                  <p>
                    สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป
                    ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์
                    โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 90 วัน เริ่มฉีด 1 - 31
                    พ.ค. 65 ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ
                    ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
                  </p>
                </v-col>
                <v-col align="end" class="ml-10">
                  <nuxt-link
                    :to="{
                      name: 'register',
                      query: { type: 'กระตุ้นเข็มที่ 3' },
                    }"
                    ><v-btn class="mt-8" color="primary">
                      ลงทะเบียนฉีดวัคซีนเข็มที่ 3
                    </v-btn>
                  </nuxt-link></v-col
                >
              </v-row>
              <hr />
            </v-expansion-panel-content>
            <v-expansion-panel-content class="p-5">
              <v-row>
                <v-col>
                  <h2 style="color: #ff648c" class="mb-4">กระตุ้นเข็มที่ 4</h2>
                  <p>
                    สำหรับคนไทยและต่างชาติ อายุตั้งแต่ 12-18 ปี
                    ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์
                    โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน เริ่มฉีด 1 - 31
                    พ.ค. 65 ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ
                    ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
                  </p>
                </v-col>
                <v-col align="end" class="ml-10">
                  <nuxt-link
                    :to="{
                      name: 'register',
                      query: { type: 'กระตุ้นเข็มที่ 4' },
                    }"
                    ><v-btn class="mt-8" color="primary">
                      ลงทะเบียนฉีดวัคซีนเข็มที่ 4
                    </v-btn></nuxt-link
                  ></v-col
                >
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="text-center my-15">
        <h2>ตรวจสอบการลงทะเบียน / QR Code</h2>
        <v-btn class="mt-8" color="primary"> ตรวจสอบ </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
