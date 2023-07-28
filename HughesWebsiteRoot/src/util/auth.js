import { useEffect } from "react";
import router from "next/router";

/*
  This file is added to your codebase if you've excluded auth integration from your stack when exporting from
  from Divjoy, but one of your components attempts to import this file and call one of its functions.
  Rather than break your project, we include this placeholder file so your codebase can still run.
  If you need auth integration, re-export from Divjoy using the "SaaS" app type and select an auth option.
  Otherwise, you can search your codebase for the function names you see below, remove all related code, then delete this file.
*/

export const useAuth = () => {
  return {
    user: false,
    signup: errorFunction,
    signin: errorFunction,
    signinWithProvider: errorFunction,
    signout: errorFunction,
    sendPasswordResetEmail: errorFunction,
    confirmPasswordReset: errorFunction,
    updatePassword: errorFunction,
    updateProfile: errorFunction,
  };
};

const errorMessage = `Authentication is disabled. See src/util/auth.js for more details.`;
const errorFunction = () => Promise.reject(new Error(errorMessage));

export const requireAuth = (Component) => {
  return (props) => {
    useEffect(() => {
      router.replace("/auth/signin");
    }, []);
    return null;
  };
};
