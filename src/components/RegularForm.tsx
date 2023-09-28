import { useForm, SubmitHandler } from 'react-hook-form';
import '../RegularForm.css'; 

type FormValues = {
  user: string;
  email: string;
  password: string;
};

export default function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
    <div className='page'>
      <div className="form-container">
        <h1>My Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register('user', {
                required: 'Must be filled',
                minLength: { value: 4, message: 'Required 4 letters' },
              })}
              placeholder="User name"
              type="text"
            />
            <p className="error">{errors.user?.message}</p>
          </div>
          <div className="form-group">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Email"
              type="email"
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,20}$/,
                  message: 'Invalid password',
                },
              })}
              placeholder="Password"
              type="password"
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="form-group">
            <input type="submit" className="submit-button" />
          </div>
        </form>
      </div></div>
    </>
  );
}



// import { useForm, SubmitHandler } from 'react-hook-form';

// type FormValues = {
//   user: string;
//   email: string;
//   password: string;
// };

// export default function RegularForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();
//   console.log(errors);

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <>
//     <h1>my - form</h1>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register('user', {
//           required: 'Must be filled',
//           minLength: { value: 4, message: 'Required 4 letters' },
//         })}
//         placeholder="User name"
//         type="text"
//         className={errors.user ? 'error-input' : ''}
//       />
//       <p>{errors.user?.message}</p>
//       <input
//         {...register('email', {
//           required: 'Email is required',
//           pattern: {
//             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//             message: 'Invalid email address',
//           },
//         })}
//         placeholder="Email"
//         type="email"
//       />
//       <p>{errors.email?.message}</p>
//       <input
//         {...register('password', {
//           required: 'Password is required',
//           pattern: {
//             value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,20}$/,
//             message: 'Invalid password',
//           },
//         })}
//         placeholder="Password"
//         type="password"
//       />
//       <p>{errors.password?.message}</p>
//       <input type="submit" />
//     </form></>
//   );
// }

 
// // interface formV{
// //   user:string,
// //   email:string,
// //   password:string
// // }

// // export default function RegularForm() {
// // 	const {
// // 		register,
// // 		handleSubmit,
// // 		formState: { errors },
// // 	} = useForm();
// // 	console.log(errors);

// // 	return (
// // 		<form
// // 			onSubmit={handleSubmit((data) => {
// // 				alert(data);
// // 			})}
// // 		>
// // 			<input
// // 				{...register("user", { required: 'must be filled', minLength:{value:4, message:"required 4 letters"} })}
// // 				placeholder="User name"
// // 				type="text"
// // 			/>
// //       <p>{errors.user?.message?.toString()}</p>
// // 			<input {...register("email",{
// //             required: "Email is required",
// //             pattern: {
// //               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
// //               message: "Invalid email address",
// //             },
// //           })} placeholder="Email" type="email" />
// // 			<input {...register("password",{
// //             required: "password is required",
// //             pattern: {
// //               value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,20}$/,
// //               message: "Invalid password ",
// //             },
// //           })} placeholder="Password" type="password" />
// // 			<input type="submit" />
// // 		</form>
// // 	);
// // }

// // interface FormData {
// //   username: string;
// //   email: string;
// //   password:string;
// // }

// // function RegularForm() {
// // const [formData, setFormData] = useState<FormData>({
// //   username: '',
// //   email: '',
// //   password: '',
// // });
// // function form(){
// //   const {register, handleSubmit} = useForm()

// // }

// //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     alert(JSON.stringify(formData));
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //         <h1>Change Me To React Hook Form</h1>
// //       <div>
// //         <input {...register}
// //         />
// //       </div>
// //       <div>
// //         <input
// //           type="text"
// //           id="email"
// //           name="email"
// //           placeholder='Enter Email'
// //           value={formData.email}
// //           onChange={handleChange}
// //         />
// //       </div>
// //       <div>
// //         <input
// //           type="text"
// //           id="password"
// //           name="password"
// //           placeholder='Enter Password'
// //           value={formData.password}
// //           onChange={handleChange}
// //         />
// //       </div>
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default RegularForm;
