import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Download } from 'lucide-react';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-3xl p-6 w-[260px] shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-purple-600" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
                                Coming Soon to Stores!
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are finalizing our store listings. In the meantime, you can download the request early access APK directly.
                            </p>

                            <button
                                onClick={() => alert('Download started!')}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium"
                            >
                                <Download className="w-5 h-5" />
                                Download APK Directly
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
