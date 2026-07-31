"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { hasSeenInSession, markSeenInSession } from "@/lib/storage";

const SESSION_KEY = "vitaeone_builder_video_seen";

// Replace this with your own video later
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

export default function VideoOverlay() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!hasSeenInSession(SESSION_KEY)) {
            setVisible(true);
        }
    }, []);

    const close = () => {
        markSeenInSession(SESSION_KEY);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="video-overlay">
            <div className="video-overlay__backdrop" onClick={close} />

            <div className="video-overlay__panel">
                <button
                    type="button"
                    className="video-overlay__close"
                    onClick={close}
                    aria-label="Close video"
                >
                    <X size={20} />
                </button>

                <div className="video-overlay__frame-wrapper">
                    <iframe
                        className="video-overlay__frame"
                        src={YOUTUBE_EMBED_URL}
                        title="How VitaeOne Resume Builder Works"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <button
                    type="button"
                    className="video-overlay__continue"
                    onClick={close}
                >
                    Continue Building Resume
                </button>
            </div>
        </div>
    );
}