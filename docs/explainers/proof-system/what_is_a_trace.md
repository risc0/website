---
sidebar_position: 2
---

# What is an Execution Trace? 

When a piece of code runs on a machine, the **execution trace** is a complete record of the computation: a snapshot of the full state of the machine at each clock cycle of the computation. 

It's typical to write an execution trace as a rectangular array, where each row shows the complete state of the machine at a given moment in time, and each column shows a temporal record of some particular aspect of the computation (say, the value stored in a particular RISC-V register) at each clock cycle. A line-by-line analysis of the trace allows for a computational audit with respect to the program instructions and the underlying computer architecture. 

`RISC Zero's computational receipts use cutting-edge technology to audit an execution trace while preserving computational privacy.`

*For more technical description of the process of creating a computational receipt, see the [proof system sequence diagram](proof-system-sequence-diagram.md), the [seal construction explainer](https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ1J5PcS2op_vrGtbK5Mif0gAN6wbAaTSWTHy2vuFtfbtqbI_dRqpalNamNjjUcyqD7hDPJRgI2cG-/pubhtml#) and the [STARKs reference page](../../reference-docs/about-starks.md).* 