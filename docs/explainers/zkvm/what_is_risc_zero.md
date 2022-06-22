---
sidebar_position: 1
---

# What is RISC Zero?
<!--Author: Choong April 18, 2022
Edits: Paul April 30, 2022
Edits: Kalen June 22, 2022-->

*In this document, we introduce the* **RISC Zero zkVM**, *an open-source, zero-knowledge virtual machine that allows you to build **trustless, verifiable software** in your favorite languages. To install RISC Zero on your machine, head to the [RISC0 GitHub README](https://github.com/risc0/risc0#readme).* <br/>
> WARNING: This software is still experimental, we do not recommend it for production use.

RISC Zero is a startup building the RISC Zero [`zero-knowledge virtual machine`](../../key-terminology.md) (zkVM) as a major step towards improving the security and trustworthiness of distributed applications. RISC Zero zkVM bridges the gap between zero-knowledge proof (ZKP) research and widely-supported programming languages such as C++ and Rust. ZKP technology enables programs' output to carry proof of provenance and correct execution that can be cryptographically verified by a receiver without access to the programs' inputs. Stripping away the jargon, this means that the output of the program can be checked for correctness by someone who cannot see its inputs. This verifiability allows applications to be decentralized that previously required a trusted third party, a game changer for the resilience and economics of operating the computing infrastructure we all rely on.

Foundational work on SNARKs and [STARKs](../../reference-docs/about-starks.md) shows the potential of ZKP-based computations, but to date, building applications has required the adoption of new programming languages with sparse tooling support. `RISC Zero is removing those barriers by bringing existing languages, tools, and developer skills to ZKP development.` RISC Zero is acheiving this by inventing a uniquely high-performance ZKP prover and then using the performance headroom to build a `zero-knowledge virtual machine (zkVM) that implements a standard RISC-V instruction set`. Although difficult, emulation of RISC-V makes compatibility possible with existing mature languages and toolchains. In concrete terms, this looks like seamless integration between "host" application code written in a high level language running natively on the host processor (e.g. Rust on arm64 Mac) and "guest" code in the same language executing inside our zkVM (e.g. Rust on RISC-V, and specifically RV32IM). This is similar to the very successful pattern used in Nvidia's CUDA C++ toolchain, but with a ZKP engine in place of a GPU.

More detailed technical and theoretical materials are available by request.
<!-- TODO either release paper or put e-mail address here  -->