// src/components/ui/ResumeDropdown.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from './Button'; // Adjust path if needed
import { FiDownload } from 'react-icons/fi'; // Or whatever icon the template uses
import { motion, AnimatePresence } from 'framer-motion';

const ResumeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown if user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const resumes = [
        { label: "⚙️ Engineering Resume", file: "/resume-engineering.pdf" },
        { label: "📣 Growth & Marketing", file: "/resume-growth.pdf" },
        { label: "📊 Data & Analytics", file: "/resume-data.pdf" },
    ];

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <Button 
                onClick={() => setIsOpen(!isOpen)}
                variant="outline" // Change to "primary" or "default" depending on the template
                className="flex items-center gap-2"
            >
                <FiDownload className="w-4 h-4" />
                <span>Resumes {isOpen ? '▴' : '▾'}</span>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 lg:left-0 z-50 w-56 mt-2 origin-top-left bg-card border border-border/50 rounded-xl shadow-lg focus:outline-none overflow-hidden"
                    >
                        <div className="py-1 flex flex-col">
                            {resumes.map((resume, index) => (
                                <a
                                    key={index}
                                    href={resume.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2 border-b border-border/30 last:border-0"
                                >
                                    {resume.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResumeDropdown;