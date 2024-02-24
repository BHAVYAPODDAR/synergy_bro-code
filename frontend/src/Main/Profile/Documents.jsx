import React from "react";

const Documents = () => {
  return (
    <form class="w-full  mx-auto grid gap-10 md:grid-cols-2 px-9 mb-4">
      <h1 className="text-md font-semibold">Personal Documents</h1>
      <h1 className="text-md font-semibold">Company Documents</h1>
      <div class="relative z-0 w-full mb-3 ">
        <label
          for="proof-identity"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Proof of Identity
        </label>
        <select
          id="proof-identity"
          name="proof-identity"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select proof of identity</option>
          <option value="aadhaar-card">Aadhaar Card</option>
          <option value="passport">Passport</option>
          <option value="voter-id">Voter ID Card</option>
          <option value="drivers-license">Driver's License</option>
        </select>

        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          for="proof-identity"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Proof of Incorporation
        </label>
        <select
          id="proof-income"
          name="proof-income"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select proof of address</option>
          <option value="COI">Certification of Incorporation</option>
          <option value="MAA">Memorandum and Articles of Association</option>
          <option value="partnership-deed">Partnership Deed </option>
        </select>

        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          for="proof-identity"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Proof of Address
        </label>
        <select
          id="proof-address"
          name="proof-address"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select proof of address</option>
          <option value="aadhaar-card">Aadhaar Card</option>
          <option value="bill">Utility Bill (Electricity, Water, Gas)</option>
          <option value="rent-agreement">Rent Agreement</option>
          <option value="bank-statement">Bank Statement</option>
          <option value="passport">Passport</option>
          <option value="voter-id">Voter ID Card</option>
          <option value="drivers-license">Driver's License</option>
        </select>

        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          for="proof-identity"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Proof of Company Address
        </label>
        <select
          id="proof-comp-address"
          name="proof-comp-address"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select proof of address</option>
          <option value="bill">Utility Bill (Electricity, Water, Gas)</option>
          <option value="lease-agreement">Lease Agreement</option>
          <option value="bank-statement">Bank Statement</option>
        </select>

        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          for="proof-identity"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Proof of Income
        </label>
        <select
          id="proof-income"
          name="proof-income"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select proof of income</option>
          <option value="salary-slip">Salary slip</option>
          <option value="income-tax-return">Income Tax Returns</option>
          <option value="bank-statement">Bank Statement</option>
        </select>

        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>

      <div class="relative z-0 w-full mb-3 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          PAN number of Company
        </label>
        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1 my-2"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 "
          for="user_avatar"
        >
          Passport size photo
        </label>
        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>
      <div class="relative z-0 w-full mb-3">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 "
          for="user_avatar"
        >
          GST Registration Certificate
        </label>
        <input
          class="block w-full text-sm dark:text-gray-900 border dark:border-gray-300 rounded-lg cursor-pointer dark:bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 p-1"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>

    </form>
  );
};

export default Documents;
