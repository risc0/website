---
sidebar_position: 2
---

# Overview of the zkVM

*To invite collaboration and open source development, this is an early-release of documentation-in-progress. If you have questions/feedback or if you find errors, please let us know on Twitter or Discord.*

A zero-knowledge virtual machine (zkVM) is a virtual machine that runs trusted code and generates proofs that authenticate the zkVM output.  RISC Zero's [zkVM](what_is_risc_zero.md) implementation, based on the RISC-V architecture, executes code and produces a [computational receipt](../proof-system/what_is_a_receipt.md).

This document describes, at a high level, the components involved in this process. After reading this, you should understand the general process of receipt creation and be familiar with the language we use to describe the zkVM's operations. To understand how these operations generate an argument of computational integrity, see our introduction to the [proof system](../proof-system/proof-system-sequence-diagram.md).

In a RISC Zero zkVM program, guest code written for the zkVM is compiled to an ELF binary and executed by the `prover`, which returns a computational receipt to the host program, as shown in the following Rust code snippet from the [RISC Zero Rust starter example](https://github.com/risc0/risc0-rust-starter/):

```
    let receipt = prover.run().unwrap();
```

Anyone with a copy of the receipt can verify the program's execution and read its publicly shared outputs. The diagram below illustrates the components involved in this process, which is described in greater detail below.

```mermaid
flowchart LR
A(Source code)-->|compiles to an|B(ELF binary)
B-->|Whose execution produces a| C(Trace)
B-->|Whose hash forms a unique| D(Method ID)
C-->|That, if valid,<br>generates a|E(Cryptographic seal)
B-->|Whose operations can include<br>committing values to a|F(Journal)
subgraph Together, these form a receipt.
D
E
F
end
subgraph x[The receipt tells us:]
D---G(What binary executed in the zkVM)
E---H(Whether the execution<br>followed expected behavior<br><br>Whether the journal or method ID<br>have changed)
F---I(The values of all contents<br>written to the public journal)
end
style x fill:none, stroke:none
style G fill:none,stroke:none
style H fill:none,stroke:none
style I fill:none,stroke:none
```

Before being executed on the zkVM, guest source code is converted into a RISC-V ELF binary. A hash of the binary file is used to create a `method ID` that uniquely identifies the binary being executed. The method ID is added to the `computational receipt`. The binary may include code instructions to publicly commit a value to the `journal`. Later, the journal contents can be read by anyone with the receipt.

After the binary is executed, an [execution trace](../proof-system/what_is_a_trace.md) contains a complete record of zkVM operation. The trace is inspected and the ELF file's instructions are compared to the operations that were actually performed. A valid trace means that the ELF file was faithfully executed according to the rules of the RISC-V instruction set architecture.

The trace, the journal, and the method ID are then used to generate a seal, a blob of cryptographic data that shows the receipt is valid. The seal has properties that reveal whether itself, the method ID, or the journal have been altered. When the receipt is verified, the seal will be checked to confirm the validity of the receipt.