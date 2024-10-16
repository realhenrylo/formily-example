const linkOptionsGroup = [
  [
    {
      label: '组1 - 选项1',
      value: 1,
    },
    {
      label: '组1 - 选项2',
      value: 2,
    },
  ],
  [
    {
      label: '组2 - 选项1',
      value: 3,
    },
    {
      label: '组2 - 选项2',
      value: 4,
    },
  ]
]

export const loadLinkOptions = (field) => {
  const group = field.query('group').get('value')
  const linkOptions = linkOptionsGroup[group]
  field.dataSource = linkOptions
}

export const formSchema = {
  type: 'object',
  properties: {
    group: {
      name: 'group',
      type: 'string',
      title: '联动选项组',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum:[
        {
          label: '选项1',
          value: 0,
        },
        {
          label: '选项2',
          value: 1,
        },
      ]
    },
    // 根据group来联动显隐, 使用被动联动
    passiveVisibleInput: {
      name: 'passiveVisibleInput',
      type: 'string',
      title: '被动联动显隐',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['group'],
        fulfill: {
          schema: {
            'x-visible': '{{$deps[0] === 1}}'
          }
        }
      }
    },
    // 根据group来联动选项, 使用自定义方法
    link: {
      name: 'link',
      type: 'string',
      title: '自定义方法联动选项',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-reactions': ['{{loadLinkOptions}}']
    },
    customComponent: {
      name: 'customComponent',
      type: 'string',
      title: '自定义组件',
      'x-decorator': 'FormItem',
      'x-component': 'CustomInputComp',
      'x-component-props': {
        suffix: 'custom',
        // 在这里用form来设置
        onChange: '{{(value) => form.setValues({customComponent: value})}}'
      }
    }
  }
}
