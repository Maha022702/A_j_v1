import {createSelector} from '@reduxjs/toolkit';

export const lang = createSelector(
  [(state) => state.auth.language],
  (language) => {
    return language;
  },
);

export const userOtpRes = createSelector(
  [(state) => state.auth.otp],
  (otp) => otp,
);

// export const userDetails = createSelector(
//   [(state) => state.auth.authLogin],
//   (authLogin) => authLogin,
// );

export const userStatus = createSelector(
  [(state) => state.auth.bureauData],
  (bureauData) => bureauData,
);
