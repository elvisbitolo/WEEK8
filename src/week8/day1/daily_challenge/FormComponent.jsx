import React from 'react';

const FormComponent = (props) => {
  const { data, handleChange } = props;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-2xl mx-auto">
      <form action="/" method="GET" className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            placeholder="First Name"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="number"
            name="age"
            value={data.age}
            placeholder="Age"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === 'male'}
              onChange={handleChange}
              className="text-indigo-600"
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === 'female'}
              onChange={handleChange}
              className="text-indigo-600"
            />
            <span>Female</span>
          </label>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Select your destination</label>
          <select
            name="destination"
            value={data.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          >
            <option value="">-- Please choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Thailand">Thailand</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Dietary restrictions:</label>
          <div className="space-y-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="nutsFree"
                checked={data.nutsFree}
                onChange={handleChange}
                className="rounded text-indigo-600"
              />
              <span>Nuts free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lactoseFree"
                checked={data.lactoseFree}
                onChange={handleChange}
                className="rounded text-indigo-600"
              />
              <span>Lactose free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="vegan"
                checked={data.vegan}
                onChange={handleChange}
                className="rounded text-indigo-600"
              />
              <span>Vegan</span>
            </label>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Submit
        </button>
      </form>

      <hr className="my-8 border-slate-100" />

      <div className="bg-slate-50 p-6 rounded-xl space-y-3">
        <h2 className="text-xl font-bold text-slate-800">Entered information:</h2>
        <p><span className="font-semibold">Your name:</span> {data.firstName} {data.lastName}</p>
        <p><span className="font-semibold">Your age:</span> {data.age}</p>
        <p><span className="font-semibold">Your gender:</span> {data.gender}</p>
        <p><span className="font-semibold">Your destination:</span> {data.destination}</p>
        <p><span className="font-semibold">Your dietary restrictions:</span></p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Nuts free: {data.nutsFree ? 'Yes' : 'No'}</li>
          <li>Lactose free: {data.lactoseFree ? 'Yes' : 'No'}</li>
          <li>Vegan: {data.vegan ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </div>
  );
};

export default FormComponent;
