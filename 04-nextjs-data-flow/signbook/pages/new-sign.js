import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import ADD_SIGN from '../lib/apollo/queries/addSign';

function NewSign() {
  const router = useRouter();
  const [formState, setFormState] = useState({});
  const [addSign] = useMutation(ADD_SIGN, {
    onCompleted() {
      router.push('/');
    },
  });

  const handleInput = ({ e, name }) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-10">Sign the Real-World Next.js signbook!</h1>
      <div className="max-w-7xl shadow-xl bg-purple-50 p-7 mb-10 grid grid-rows-1 gap-4 rounded-md border-2 border-purple-800">
        <div>
          <label htmlFor="nickname" className="text-purple-900 mb-2">
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            onChange={(e) => handleInput({ e, name: 'nickname' })}
            placeholder="Your name"
            className="p-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="content" className="text-purple-900 mb-2">
            Leave a message!
          </label>
          <textarea
            id="content"
            placeholder="Leave a message here!"
            onChange={(e) => handleInput({ e, name: 'content' })}
            className="p-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="country" className="text-purple-900 mb-2">
            If you want, write your country name and its emoji flag
          </label>
          <input
            id="country"
            type="text"
            onChange={(e) => handleInput({ e, name: 'country' })}
            placeholder="Country"
            className="p-2 rounded-lg w-full"
          />

          <button
            className="bg-purple-600 p-4 rounded-lg text-gray-50 m-auto mt-4"
            onClick={() => addSign({ variables: formState })}>
            Submit
          </button>
        </div>
      </div>
      <Link href="/" passHref>
        <a className="mt-5 underline"> Back to the homepage</a>
      </Link>
    </div>
  );
}

export default NewSign;
