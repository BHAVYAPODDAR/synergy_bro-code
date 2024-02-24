import React from "react";

const AdditionalInfo = () => {
  return (
    <form class=" mx-auto grid md:grid-cols-2 md:gap-5 w-full px-8">
      <div class="relative z-0 w-full mb-6 ">
        <label
          for="purpose"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Purpose of Account/Transaction
        </label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter purpose"
        />
      </div>

      <div class="relative z-0 w-full mb-6">
        <label
          for="beneficiary"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Beneficiary Details (if applicable)
        </label>
        <textarea
          id="beneficiary"
          name="beneficiary"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter beneficiary details"
        ></textarea>
      </div>

      <div class="relative z-0 w-full mb-6">
        <label
          for="tax-residency"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Tax Residency Status
        </label>
        <select
          id="tax-residency"
          name="tax-residency"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select tax residency status</option>
          <option value="resident">Resident</option>
          <option value="non-resident">Non-Resident</option>
        </select>
      </div>

      <div class="relative z-0 w-full mb-6">
        <label
          for="pep-status"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Politically Exposed Person (PEP) Status
        </label>
        <select
          id="pep-status"
          name="pep-status"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select PEP status</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="relative z-0 w-full mb-6">
        <label
          for="declaration"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Declaration of Financial Status and Investment Experience
        </label>
        <textarea
          id="declaration"
          name="declaration"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter declaration"
        ></textarea>
      </div>

      <div class="relative z-0 w-full mb-6">
        <label
          for="signature"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Signature (if physical documentation is involved)
        </label>
        <input
          type="text"
          id="signature"
          name="signature"
          class="block w-full py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter signature"
        />
      </div>
    </form>
  );
};

export default AdditionalInfo;
