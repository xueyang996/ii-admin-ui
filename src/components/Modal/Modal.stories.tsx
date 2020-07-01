import React, { useState } from 'react';
import { Button } from 'antd';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // 记录组件行为

import Modal from './Modal';

const TestModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ width: '400px' }}>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        打开模态框
      </Button>

      <Modal
        title="模态框"
        cancelText="取消"
        okText="立即添加"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        模态框内容
      </Modal>
    </div>
  );
};

storiesOf('模态框', module)
  // 如果要自动显示组件的注释，需将当前 Story 的名称改成和组件名称一样
  .add('Modal', TestModal);
