import React from "react";

function Login() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-baseline lg:gap-6 font-semibold">
      <button className="hover:text-indigo-500 transition duration-200 ease-out hover:ease-in">
        Se connecter
      </button>
      <button className="px-6 py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md cursor-pointer drop-shadow-md">
        Créer un compte
      </button>
    </div>
  );
}

export default Login;
