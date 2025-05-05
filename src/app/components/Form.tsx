import { FormEvent } from "react";
import { Button } from "./Button";
import { z } from "zod";

const subscriptionSchema = z.object({
  email: z.string().email("Enter a valid email!"),
});
type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
// install react hook form !! and make this form more professional.
export function Form() {
  const handleForm = (ev: FormEvent) => {
    ev.preventDefault();
  };
  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col justify-center gap-8 w-[550px]"
    >
      <div className="flex flex-col gap-5">
        <label htmlFor="Email" className="text-lg text-white font-normal">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white rounded-md p-4"
        />
        <label htmlFor="Email" className="text-lg text-white font-normal">
          Message
        </label>
        <input
          type="text"
          placeholder="What are you say ?"
          className="bg-white rounded-md px-4 py-8"
        />
      </div>
      <div className="flex justify-center">
        <Button variant="blue">Request Demo</Button>
      </div>
    </form>
  );
}
