import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ onRemoveMessage, blockRef, isLoading, items, user }) => {
  return (
    <div className="chat__dialog-messages" style={{ height: `calc(100vh - 245px)` }}>
      <div ref={blockRef} className={classNames('messages', { 'messages--loading': isLoading })}>
        {isLoading ? (
          <Spin size="large" tip="Загрузка сообщений..."></Spin>
        ) : items && !isLoading ? (
          items.length > 0 ? (
            items.map((item) => (
              <Message
                key={item._id}
                {...item}
                isMe={user._id === item.user._id}
                onRemoveMessage={onRemoveMessage.bind(this, item._id)}
              />
            ))
          ) : (
            <Empty description="Нет сообщений" />
          )
        ) : (
          <Empty description="Откройте диалог" />
        )}
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
