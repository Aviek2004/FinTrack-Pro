import { useState } from "react";

function Login({setToggle,setUser}) {

    const [form,setForm]=useState({

        email:"",
        password:""

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }

    function handleSubmit(e) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
  (u) =>
    u.email.toLowerCase() === form.email.toLowerCase() &&
    u.password === form.password
);

  if (!user) {
    alert("Invalid Email or Password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(user));

  setUser(user);

  alert("Login Successful!");
}

    return (

<div className="flex min-h-screen items-center justify-center">

<div className="w-96 rounded-xl bg-white p-8 shadow-lg">

<h1 className="mb-6 text-3xl font-bold">

Login

</h1>

<form
onSubmit={handleSubmit}
className="space-y-4">

<input

className="w-full rounded border p-3"

type="email"

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email"

/>

<input

className="w-full rounded border p-3"

type="password"

name="password"

value={form.password}

onChange={handleChange}

placeholder="Password"

/>

<button

className="w-full rounded bg-black py-3 text-white">

Login

</button>

</form>

<p className="mt-5">

Don't have an account?

<span

onClick={()=>setToggle(false)}

className="cursor-pointer text-blue-600">

 Register

</span>

</p>

</div>

</div>

    );

}

export default Login;