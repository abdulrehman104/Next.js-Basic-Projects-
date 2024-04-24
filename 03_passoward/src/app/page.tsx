"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";

// Define the Page component
const Page = () => {
  // Define state variables using the useState hook
  const [lenght, setLenght] = useState(1);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [passoward, setPassoward] = useState("");

  // useref hook
  //
  const passowardRef = useRef(null);

  // Define the password generator function using the useCallback hook
  const passowardGenerator = useCallback(() => {
    // The generated password will be stored in 'password'
    let pass = "";
    // This string contains the data used for generating the password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Conitional rendering
    // If numbers are allowed, add them to the password
    if (numAllow) str += "0123456789";
    // If characters are allowed, add them to the password
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`";

    //  Loop runs as per the length of the password
    for (let i = 1; i <= lenght; i++) {
      // Generate a random index within the length of 'str'
      let char = Math.floor(Math.random() * str.length);

      // Convert the randomly generated index to a character and add it to the password
      pass += str.charAt(char);
    }
    // Set the generated password
    setPassoward(pass);
  }, [lenght, numAllow, charAllow, setPassoward]);

  // Copy password to clipboard
  const coyPassToClipBord = useCallback(() => {
    passowardRef.current?.select();

    // ismn ham bta denge ke 8 se zyada kuch bhi select na ho
    // passowardRef.current?.setSelectionRange(0,8)

    window.navigator.clipboard.writeText(passoward);
  }, [passoward]);

  // Call the password generator function in useEffect
  useEffect(() => {
    passowardGenerator();
  }, [lenght, numAllow, charAllow, passowardGenerator]);

  // Return JSX for rendering
  return (
    <>
      <div className=" w-full max-w-lg mx-auto my-32 py-4 px-8 bg-gray-700 rounded-lg text-orange-500 ">
        <h1 className="text-2xl text-center text-white mb-4">
          Passoward Generator
        </h1>
        <div>
          <input
            type="text"
            // passoward mn jo data hoga wo is value mn a jayega
            value={passoward}
            placeholder="password"
            readOnly
            ref={passowardRef}
            className="w-[350px] outline-none py-1 px-0.5 rounded-l-lg"
          />
          <button
            className="px-3 py-1 bg-blue-700 text-white font-bold rounded-r-lg"
            onClick={coyPassToClipBord}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-5 mt-6">
          <div className="flex gap-3">
            <input
              type="range"
              min={8}
              max={100}
              // The value entered in 'length' will be assigned here
              value={lenght}
              onChange={(e: any) => {
                setLenght(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {lenght}</label>
          </div>
          <div>
            <input
              // jab number ko check kre ge to passoward mn number add ho jayege
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div>
            <input
              // jab character ko check kre ge to passoward mn character add ho jayege
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Page component
export default Page;
