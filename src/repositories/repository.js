import axios from 'axios';

const baseDomain = 'https://httpbin.org';
const baseURL = `${baseDomain}`;
const { CancelToken } = axios;
const apiClient = axios.create({
  baseURL,
});

const currentExecutingRequests = {};
let failedQueue = [];
let isRefreshing = false;

function processQueue(error, token = null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
}

function getAuth() {
  return 'Bearer tGzv3JOkF0XG5Qx2TlKWIA';
}

function refreshAccessToken() {
  return axios.get('mock.data');
}

function updateToken() {
  // update token
}

// auto canceling request with the same endpoint
// TO DO: add flag if we dont need canceling
apiClient.interceptors.request.use(
  (req) => {
    const originalRequest = req;

    if (currentExecutingRequests[req.url]) {
      const source = currentExecutingRequests[req.url];
      delete currentExecutingRequests[req.url];
      source.cancel();
    }

    const source = CancelToken.source();
    originalRequest.cancelToken = source.token;
    currentExecutingRequests[req.url] = source;

    return originalRequest;
  },
  (err) => Promise.reject(err)
);

apiClient.interceptors.response.use(
  (response) => {
    if (currentExecutingRequests[response.request.responseURL]) {
      delete currentExecutingRequests[response.request.responseURL];
    }
    return response;
  },
  (error) => {
    const { config } = error;
    const originalRequest = config;

    if (axios.isCancel(error)) {
      return new Promise(() => {});
    }

    if (currentExecutingRequests[originalRequest.url]) {
      delete currentExecutingRequests[originalRequest.url];
    }

    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 400) {
      // If response is 400
    }
    // If 401 and I'm not processing a queue
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If I'm refreshing the token I send request to a queue
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            originalRequest.headers.Authorization = getAuth();
            return apiClient(originalRequest);
          })
          .catch((err) => err);
      }
      // If header of the request has changed, it means I've refreshed the token
      if (originalRequest.headers.Authorization !== getAuth()) {
        originalRequest.headers.Authorization = getAuth();
        return Promise.resolve(apiClient(originalRequest));
      }

      originalRequest._retry = true; // mark request a retry
      isRefreshing = true; // set the refreshing var to true

      // If none of the above, refresh the token and process the queue
      return new Promise((resolve, reject) => {
        refreshAccessToken() // The method that refreshes my token
          .then(({ data }) => {
            updateToken(data); // The method that sets my token to local storage
            processQueue(null, data.token); // Resolve queued
            resolve(axios(originalRequest)); // Resolve current
          })
          .then(() => {
            isRefreshing = false;
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          });
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
