---
sidebar_position: 1
---

# What is a Computational Receipt?

When a [method](../../key-terminology.md) executes inside the RISC Zero [zkVM](../zkvm/what_is_risc_zero.md), the zkVM produces a **computational receipt** along with the output. 

The receipt serves as a cryptographic authentication that the given method was executed faithfully. In particular, the receipt includes a **MethodID**, which serves as an identifier for a particular computational method and a **seal** which indicates that the associated execution trace satisfies the rules of the RISC-V ISA. 

By linking the MethodID to the asserted output of the computation, computational receipts offer a powerful new model for trust in software. The option to check a computational receipt opens the doors to the `era of verifiable computing`, where we use mathematics and science to bring trustable software into trustless environments. 

*For more information about RISC Zero's receipts, see the [Proof System Sequence Diagram](proof-system-sequence-diagram.md), the [Fibonacci Trace Validation Example](https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ1J5PcS2op_vrGtbK5Mif0gAN6wbAaTSWTHy2vuFtfbtqbI_dRqpalNamNjjUcyqD7hDPJRgI2cG-/pubhtml#) and the [STARKs reference page](../../reference-docs/about-starks.md).* 

