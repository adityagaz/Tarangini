import logoDark from '../images/maitriyee.svg';
import React, { useState } from 'react';
import App from '../App';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const fetchData = async (phone, password) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://sehyogini.onrender.com/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phone,
          password: password
        })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const responseData = await response.json();
      setUserNumber(responseData.id);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputNumber = (event) => {
    setPhone(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    fetchData(phone, password);
  };


 if(userNumber){
  console.log(userNumber);
  localStorage.setItem("userid",userNumber);
  navigate('/community');
 }



  return (
    <div className='w-full h-screen flex justify-center items-center bg-theme'>
      <div className="flex justify-center items-center bg-white w-[80%] h-[80%] rounded-2xl p-8 shadow-lg">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img src={logoDark} alt='head' className='w-[15%] mb-8' />
          <div className="w-[80%]">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex items-center">
                <label htmlFor="phoneNumber" className="text-2xl font-['Poppins'] font-extra-bold flex items-center w-32 mr-4">
                  <span className="font-['Poppins'] font-extra-bold">Mobile No:</span>
                </label>
                <input id="phoneNumber" name="phoneNumber" className='border-black border px-2 py-1 rounded' onChange={inputNumber} />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="password" className="text-2xl font-['Poppins'] font-extra-bold flex items-center w-32 mr-4">
                  <span>Password:</span>
                </label>
                <input type="password" id="password" name="password" className='border-black border px-2 py-1 rounded' onChange={inputPassword} />
              </div>
              <button type="submit" className="bg-theme text-white px-4 py-2 rounded mt-4" onClick={onSubmit} disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
