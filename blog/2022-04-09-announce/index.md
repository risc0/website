---
slug: announce
title: Introducing RISC Zero
authors: [brianretford]
tags: [zk, oss]
---

We're excited to share a new kind of computing platform with the world – 
*one that can't lie about anything it does.* RISC Zero enables *any developer*
to build zero-knowledge proofs that can be *executed and verified on any modern
computer* in the languages they are most familiar with.

RISC Zero is the first fully **free-and-open-source general-purpose ZK computing
platform**. Our **prover and verifier** are [available under the Apache2
license](https://github.com/risc0/risc0), along with several simple but powerful
examples of this technology 
[written in Rust](https://github.com/risc0/risc0/tree/main/examples/rust) and 
C++.

# General Purpose Verifiable Computing

RISC Zero is a fully-compliant software implementation of the RISC-V 
microarchitecture (RV32IM). The RISC-V ISA is implemented as
a set of polynomial constraints inside a zk-STARK based proving
system.

## So RISC Zero is what, exactly?

RISC Zero is zero-knowledge virtual machine that can run on any platform.
It's a virtual microcontroller / co-processor that produces receipts for 
every program it runs, kind of like a secure virtual Adruino. These receipts can be verified at anytime by anyone 
in milliseconds – **even if you don't trust the party that executed the code.**


## How is it different from other ZK projects?

Our initial release of RISC Zero is different in a few critical ways:

 1. Both the prover and verifier are fully open. This means programs can be proven locally, preserving privacy and information hiding.
 2. The verifier has implementations in C++ and Rust. As such is can easily run on many different platforms and on many different blockchains.
 3. Because our ZKVM supports a standard ISA and looks like a normal von-Neumann machine, it is both familiar to a broad set of developers **and can be programmed using standard languages**.

# What's Next?

We are working on several exciting projects internally that will be announced, explained, and released over the coming months. Please join our [mailing list](https://risczero.com), [Discord](https://risczero.com) or follow us on [Twitter](https://twitter.com/risczero)
