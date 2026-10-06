import { AnimatePresence, motion } from "framer-motion";

const PasswordChecker = ({ password = "" }) => {
  const validationRules = [
    {
      id: "lowercase",
      label: "At least 1 lowercase letter (a-z)",
      isValid: /[a-z]/.test(password),
    },
    {
      id: "uppercase",
      label: "At least 1 uppercase letter (A-Z)",
      isValid: /[A-Z]/.test(password),
    },
    {
      id: "number",
      label: "At least 1 number (0-9)",
      isValid: /\d/.test(password),
    },
    {
      id: "special",
      label: "At least 1 special character",
      isValid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <AnimatePresence initial={false}>
      {password.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 space-y-2 overflow-hidden font-sans"
          aria-live="polite"
        >
          {validationRules.map((rule) => (
            <div
              key={rule.id}
              className="flex items-center gap-2.5 text-sm font-medium"
            >
              <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                <motion.span
                  initial={false}
                  animate={{
                    scale: rule.isValid ? [1, 1.3, 1] : 1,
                    backgroundColor: rule.isValid ? "#16a34a" : "#ef4444",
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block h-2.5 w-2.5 rounded-full"
                />

                {rule.isValid && (
                  <motion.span
                    initial={{ opacity: 0.6, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.8 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="absolute h-2.5 w-2.5 rounded-full bg-green-500"
                    aria-hidden="true"
                  />
                )}
              </div>

              <span
                className={rule.isValid ? "text-green-600" : "text-red-500"}
              >
                {rule.label}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordChecker;
