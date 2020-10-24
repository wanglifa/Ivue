<template>
  <div class="ivue3-steps" :class="{'ivue3-steps-vertical': direction === 'vertical' || isPhone}" ref="stepsRef">
    <div class="ivue3-steps-list" v-for="(tag, index) in tags" :key="index" :class="[currentStatusClass(index)]">
      <div class="ivue3-steps-icon-wrapper">
        <div class="ivue3-steps-icon">
          <template v-if="current <= index">
            {{index+1}}
          </template>
          <template v-else>
            <svg>
              <use xlink:href="#icon-finish"></use>
            </svg>
          </template>
        </div>
        <div class="ivue3-steps-line-vertical" v-if="index !== tags.length - 1 && (direction === 'vertical' || isPhone)"></div>
      </div>
      <div class="ivue3-steps-content">
        <template v-if="tag.props">
          <div class="ivue3-steps-content-title-wrapper">
            <div class="ivue3-steps-content-title-wrapper-title">
              {{tag.props.title}}
            </div>
            <div class="ivue3-steps-content-title-wrapper-subTitle">
              {{tag.props.subTitle}}
            </div>
          </div>
          <div class="ivue3-steps-description">
            {{tag.props.description}}
          </div>
        </template>
        <template v-else>
          <component :is="tag"></component>
        </template>
      </div>
      <div class="ivue3-steps-line" v-if="index !== tags.length - 1"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { SetupContext, ref } from 'vue'
interface Prop {
  current: number;
  size: string;
  direction: 'horizontal' | 'vertical';
}
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'middle'
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props: Prop, context: SetupContext) {
    const tags = context.slots.default!()
    const width = document.documentElement.clientWidth
    const isPhone = ref(width < 540 ? true : false)
    const { current, size, direction } = props
    const currentStatusClass = (index: number): string => {
      return current > index ? 'ivue3-steps-list-finish' : current < index ? 'ivue3-steps-list-wait' : 'ivue3-steps-list-progress'
    }
    return {
      tags,
      current,
      size,
      currentStatusClass,
      direction,
      isPhone
    }
  }
}
</script>
<style lang="scss">
$blue: rgb(65, 118, 234);
$gray: #c6c1c1;
.ivue3-steps {
  display: flex;
  &-vertical {
    display: block;
    .ivue3-steps {
      &-line {
        display: none;
      }
      &-list {
        align-items: flex-start;
      }
      &-content-title-wrapper {
        &-title {
          line-height: 32px;
        }
        &-subTitle {
          line-height: 32px;
        }
      }
    }
  }
  &-list {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    &-finish {
      .ivue3-steps-line, .ivue3-steps-line-vertical {
        background: $blue;
      }
      .ivue3-steps-content {
        &-title-wrapper {
          &-title {
            color: rgba(0,0,0,.65);
          }
        }
      }
    }
    &-wait {
      .ivue3-steps {
        &-line, &-line-vertical {
          background: $gray;
        }
        &-content {
          &-title-wrapper {
            &-title {
              color: rgba(0,0,0,.45);
            }
          }
        }
        &-icon {
          border-color: $gray;
          color: $gray;
        }
      }
    }
    &-progress {
      .ivue3-steps {
        &-line, &-line-vertical {
          background: $gray;
        }
        &-content {
          &-title-wrapper {
            &-title {
              color: rgba(0,0,0,.85);
              font-weight: 500;
            }
          }
        }
        &-icon {
          background: $blue;
          color: #fff;
        }
      }
    }
  }
  &-icon {
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 8px;
      .ivue3-steps-line-vertical {
        width: 2px;
        height: 20px;
        margin: 4px 0;
      }
    }
    width: 32px;
    height: 32px;
    font-size: 16px;
    border: 1px solid $blue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1em;
      fill: $blue;
    }
  }
  &-content {
    &-title-wrapper {
      display: flex;
      &-title {
        font-size: 16px;
        margin-right: 6px;
      }
      &-subTitle {
        color: rgba(0,0,0,.45);
      }
    }
  }
  &-description {
    font-size: 14px;
    color: rgba(0,0,0,.45);
    position: absolute;
    display: inline-block;
  }
  &-line {
    height: 1px;
    background: $gray;
    flex: 1;
    box-sizing: border-box;
    margin: 0 6px;
  }
}
</style>