import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  title: string;
  content: React.ReactNode;
  actions: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, actions, open, onOpenChange }) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex items-center justify-center p-4"
        >
          <DialogPrimitive.Content
            className={cn(
              "bg-white rounded-lg shadow-lg max-w-md w-full p-6",
              "data-[state=open]:animate-in data-[state=closed]:animate-out"
            )}
          >
            <DialogPrimitive.Close className="absolute top-4 right-4">
              <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </DialogPrimitive.Close>
            <DialogPrimitive.Title className="text-lg font-semibold">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="mt-2 text-sm text-gray-600">
              {content}
            </DialogPrimitive.Description>
            <div className="mt-4 flex justify-end space-x-2">{actions}</div>
          </DialogPrimitive.Content>
        </motion.div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Modal;
