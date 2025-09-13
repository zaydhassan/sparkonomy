const CreateInvoiceCard = () => (
  <div
    className="bg-white shadow flex flex-col items-center w-full px-6 py-7 mb-6"
    style={{
      borderRadius: 24,
      boxShadow: "0 2px 12px #e1d5ed33",
    }}
  >
    <div
      className="flex items-center justify-center rounded-full mb-3"
      style={{
        width: 60,
        height: 60,
        background: "#fff",
        border: "3px solid",
        borderImage: "linear-gradient(135deg, #a855f7 65%, #ec4899 100%) 1",
        boxSizing: "border-box",
      }}
    >
      <span
        className="font-bold"
        style={{
          fontSize: 30,
          background: "linear-gradient(135deg, #a855f7 65%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        +
      </span>
    </div>

    <div className="font-semibold text-xl text-center mb-1"
      style={{
        color: "#7c3aed", 
        letterSpacing: 0.5,
      }}
    >
      Create New Invoice
    </div>

    <div className="text-center mb-2"
      style={{
        color: "#a3a3a3", 
        fontSize: 15,
        fontWeight: 500,
      }}
    >
      Start by creating and sending new invoice
    </div>
    <div className="text-center"
      style={{
        color: "#9333ea",
        fontSize: 14,
      }}
    >
      Or Upload an existing invoice and set payment reminder
    </div>
  </div>
);

export default CreateInvoiceCard;