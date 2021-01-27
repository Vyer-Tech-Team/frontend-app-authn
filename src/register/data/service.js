import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import querystring from 'querystring';

export async function registerRequest(registrationInformation) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  const { data } = await getAuthenticatedHttpClient()
    .post(
      `${getConfig().LMS_BASE_URL}/user_api/v2/account/registration/`,
      querystring.stringify(registrationInformation),
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    redirectUrl: data.redirect_url || `${getConfig().LMS_BASE_URL}/dashboard`,
    success: data.success || false,
  };
}

export async function getRegistrationForm() {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  const { data } = await getAuthenticatedHttpClient()
    .get(
      `${getConfig().LMS_BASE_URL}/user_api/v2/account/registration/`,
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    registrationForm: data,
  };
}

export async function getFieldsValidations(formPayload) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  const { data } = await getAuthenticatedHttpClient()
    .post(
      `${getConfig().LMS_BASE_URL}/api/user/v1/validation/registration`,
      querystring.stringify(formPayload),
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    fieldValidations: data,
  };
}