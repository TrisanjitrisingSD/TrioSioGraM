import React from 'react';
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from '@/lib/validation';
import Loader from '@/components/shared/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserAccount, useSignInAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const SignupForm = () => {
  const { toast } = useToast();
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount } = useSignInAccount();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
  });

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);
    if (!newUser) return toast({ title: "Sign up Failed. Please try again." });

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) return toast({ title: 'Sign In Failed. Please Try Again.' });

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      navigate('/');
    } else {
      return toast({ title: 'Sign up failed. Please Try Again.' });
    }
  }

  return (
    <Form {...form}>
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4">
        {/* Left Column - Signup Form */}
        <div className="sm:w-420 w-full max-w-sm flex flex-col items-center mb-6 md:mb-0">
          <img src="/assets/images/logo.svg" alt="logo" />
          <h2 className='text-orange-100 h3-bold md:h2-bold pt-5 sm:pt-12 text-center'>Create a New Account</h2>
          <p className='text-rose-600 small-medium md:base-regular mt-2 text-center'>
            To Use <b className='size-23'>T</b>rioSioGraM, please enter your details
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='shad-button_primary'>
              {isCreatingAccount ? (
                <div className='flex-center gap-2'>
                  <Loader /> Loading...
                </div>
              ) : "Sign up"}
            </Button>
          </form>
        </div>

        {/* Right Column - Already have an account */}
        <div className="text-center md:ml-10 mt-4 md:mt-0">
          <p className="text-amber-400 text-base md:text-lg font-semibold">
            Already have an Account?
            <Link to="/sign-in" className="text-primary-500 font-bold ml-1 underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
