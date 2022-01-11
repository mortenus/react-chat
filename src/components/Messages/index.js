import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items, user }) => {
  return (
    <div ref={blockRef} className={classNames('messages', { 'messages--loading': isLoading })}>
      {isLoading ? (
        <Spin size="large" tip="Загрузка сообщений..."></Spin>
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item) => <Message {...item} isMe={user._id === item.user._id} />)
        ) : (
          <Empty description="Нет сообщений" />
        )
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
