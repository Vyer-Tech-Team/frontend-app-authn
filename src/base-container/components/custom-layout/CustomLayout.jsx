import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';
import logoImg from '../../../../docs/images/logo-lavt.png'
import messages from './messages';

const CustomLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="d-flex login-page-description-wrapper">
      <div>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={logoImg} />
        </Hyperlink>
        <div className="d-flex align-items-center login-page-description">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          <h1>
            {formatMessage(messages['login.header'])}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CustomLayout;
