---
sidebar_position: 3
---

# Digital Signatures on RISC Zero

*Revised Apr 30, 2022*

*In this document, we introduce a* **post-quantum digital signature,** *using Rust and* [RISC Zero's zkVM](what_is_risc_zero.md). *To learn more and run it on your own machine, check out the* [Github README](https://github.com/risc0/risc0/tree/main/examples/rust/digital_signature).
> WARNING: This software is still experimental, we do not recommend it for production use.

## A Post Quantum Digital Signature

First described by Diffie and Hellman in 1976, `digital signatures` function loosely the same way ink signatures do: they allow someone to attach a stamp of their identity to a particular message. Today, there are a number of modern signature schemes that are computationally efficient, based on RSA encryption, elliptic curve cryptography, etc. 

`RISC Zero offers a post-quantum digital signature scheme` whose only cryptographic primitive is SHA-2. By running a simple digital signature code inside our open-source zkVM, RISC Zero allows users to generate their own verifiable digital signatures. Unlike RSA and elliptic curve cryptography, SHA-2 isn't known to be vulnerable to any quantum attacks.

We offer this demo as a simple proof of concept for our technology; this is just the beginning. Follow us on Twitter to stay informed about RISC Zero or find us on Discord -- links below.