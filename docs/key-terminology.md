---
sidebar_position: 2
---

# Key Terminology

- *ZKVM* -- a virtual machine that runs trusted code and generates proofs
- *RISC Zero ZKVM* -- RISC Zero's ZKVM implementation based on the RISC-V architecture
- *host* -- the system the ZKVM runs on
- *guest* -- the system running inside the ZKVM
- *host* program -- the host-native, untrusted portion of an application
- *prover* -- a program on the host that runs the trusted code to generate a receipt
- *verifier* -- a program on the host that verifies receipts
- *method* -- a single 'main' entry point for code that runs inside the ZKVM
- *execute* -- run a method inside the ZKVM and produce a receipt of correct execution
- *commit* -- append data to the journal
- *receipt* -- a record of correct execution, consisting of:
  - *method ID* -- a small unique identifier that identifies a method
  - *journal* -- all the things the method wants to publicly output and commit to, written to by the method, attached to receipt
  - *seal* -- the cryptographic blob which proves that the receipt is valid
- *verify* -- check that the receipt is valid, i.e. verify the seal
- theoretical nomenclature used in papers and internals of RISC Zero's ZKVM implementation
  - *proof* -- the seal
  - *circuit* -- a mathematical construct that appears in one view as the "CPU" in the ZKVM but on the other is part of the computation used to create proofs