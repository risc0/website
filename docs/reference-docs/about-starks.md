# About STARKs

RISC Zero's receipts are generated using a zk-STARK: a *zero knowledge, scalable, transparent argument of knowledge.* 

STARKs are a highly technical process - an innovation in the world of zero-knowledge cryptography introduced by Eli Ben-Sasson et. al in 2018. In order to prove the integrity of a computation with a STARK, the prover arithmetizes the entire question. By encoding the execution trace into polynomials, the statement of computational integrity is reduced to a statement about polynomial division. 

## Documentation

To get started in making sense of the RISC Zero STARK, start with the [RISC Zero Proof System Sequence Diagram + IOP Description](docs/explainers/../../about-proof-system.md) and the [Fibonacci Trace Validation](https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ1J5PcS2op_vrGtbK5Mif0gAN6wbAaTSWTHy2vuFtfbtqbI_dRqpalNamNjjUcyqD7hDPJRgI2cG-/pubhtml#) example. 

## References

### Less Technical 
- [Extreme Integrity in Decentralized World](https://medium.com/@eli_1210/extreme-integrity-in-decentralized-world-a56da4c730ea)
- [Cambrian Explosion of Crypto Proofs](https://medium.com/starkware/the-cambrian-explosion-of-crypto-proofs-7ac080ac9aed)
- [STARKs vs. SNARKS (Consensys, 2021)](https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/)
  
### More Technical 

We recommend the following external references on STARKs:
- [Anatomy of a Stark](https://aszepieniec.github.io/stark-anatomy/) (developer focused)
- [The Starkmath series](https://medium.com/tag/stark-math)
- [STARK 101](https://starkware.co/stark-101/) (developer focused)
- [Vitalik's STARK series](https://vitalik.ca/general/2017/11/09/starks_part_1.html)

### Most Technical
- [The STARK paper (Ben-Sasson et al, 2018)](https://eprint.iacr.org/2018/046.pdf) 