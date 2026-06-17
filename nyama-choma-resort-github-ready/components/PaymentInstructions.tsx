import { CreditCard, ShieldCheck } from "lucide-react";
import { resortPhone } from "@/lib/content";

export function PaymentInstructions() {
  return (
    <div className="payment-box">
      <h3>
        <CreditCard size={20} /> Ecocash payment instructions
      </h3>
      <p>
        Send the booking amount to <strong>{resortPhone}</strong> using Ecocash, then enter the
        Ecocash confirmation or reference number in the form. Staff will confirm the payment and mark
        the booking as paid.
      </p>
      <p>
        <ShieldCheck size={17} /> This website does not collect card details or wallet PINs.
      </p>
    </div>
  );
}
