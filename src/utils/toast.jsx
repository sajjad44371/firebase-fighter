import toast from "react-hot-toast";

export const showToast = {
  success: (message) =>
    toast.success(message, {
      style: {
        border: "1px solid rgba(34, 197, 94, 0.3)",
        padding: "12px 20px",
        color: "#15803d",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        fontWeight: "500",
        fontSize: "14px",
      },
      iconTheme: {
        primary: "#22c55e",
        secondary: "#fff",
      },
    }),

  error: (message) =>
    toast.error(message, {
      style: {
        border: "1px solid rgba(239, 68, 68, 0.3)",
        padding: "12px 20px",
        color: "#b91c1c",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        fontWeight: "500",
        fontSize: "14px",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff",
      },
    }),

  loading: (message) =>
    toast.loading(message, {
      style: {
        border: "1px solid rgba(59, 130, 246, 0.3)",
        padding: "12px 20px",
        color: "#1d4ed8",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        fontWeight: "500",
        fontSize: "14px",
      },
    }),

  // Custom JSX Toast with Action Button (Optional)
  custom: (message, onConfirm) =>
    toast(
      (t) => (
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              if (onConfirm) onConfirm();
            }}
            className="btn btn-xs btn-primary rounded-lg text-xs"
          >
            Undo
          </button>
        </div>
      ),
      {
        style: {
          border: "1px solid rgba(168, 85, 247, 0.3)",
          padding: "10px 16px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
        },
      },
    ),
};
