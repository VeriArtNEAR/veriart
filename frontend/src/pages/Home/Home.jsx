import React from "react";
import "./home.css";
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaFingerprint,
  FaLink,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  const handleUploadClick = () => {
    alert(
      "In the live app, this would open a file dialog to select your artwork."
    );
  };

  const handleWalletConnect = () => {
    alert("In the live app, this would connect to your NEAR wallet.");
  };

  return (
    <div className="veriart-homepage">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <FaFingerprint className="logo-icon" />
            <span>VeriArt</span>
          </div>
          <div className="nav-links">
            <Link to={"/how-it-works"}>How It Works</Link>
            <a href="/#features">Features</a>
            {/* <a href="#">Gallery</a> */}
            <Link to={"/about"}>About</Link>
          </div>
          <div className="nav-actions">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Protect Your Digital Art with Blockchain & AI</h1>
          <p>
            Register, verify, and prove ownership of your
            creations—decentralized and immutable.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-accent">Register Artwork</button>
            <button className="btn btn-outline">Verify Originality</button>
          </div>
          <div className="demo-box">
            <p>Try VeriArt with a sample image</p>
            <div className="upload-area" onClick={handleUploadClick}>
              <FaCloudUploadAlt className="fas fa-cloud-upload-alt" />

              <p>Drag & drop your artwork here</p>
              <small>or click to browse files</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features">
        <div className="section-title">
          <h2>Why Choose VeriArt?</h2>
          <p>
            Our platform combines cutting-edge AI with blockchain technology to
            give artists unparalleled protection
          </p>
        </div>
        <div className="features">
          {[
            {
              icon: <FaFingerprint />,
              title: "AI Fingerprinting",
              description:
                "Our perceptual hashing algorithm creates a unique digital fingerprint of your artwork that can't be forged.",
            },
            {
              icon: <FaLink />,
              title: "Blockchain Registration",
              description:
                "Store your artwork's fingerprint immutably on the NEAR blockchain with a permanent timestamp.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Open Verification",
              description:
                "Anyone can verify the authenticity of registered artworks without needing special access.",
            },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section steps-section">
        <div className="section-title">
          <h2>How VeriArt Works</h2>
          <p>
            Protecting your artwork takes just minutes with our simple process
          </p>
        </div>
        <div className="steps">
          {[
            {
              number: "1",
              title: "Upload",
              description:
                "Select your digital artwork file (JPG, PNG, GIF, MP4, PDF)",
            },
            {
              number: "2",
              title: "AI Hash",
              description:
                "Our AI generates a unique fingerprint of your artwork",
            },
            {
              number: "3",
              title: "NEAR Registration",
              description:
                "The fingerprint is stored immutably on the NEAR blockchain",
            },
            {
              number: "4",
              title: "Verify Anytime",
              description:
                "Prove your ownership or check originality whenever needed",
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="section-title">
          <h2>Featured Artworks</h2>
          <p>
            Discover creations protected by VeriArt from talented digital
            artists
          </p>
        </div>
        <div className="gallery">
          {[
            { id: "art1", title: "Digital Dreams", artist: "@creative_soul" },
            { id: "art2", title: "Abstract Thoughts", artist: "@pixel_wizard" },
            { id: "art3", title: "Neon Cityscape", artist: "@urban_artist" },
            { id: "art4", title: "Surreal Portrait", artist: "@dream_weaver" },
          ].map((art) => (
            <div className="art-card" key={art.id}>
              <div
                className="art-image"
                style={{
                  backgroundImage: `url(https://source.unsplash.com/random/600x400?${art.id})`,
                }}
              ></div>
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>by {art.artist}</p>
                <span className="verified-badge">
                  <FaCheckCircle /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Protect Your Art?</h2>
        <p>
          Join thousands of artists who are securing their digital creations
          with VeriArt's blockchain-powered verification
        </p>
        <button
          className="btn btn-accent"
          style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}
          onClick={handleWalletConnect}
        >
          Connect NEAR Wallet
        </button>
        <div className="near-badge">
          <FaLink />
          Powered by NEAR Protocol
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <FaFingerprint className="fas fa-fingerprint logo-icon" />
              <span>VeriArt</span>
            </div>
            <p>
              Decentralized artwork verification powered by AI and blockchain
              technology.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2023 VeriArt. All rights reserved. | Decentralized and proud.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
