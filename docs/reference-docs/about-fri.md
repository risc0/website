# About the FRI Protocol 
At the core of our zero-knowledge proof system is an assertion that the Merkle roots committed in [Phase 1 and Phase 2](../explainers/proof-system/proof-system-sequence-diagram.md) correspond to low-degree polynomials. 

## Documentation 
- [TODO Find better link?](https://github.com/risc0/risc0/blob/7ce43267d787cbbc394562431d62c2c11997fd6b/risc0/zkvm/sdk/rust/verify/src/zkp/prove/fri.rs)

## Basic Function
*The FRI protocol offers an scalable method for checking whether a Merkle root corresponds to evaluations of a low degree polynomial.*

## Background 
`FRI = Fast Reed-Solomon Interactive Oracle Proof of Proximity.`

- `Fast` is a reference to the similarity between FRI and [FFTs](about-ntts-and-fourier.md)
- `Reed-Solomon Codes` are explained in Lesson 4 of [Constructing a Seal](TODO put link)
- `Proof of proximity` means proving that a Merkle root corresponds to an array that is `close` to a `valid block` (in terms of `Hamming Distance`). A `valid block` is a term from Reed-Solomon literature that means `evaluations of a low-degree polynomial`.
- `Interactive Oracale Proof` refers to the family of zero-knowledge proofs that includes zk-STARKs and zk-SNARKs. As in most applications of ZKP, RISC Zero use Fiat-Shamir for a non-interactive implementation of FRI.

## Inside the Algorithm
### A Bird's Eye View
The FRI protocol is a recursive process of `splitting` and `mixing`; each round cuts the assertion of low-degree-ness from an assertion that the degree is less than $d$ to an assertion the degree is less than $\frac{d}{2}$. With $\log_2(d)$ rounds of FRI, we can reduce the Verifier's computational burden to a trivial equality check. The RISC Zero protocol uses FRI until the degree equals $256$. 

### Making FRI Concrete
Consider the situation shown in the Fibonacci Trace example [TODO: Add link]. In this case, the Prover is asserting that the FRI polynomial $f_0$ is degree 7 or less. Without FRI, the Verifier would request evaluations of 9 test points. The Verifier would use 8 of those points to construct a potential degree 7 match (i.e., using an iNTT) and then check that potential match against the 9th test point. With this traditional mechanism of proving low-degree-ness, the Verifier runs an iNTT of an array 

> Enter FRI. 

With 4 rounds of FRI, the prover can recursively reduce $f_0$ to a degree 1 polynomial $f_3$. Rather than having to run an `iNTT` 8 points, the Vefifier can check directly that $f_3$ is linear and then work backwards through the recursion in order to conclude that $f_0$ had degree less than 8. At each step of the recursion, the Verifier just needs to check a Merkle branch. 

In the RISC Zero FRI implementation, FRI repeats until the FRI polynomial reaches degree $256$. 

## Suggested Reading
- [Low Degree Testing](https://medium.com/starkware/low-degree-testing-f7614f5172db), part 3 of the STARK Math series
- [Vitalik's FRI article](https://vitalik.ca/general/2017/11/22/starks_part_2.html)
- [The FRI paper](https://drops.dagstuhl.de/opus/volltexte/2018/9018/pdf/LIPIcs-ICALP-2018-14.pdf)