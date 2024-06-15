// import styles from './signuppage.module.css';

// export const Form = () => {
//   return (
//     <form className={styles.form_register} onSubmit={handleSubmit}>
//       <h2 className={styles.form_register_title}>Регистрация</h2>
//       <label className={styles.form_label} htmlFor='name'>
//         Имя
//       </label>
//       <input
//         className={styles.form_input}
//         id='name'
//         type='text'
//         name='name'
//         value={name}
//         placeholder='Введите имя'
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p className={styles.form_input_error}>{}</p>

//       <label className={styles.form_label} htmlFor='email'>
//         E-mail
//       </label>
//       <input
//         className={styles.form_input}
//         id='email'
//         type='text'
//         name='email'
//         value={email}
//         placeholder='Введите email'
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <p className={styles.form_input_error}>{}</p>

//       <label className={styles.form_label} htmlFor='password'>
//         Пароль
//       </label>
//       <div className={styles.form_input_wrapper}>
//         <input
//           className={styles.form_input}
//           id='password'
//           type={typePassword}
//           name='password'
//           value={password}
//           placeholder='Введите пароль'
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type='button'
//           className={styles.form_input_show_psswd}
//           onClick={togglePassword}
//         >
//           <svg
//             className={styles.form_input_show_psswd_svg}
//             width='24px'
//             height='24px'
//             viewBox='0 0 24 24'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M2 2L22 22'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//             <path
//               d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//             <path
//               d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//           </svg>
//         </button>
//       </div>
//       <p className={styles.form_input_error}>{}</p>

//       <label className={styles.form_label} htmlFor='passwordConfirm'>
//         Подтвердите пароль
//       </label>
//       <div className={styles.form_input_wrapper}>
//         <input
//           className={styles.form_input}
//           id='passwordConfirm'
//           type={typePassword}
//           name='passwordConfirm'
//           value={passwordConfirm}
//           placeholder='Повторите пароль'
//           onChange={(e) => setPasswordConfirm(e.target.value)}
//         />
//         <button
//           type='button'
//           className={styles.form_input_show_psswd}
//           onClick={togglePassword}
//         >
//           <svg
//             className={styles.form_input_show_psswd_svg}
//             width='24px'
//             height='24px'
//             viewBox='0 0 24 24'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M2 2L22 22'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//             <path
//               d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//             <path
//               d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
//               stroke='#000000'
//               stroke-width='2'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//             />
//           </svg>
//         </button>
//       </div>
//       <p className={styles.form_input_error}>{}</p>
//       <button className={styles.form_input_enter}>Зарегистрироваться</button>
//     </form>
//   );
// };