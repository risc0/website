---
sidebar_position: 1
---

# What is RISC Zero?

RISC Zero is a startup building the RISC Zero [`zero knowledge virtual machine`](../key-terminology.md) (ZKVM), a major step towards improving the security and trustworthiness of distributed applications. RISC Zero ZKVM (from here on referred to as the "VM") bridges the gap between zero knowledge proof (ZKP) research and widely-supported programming languages such as C++ and Rust. ZKP technology enables programs' output to carry proof of provenance and correct execution that can be cryptographically verified by a receiver without access to the programs' inputs. Stripping away the jargon this means the output of the program can be checked for correctness without seeing the inputs. This verifiability enables decentralization of applications that previously required a trusted third party, a game changer for the resilience and economics of operating the computing infrastructure that we all rely on.

Foundational work on SNARKs and STARKs shows the potential of ZKP-based compute, but to date building applications has required adopting new programming languages with sparse tooling support. `RISC Zero is removing those barriers by bringing existing languages, tools, and developer skills to ZKP development.` The way RISC Zero achieves this is by inventing a uniquely high-performance ZKP prover and then using the performance headroom to build a `zero knowledge virtual machine (ZKVM) implementing a standard RISC-V instruction set`. While difficult, emulating RISC-V makes possible compatibility with existing mature languages and toolchains. In concrete terms this looks like seamless integration between "host" application code written in a high level language running natively on the host processor (e.g. Rust on arm64 Mac) and "guest" code in the same language executing inside our ZKVM (e.g. Rust on RISC-V, specifically RV32IM). This is similar to the very successful pattern used in Nvidia's CUDA C++ toolchain, but with a ZKP engine in place of a GPU.

More detailed technical and theoretical materials are available by request.
<!-- TODO either release paper or put e-mail address here -->