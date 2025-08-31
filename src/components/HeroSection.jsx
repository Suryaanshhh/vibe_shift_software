import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/dummylogo.png';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const laptopRef = useRef(null);
    const screenRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const laptop = laptopRef.current;
        const screen = screenRef.current;
        const content = contentRef.current;

        if (!laptop || !screen || !content) return;

        // Initial state - screen closed
        gsap.set(screen, {
            rotateX: -85,
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d"
        });
        gsap.set(content, { opacity: 0, scale: 0.8 });

        // Create scroll trigger animation
        ScrollTrigger.create({
            trigger: laptop,
            start: "top 70%",
            end: "center 30%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                // Open laptop screen
                gsap.to(screen, {
                    rotateX: -85 + (85 * progress),
                    duration: 0.1,
                    ease: "none"
                });

                // Show content when screen is mostly open
                if (progress > 0.6) {
                    gsap.to(content, {
                        opacity: (progress - 0.6) / 0.4,
                        scale: 0.8 + (0.2 * ((progress - 0.6) / 0.4)),
                        duration: 0.1,
                        ease: "none"
                    });
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="laptop-container" ref={laptopRef}>
                    <div className="laptop-base">
                        <div className="laptop-keyboard"></div>
                        <div className="laptop-trackpad"></div>
                    </div>
                    <div className="laptop-screen" ref={screenRef}>
                        <div className="screen-content">
                            <div className="screen-text" ref={contentRef}>
                                <div className="logo-container">
                                    <img src={logo} alt="VibeShift Logo" className="screen-logo" />
                                </div>
                                <h2>Your Vision</h2>
                                <p>Our Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;