// export const SignUpUser = createAsyncThunk(
//     'signup',
//     async ({ name, email, role }) => {
//         try {
//             if (!name || !email || !role) {
//                 Alertify.error('User didnt filled the details');
//                 return Promise.reject('hello');
//             }
//             const res = await postApi(InitiateSignup, {
//                 name,
//                 email,
//                 role,
//             });
//             return res;
//         } catch (error) {
//             console.error('Initiate Signup:', error);
//             Alertify.error(error.message[0]);
//             return Promise.reject();
//         }
//     }
// );
