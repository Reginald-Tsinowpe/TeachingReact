import { useState } from "react";
import { formSubmission } from "../scripts/formPageScripts.ts";

export function FormPage() {
  const [formClicks, setFormClicks] = useState(0);

  function changeCounter() {
    setFormClicks((prev) => prev + 1);
    console.log(formClicks);
  }

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
          type="button"
          onClick={() => setFormClicks((prev) => prev + 1)}
          className="flex bg-yellow-300 inline-max place-self-center"
        >
          {formClicks}
        </button>
      </form>
    </div>
  );
}
