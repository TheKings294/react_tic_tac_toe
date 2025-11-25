import React from "react";
import { motion } from "framer-motion";
import Button from "./Button"

interface BannerModalProps {
    isOpen: boolean;
    title?: string;
    children?: React.ReactNode;
    onClose: () => void;
}

export default function BannerModal({ isOpen, title, children, onClose }: BannerModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 backdrop-blur-md bg-transparent"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative w-full bg-gray-dark shadow-lg p-6 flex flex-col items-center text-center"
            >
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <div className="mb-6">{children}</div>

                <Button text={"Fermer"} action={onClose} theme={"grayLight"} />
            </motion.div>
        </div>
    );
}
