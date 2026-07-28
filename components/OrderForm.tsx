import React, { useState } from "react";

const OrderForm: React.FC = () => {
  const [network, setNetwork] = useState("");
  const [address, setAddress] = useState("");

  const walletAddresses: Record<string, string> = {
    BEP20: process.env.NEXT_PUBLIC_WALLET_BEP20 || "",
    ERC20: process.env.NEXT_PUBLIC_WALLET_ERC20 || "",
    TRC20: process.env.NEXT_PUBLIC_WALLET_TRC20 || "",
  };

  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setNetwork(selected);
    setAddress(walletAddresses[selected]);
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Create Order</h2>

      <label className="block mb-2">Select Network:</label>
      <select
        value={network}
        onChange={handleNetworkChange}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="">-- Choose Network --</option>
        <option value="BEP20">USDT (BEP20)</option>
        <option value="ERC20">USDT (ERC20)</option>
        <option value="TRC20">USDT (TRC20)</option>
      </select>

      {address && (
        <div className="mt-4">
          <p className="font-semibold">Send to this address:</p>
          <p className="break-all text-blue-600">{address}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
