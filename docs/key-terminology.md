---
sidebar_position: 2
---

# Key Terminology

- *zkVM* -- a virtual machine that runs trusted code and generates proofs
- *RISC Zero zkVM* -- RISC Zero's zkVM implementation based on the RISC-V architecture
- *host* -- the system the zkVM runs on
- *guest* -- the system running inside the zkVM
- *host* program -- the host-native, untrusted portion of an application
- *prover* -- a program on the host that runs the trusted code to generate a receipt
- *verifier* -- a program on the host that verifies receipts
- *method* -- a single 'main' entry point for code that runs inside the zkVM
- *execute* -- run a method inside the zkVM and produce a receipt of correct execution
- *commit* -- append data to the journal
- *receipt* -- a record of correct execution, consisting of:
  - *method ID* -- a small unique identifier that identifies a method
  - *journal* -- all the things the method wants to publicly output and commit to, written to by the method, attached to receipt
  - *seal* -- the cryptographic blob which proves that the receipt is valid
- *verify* -- check that the receipt is valid, i.e. verify the seal
- theoretical nomenclature used in papers and internals of RISC Zero's zkVM implementation
  - *proof* -- the seal
  - *circuit* -- a mathematical construct that appears in one view as the "CPU" in the zkVM but on the other is part of the computation used to create proofs