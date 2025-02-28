# VeriArt NEAR

## Overview

VeriArt NEAR is a decentralized application (DApp) built on the NEAR blockchain that authenticates digital artwork using a unique AI-powered fingerprinting system. The project addresses art forgery and provenance challenges by providing an immutable, on-chain record of digital art authenticity and ownership through NFT integration.

## Key Features

- **AI-Powered Fingerprinting:** Generates a unique digital signature for each artwork using a lightweight AI algorithm.
- **Blockchain-Based Verification:** Leverages NEAR smart contracts to record and verify art authenticity.
- **Decentralized Ownership:** Ensures transparent, tamper-proof tracking of artwork ownership via NFTs.
- **User-Friendly Interface:** Enables artists to register and verify their digital art with ease.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Technologies Used

- **NEAR Blockchain:** For decentralized ledger and smart contract functionality.
- **Smart Contracts:** Written in JavaScript to securely manage on-chain transactions.
- **AI Module:** Implements a lightweight deep learning model for generating digital art fingerprints.
- **Frontend:** Utilizes modern web technologies (e.g., React or Vue) to create an intuitive user experience.
- **Backend (Optional):** Python or Node.js may be used for additional processing and API integration.

## Installation

### Prerequisites

- [Node.js and npm](https://nodejs.org/)
- [NEAR CLI](https://docs.near.org/tools/near-cli)
<!-- - [Rust](https://www.rust-lang.org/) (if using Rust for smart contracts)
- Python (if using Python for the AI module) -->

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/VeriArtNEAR/veriart.git
   cd veriart
   ```

2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

3. **Deploy Smart Contracts:**

   - Follow the [NEAR documentation](https://docs.near.org/develop/contracts) for contract deployment.
   - Example command:
     ```bash
     near deploy --accountId your-account.testnet --wasmFile path/to/your_contract.wasm
     ```

4. **Configure Environment Variables:**

   - Create a `.env` file in the project root with necessary configuration settings (e.g., NEAR network, API keys).

5. **Run the Application:**
   ```bash
   npm start
   ```

## Usage

- **Artwork Registration:** Artists can upload their digital artwork, triggering the AI module to generate a unique fingerprint that is then stored on the blockchain.
- **Verification:** Users and collectors can verify artwork authenticity by comparing new fingerprints with on-chain records.
- **Ownership Transfer:** The DApp facilitates secure NFT-based ownership transfers, ensuring every transaction is recorded transparently.

## Project Structure

```
veriart-near/
├── contracts/           # Smart contract source code
├── frontend/            # Frontend application source code
├── ai/                  # AI module for art fingerprinting
├── scripts/             # Deployment and utility scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! To get involved:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

For any questions or discussions, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For further inquiries or support, please contact:

- **Your Name** – veriartnear@gmail.com
- **GitHub:** [Your GitHub Profile](https://github.com/VeriArtNEAR/)
<!-- - **Twitter:** [@yourhandle](https://twitter.com/yourhandle) -->
