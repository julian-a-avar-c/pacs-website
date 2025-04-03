import { useState } from "react";

type SendEmailProps = {
    inputClass: string;
    buttonClass: string;
}

export function SendEmail({inputClass, buttonClass}: SendEmailProps) {
    const [email, setEmail] = useState("")
    const handleEmailInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value)
    }
    async function sendEmail() {
        try {
            const response = await fetch('/resend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recipient: email }) // Send data as JSON
            });
            console.log('Request completed!', response);
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }
  return (
    <>
      <input
        type="text"
        className={inputClass}
        placeholder="Email Address"
        onChange={handleEmailInput}
      />
      <button className={buttonClass} onClick={sendEmail}>
        Subscribe
      </button>
    </>
  );
}
