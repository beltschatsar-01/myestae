import {useState} from 'react';
import { FcHome } from "react-icons/fc";
import {Link , useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success===false){
        setLoading(false);
        setError(data.message);
        return;
        }setLoading(false);
        setError(null);
        navigate('/sign-in');
      
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
      <div className="mx-auto text-center pb-8">
        <div className='flex items-center ml-14'>
          <div className='p-1'><FcHome size={36}/></div>
          <h1 className='font-bold text-3xl ml-1' ><span className='text-slate-500'>myDream</span><span className="text-slate-700">Estate</span></h1>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661775953246-410e3a33977c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5fGVufDB8fDB8fHww"
          alt="key"
          className="w-full rounded mt-7"
        />
        <div className="mt-7">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
        </div>
      </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="username"
            placeholder="username"
            className="border p-3 rounded-lg"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"                >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <p className="text-center">Have an account? <Link to='/sign-in' className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link></p>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </main>
  )
}
