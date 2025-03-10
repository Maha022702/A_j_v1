import axios from "axios";
import { API } from "../../constants";

export function login(data) {
  return axios.post(API.baseUrls[API.currentEnv] + API.authUrls.Login, data);
}

export function signUp(data) {
  return axios.post(API.baseUrls[API.currentEnv] + API.authUrls.SignIp, data);
}

export function getFAQ() {
  return axios.get(API.baseUrls[API.currentEnv] + API.authUrls._FAQ);
}

export function getPrivacyPolicy() {
  return axios.get(API.baseUrls[API.currentEnv] + API.authUrls._PrivacyPolicy);
}

export function getRefundPolicy() {
  return axios.get(API.baseUrls[API.currentEnv] + API.authUrls._RefundPolicy);
}

export function postContactRequest(data, authToken) {
  return axios.post(
    API.baseUrls[API.currentEnv] + API.authUrls._ContactRequest,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}

// Admin
export function getUserList(pageNo, authToken) {
  const apiUrl = `${API.baseUrls[API.currentEnv]}${
    API.authUrls.getUserList
  }?page=${pageNo}&limit=10`;

  return axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export function addFAQ(data, authToken) {
  return axios.post(API.baseUrls[API.currentEnv] + API.authUrls._FAQ, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export function updateFAQ(id, data, authToken) {
  const apiUrl = `${API.baseUrls[API.currentEnv]}${API.authUrls._FAQ}/${id}`;
  return axios.put(apiUrl, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export function deleteFAQ(id, authToken) {
  const apiUrl = `${API.baseUrls[API.currentEnv]}${API.authUrls._FAQ}/${id}`;
  return axios.delete(apiUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export function getContactRequest(authToken) {
  return axios.get(
    API.baseUrls[API.currentEnv] + API.authUrls._ContactRequest,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}

export function postPrivacyPolicy(data, authToken) {
  return axios.post(
    API.baseUrls[API.currentEnv] + API.authUrls._PrivacyPolicy,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}

export function postRefundPolicy(data, authToken) {
  return axios.post(
    API.baseUrls[API.currentEnv] + API.authUrls._RefundPolicy,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}
