import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component

export default function ImageWithModal({ imageUrl, name }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Image container */}
            <div
                className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg"
                onClick={() => setIsOpen(true)} // Open modal on image click
            >
                <div className="relative w-full h-full">
                    <div className="relative z-10"></div>
                    <Image
                        className="rounded-xl p-2"
                        src={imageUrl}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover' }} // Ensures the image covers the entire container
                    />
                </div>
            </div>

            {/* Modal */}
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)} // Close modal when clicked outside or Esc pressed
                className="relative z-50"
            >
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

                {/* Modal panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto w-[80vw] h-[80vh] max-w-none rounded bg-white p-4 flex flex-col">
                        <Dialog.Title className="text-lg font-medium text-black mb-2">{name}</Dialog.Title>

                        {/* Image with dynamic size */}
                        <div className="flex-grow relative">
                            <Image src={imageUrl} alt={name} fill className="rounded-md object-contain" />
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
