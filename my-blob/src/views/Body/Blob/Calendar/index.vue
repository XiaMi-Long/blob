<template>
  <div class="blob-calendar-box">
    <n-card>
      <ElConfigProvider :locale="locale">
        <ElCalendar :v-model="timeValue">
          <template #dateCell="{ data }">
            <span @click="handleCalendarClick(data.day)">
              {{ data.day.substr(-2) }}
            </span>
          </template>
        </ElCalendar>
      </ElConfigProvider>
    </n-card>
  </div>
</template>

<script>
import { ElCalendar, ElConfigProvider } from "element-plus";
import "element-plus/es/components/calendar/style/css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

export default {
  name: "BlobCalendarView",

  components: {
    ElCalendar,
    ElConfigProvider,
  },

  props: {
    timeValue: {
      type: Date,
      required: true,
    },
  },

  emits: ["calendar-click"],

  setup() {
    return {
      locale: zhCn,
    };
  },

  methods: {
    handleCalendarClick(time) {
      this.$emit("calendar-click", time);
    },
  },
};
</script>

<style lang="scss" scoped>
.blob-calendar-box {
  padding: 0 $view-padding 0 calc($view-padding / 2);

  margin-bottom: $blob-acticle-margin;
}

.n-card {
  overflow: auto;

  box-shadow: $card-shadow;

  color: black;
}

::v-deep(.n-card > .n-card__content:first-child) {
  padding: 0;
}

::v-deep(.el-calendar__header) {
  background-color: #1de9b6;

  color: white;

  padding: 20px;
}

::v-deep(.el-calendar__body) {
  padding: 0;
  --el-text-color-regular: #1de9b6;
  --el-calendar-selected-bg-color: #ffffff;
  --el-color-primary: #31e900;
}

::v-deep(.el-calendar-table .el-calendar-day) {
  display: flex;
  align-items: center;
  span {
    min-width: 20px;
    min-height: 20px;
    background-color: white;
    padding: 7px;
    display: inline-block;
    border-radius: 50%;

    transition: background-color 0.6s;

    &:hover {
      background-color: #1de9b6;

      color: white;
    }
  }
}

::v-deep(.is-selected) {
  span {
    background-color: #1de9b6 !important;

    color: white;
  }
}

/* 去除边框 */
::v-deep(.el-calendar-table tr:first-child td) {
  border-top: none;
}

/* 去除边框 */
::v-deep(.el-calendar-table td) {
  border-bottom: none;
  border-right: none;
}

::v-deep(.el-calendar__button-group) {
  display: none;
}

::v-deep(.el-calendar-table tr td:first-child) {
  border-left: none;
}
</style>
