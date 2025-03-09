<script setup lang="ts">
type Props = {
  id?: string;
  inputClass?: string;
  containerClass?: string;
  label?: string;
  rightComponent?: Component;
  rightComponentProps?: Record<string, any>;
  leftComponent?: Component;
  leftComponentProps?: Record<string, any>;
  placeholder?: string;
};

const { id, inputClass, containerClass, label } = defineProps<Props>();

const innerId = useId();

const componentId = id || innerId;
</script>

<template>
  <div :class="containerClass">
    <label v-if="label" :for="componentId">{{ label }}</label>
    <div
      class="flex items-center gap-2 rounded-[6px] border border-gray-300 px-4 py-3"
    >
      <component
        :is="rightComponent"
        v-if="rightComponent"
        v-bind="rightComponentProps"
      />
      <input
        :id="componentId"
        :class="cn('h-full w-full flex-1 text-[14px] outline-none', inputClass)"
        :placeholder="placeholder"
      />
      <component
        :is="leftComponent"
        v-if="leftComponent"
        v-bind="leftComponentProps"
      />
    </div>
  </div>
</template>
