import { CustomButton } from "../components/custom_button.tsx";

export function DashboardPage() {
  return (
    <div className="flex flex-col h-full bg-blue-200">
      This is the dashboard page
      <input type="text" placeholder="random input..." className="inline-max" />
      <CustomButton
        buttonText="useless button"
        customClass="bg-black text-white"
      />
    </div>
  );
}
