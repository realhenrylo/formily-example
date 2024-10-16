<template>
  <div style="width: 300px; margin: 0 auto;">
  <Form :form="form">
    <!-- 这里注入form对象 -->
    <SchemaField :schema="schema" :scope="{ loadLinkOptions, form }" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
  </div>
</template>

<script>
import { createForm } from '@formily/core'
import { connect, mapProps, createSchemaField } from '@formily/vue'
import { Form, FormItem, Submit, Input, Select } from '@formily/element'
import { formSchema, loadLinkOptions } from './form-schema'
import CustomInput from './CustomInput.vue'

const CustomInputComp = connect(CustomInput, mapProps((props) => {
  return {
    ...props
  }
}))

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Select,
    Input,
    CustomInputComp
  },
})

export default {
  name: 'FormPage',
  components: { Form, SchemaField, Submit },
  data() {
    return {
      form,
      schema: formSchema,
    }
  },
  methods: {
    loadLinkOptions,
    onSubmit(value) {
      alert(JSON.stringify(value, null, 2))
    },
  },
}
</script>