import { formSubmission } from "../scripts/formPageScripts.ts";

export function FormPage() {
  return (
    <div className="flex shadow-xl rounded-lg w-min place-self-center bg-white">
      <form action={formSubmission} className="flex flex-col  inline-max">
        <label>
          <span>Username: </span>
          <input name="username" type="text" />
        </label>
        <label>
          <span>Email: </span>
          <input name="email" type="email" />
        </label>
        <label>
          <span>Password: </span>
          <input name="password" type="password" />
        </label>
        <label>
          <span>Confirm Password: </span>
          <input name="confirm_password" type="password" />
        </label>

        <button
          type="submit"
          className="flex bg-yellow-300 inline-max place-self-center"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
