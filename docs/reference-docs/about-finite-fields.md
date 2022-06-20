# About Finite Fields 
*RISC Zero's [computational receipts](../explainers/proof-system/what_is_a_receipt.md) are built by converting an assertion of computational integrity into an assertion about polynomials over finite fields. This document serves as a minimal introduction to finite fields, targeted at folks who have some exposure to modular arithmetic and who are curious to learn more about the [math and cryptography behind RISC Zero](https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ1J5PcS2op_vrGtbK5Mif0gAN6wbAaTSWTHy2vuFtfbtqbI_dRqpalNamNjjUcyqD7hDPJRgI2cG-/pubhtml#).*  

## Finite Fields 101: Reciprocals, Exponents, and Generators
Loosely speaking, a **field** is a set of elements for which addition, subtraction, multiplication, and division work cleanly.  

Here's what we mean by division working cleanly: for any field element $x$, we should be able to find a field element $x^{-1}$ such that $x\cdot x^{-1}\equiv1.$ We call $x^{-1}$ the *reciprocal* of $x$ or the *multiplicative inverse* of $x$. 

`Example: The integers are not a field because the reciprocal of 3 is not an integer.`

`Example: The integers modulo 5 are a field. In this field, the reciprocal of 2 is 3. 4 is its own reciprocal.`

If $p$ is prime, the integers modulo $p$ are a field. Moreover, I can find some element $g$ and write all the integers modulo $p$ as powers of $g$. 

`Example: The integers modulo 5 can all be written as a power of 3.`

We say $3$ is a **multiplicative generator** for the integers modulo 5. For any prime modulus, a multiplicative generator exists.

## Finite Fields 201: Polynomials over Finite Fields
Most of your Algebra II knowledge about polynomials still holds in finite fields. 

`Example: Consider` $f(x)=x^2-1\text{ mod }5$`.  Observe that ` $f(1)=f(4)=0.$ `We say ` $f$ `has roots at 1 and 4, and we can factor in the familiar way:` $f(x)=(x-1)(x-4)$`.`

`Example: 
Given three ordered pairs modulo 5, we can interpolate a degree 2 polynomial that passes through each point.`

FFTs still work over finite fields, although they're called NTTs. 

>If the ideas above this text make sense, you should have enough finite field background to make sense of the applications in RISC Zero.

## Finite Fields 301 - Roots of Unity

$z$ is called an **$n^{th}$ Root of Unity** if $z^n=1$. 

`Example: 3 is a 4th root of unity modulo 5.`

Roots of unity come up constantly in a wide variety of applications: you'll most frequently see the $n^{th}$ root of unity written as $e^\frac{2\pi i}{n}$, and they come up so frequently because they give an easy way to describe rotations. This is what [Euler's Formula](https://www.youtube.com/watch?v=mvmuCPvRoWQ) is about. 

`Example: Multiplying by `$i$ ` is a rotation of order 4 in ` $\mathbb{C}$`. More generally, multiplying by a 4th root of unity is a rotation of order 4.`

## Additional References:
- [Visual Intro to Galois Theory](https://www.youtube.com/watch?v=Ct2fyigNgPY)
- [Splitting $x^{n}-1$ over a finite field](https://math.stackexchange.com/questions/2511486/)
