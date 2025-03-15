---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

<!--###########################################################################################################################
##############################################################################################################################
#############################################################################################
-->

+++

(U2)=
# Unidad 2

+++

## Límites

Sea $f:D\subseteq \mathbb{R}^n\to\mathbb{R}$ una función definida en un conjunto abierto $D$ de $\mathbb{R}^n.$ Sea ${\bf x}_0$ un punto en $D$ o bien un punto en la frontera de $D.$ Se dice que el límite de $f$ cuando ${\bf x}$ tiende a ${\bf x}_0$ es $L\in \mathbb{R}$, lo que se escribe como 

$$
\lim_{{\bf x}\to {\bf x}_0}f({\bf x})=L,
$$ (limite)

si dado cualquier $\varepsilon >0$ existe $\delta >0$ tal que

$$
0< || {\bf x} - {\bf x}_0|| < \delta, \, {\bf x} \in D \Rightarrow |f({\bf x}) - L| < \varepsilon,
$$

Explícitamente para $\mathbb{R}^{2}:$ Cuando $f:D\subseteq \mathbb{R}^2 \to \mathbb{R}$ y $(x_0,y_0)$ es un punto de $D$ o bien un punto frontera de $D$ se dice que el límite de $f$ cuando $(x,y)$ tiende a $(x_0,y_0)$ es $L$ si:

Para todo $\varepsilon>0$ existe $\delta>0$ tal que

$$
0< || (x,y) - (x_{0},y_{0})|| < \delta, \, (x,y) \in D \Rightarrow |f(x,y) - L| < \varepsilon,
$$

lo que es equivalente a 

$$
0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta, \, (x,y) \in D\, \Rightarrow |f(x,y)-L|<\varepsilon.
$$

La interpretación geométrica de 

$$
\lim_{(x,y)\to (x_0,y_0)}f(x,y)=L
$$ 

es como en la figura:

```{figure} f1_03.png
---
height: 400px
name: Limite
---
Interpretación Límites
```

```{admonition} Ejercicio 
Use las desigualdades:

1. $|x-a|\leq \sqrt{(x-a)^2+(y-b)^2}$

2. $|x+y|\leq |x|+|y|,$ 

para todo $x,y,a\in \mathbb{R}$, para demostrar que 

$$
\lim_{(x,y)\to(1,2)}(2x+3y)=8.
$$
```

### Teoremas y Álgebra de Límites

Al igual que en una variable, tenemos el teorema de unicidad del límite:

**Teorema de Unicidad**. Si $\displaystyle \lim_{{\bf x}\to{\bf x}_0}f({\bf x})=L$ y $\displaystyle \lim_{{\bf x}\to{\bf x}_0}f({\bf x})=M$ entonces $L=M.$

Es decir, si el límite de una función en un punto es único. Esto permite deducir una propiedad útil para **probar que un límite no existe**. Intuitivamente:

"Si una función tiene diferentes límites cuando ${\bf x}\to {\bf x}_0$ a través de conjuntos diferentes de puntos (distintas trayectorias), entonces $\displaystyle \lim_{{\bf x}\to {\bf x}_0}f({\bf x})$ no existe." 

Por ejemplo, considere la función $f:\mathbb{R}^{2}-\{(0,0)\}\to \mathbb{R}$ y supongamos que deseamos calcular el límite

$$
\lim_{(x,y)\to (0,0)}f(x,y)
$$

Si existen dos trayectorias $C_{1},C_{2}$ **contenidas en el dominio de $f$** tal que 

$$
\lim_{(x,y)_{\overrightarrow{C_1}} (0,0)} f(x,y)\neq \lim_{(x,y)_{\overrightarrow{C_2}} (0,0)} f(x,y)\Rightarrow\lim_{(x,y)\to (0,0)}f(x,y),
$$

no existe.

```{figure} Trayectoria.png
---
height: 300px
name: Trayectoria
---
Trayectorias
```

```{admonition} Ejercicio 
Estudie $\displaystyle \lim_{(x,y)\to (0,0)} \dfrac{xy}{x^2+y^2}.$
```

Para calcular límites, tenemos los siguientes teoremas:

**Teorema (Álgebra de Límites)**. Si $\displaystyle \lim_{(x,y)\to (x_0,y_0)} f(x,y)=L$ y $\displaystyle \lim_{(x,y)\to (x_0,y_0)} g(x,y)=M$, entonces

1. $\displaystyle \lim_{(x,y)\to (x_0,y_0)} \left(f(x,y)+g(x,y)\right)=L+M.$

2. $\displaystyle \lim_{(x,y)\to (x_0,y_0)} \left(f(x,y)\cdot g(x,y)\right)=L\cdot M.$

3. Si $M\neq 0$, entonces $\displaystyle \lim_{(x,y)\to (x_0,y_0)} \frac{f(x,y)}{g(x,y)}=\frac{L}{M}.$

**Teorema de Acotamiento (Sandwich)**. Si para todo $(x,y)$ enuna vecindad de $(x_0,y_0)$, se tiene que

$$
h(x,y)\leq f(x,y) \leq g(x,y),~ \lim_{(x,y)\to (x_0,y_0)} h(x,y)=L
$$

$\displaystyle \lim_{(x,y)\to (x_0,y_0)} h(x,y)=L$ y $\displaystyle \lim_{(x,y)\to (x_0,y_0)} g(x,y)=L$, entonces 

$$
\lim_{(x,y)\to (x_0,y_0)} f(x,y)=L
$$

```{admonition} Ejercicio 
Calcule el valor de $\displaystyle \lim_{(x,y)\to (0,0)} \dfrac{\cos (y) \sin(x^3)}{x^2+y^4}.$
```

**Observación:** Probar que 

$$
\lim_{(x,y)\to (x_{0},y_{0})}f(x,y)=L
$$ 

es equivalente a probar que 

$$
\lim_{(x,y)\to (x_{0},y_{0})}|f(x,y)-L|=0.
$$

Luego, si tenemos un candidato a límite $L$ para una función $f,$ podemos usar el de Teorema de acotamiento para probar que la función $|f(x,y)-L|$ tiende a 0.

### Coordenadas Polares

Otra forma de estudiar la existencia del límite $\displaystyle \lim_{(x,y)\to(0,0)}f(x,y)$ es mediante el cambio de variable $x=r\cos(\theta),$ $y=\sin(\theta),$ resultando la expresión 

$$
\lim_{r\to 0}F(r,\theta)=\lim_{r\to 0}f(r\cos\theta,r\sin\theta)
$$ (LimPolares)

**Teorema**. Suponga que $F(r,\theta)$ se puede descomponer como $F(r,\theta)=H(r)G(\theta)$, donde además $\displaystyle \lim_{r\to 0}H(r)=0$. Entonces 

$$
\lim_{(x,y)\to (0,0)} f(x,y)=\lim_{r\to 0}F(r,\theta)=0
$$ 

si y solo si la función $G(\theta)$ est\'a acotada en $[0,2\pi].$

En particular, si el límite 

$$
\lim_{r\to0} f(r\cos\theta,r\sin\theta)
$$ 

no existe o depende de $\theta,$  entonces $\displaystyle \lim_{(x,y)\to (0,0)} f(x,y)$ no existe.

**Nota**. Es importante mencionar que las coordenadas polares se pueden aplicar siempre y cuando el límite sea cuando $(x,y)$ tienda al origen.

```{admonition} Ejercicio 
Calcule $\displaystyle \lim_{(x,y)\to (0,0)}\dfrac{x^2y^2}{x^2+y^2}$
```

`````{admonition} Ejercicio Propuesto
:class: warning
Analice la existencia de los siguientes límites. Si el límite no existe justifique, de lo contrario determine su valor.

a. $\displaystyle \lim_{(x,y)\to (0,0)}\dfrac{x^2y}{x^4+y^2}$

b. $\displaystyle \lim_{(x,y)\to(0,0)}\dfrac{x^4y^4}{(x^2+y^4)^3}$
`````

## Continuidad

Conociendo el concepto de límite de funciones en varias variables y todo sus teoremas asociados, podemos entender el concepto de continuidad:

**Definición**.  Sea $f:D\subseteq \mathbb{R}^n\to \mathbb{R}$ una función definida en un subconjunto $D$. Se dice que $f$ es **continua** en ${\bf x}_0\in D$ si 

$$
\lim_{{\bf x}\to {\bf x}_0}f({\bf x})=f({\bf x}_0)
$$ (continuidad)

Si la función $f$ no es continua en ${\bf x_0}$, se dice que es discontinua en ese punto.

Si $f$ una función definida en $D$,  se dice que $f$ es continua en $D$ si lo es $\forall~{\bf x}\in D.$

### Teoremas de Continuidad

Sean $f,g:D\subseteq \mathbb{R}^n\to \mathbb{R}$ funciones definidas en $D$. Si $f$ y $g$ son continuas en ${\bf x}_0$, entonces 

1. $f+g$ es continua en ${\bf x}_0.$

2. $f\cdot g$ es continua en ${\bf x}_0.$

3. Si $g({\bf x}_0)\neq 0$ entonces $\dfrac{f}{g}$ es continua en ${\bf x}_0.$

4. Si $h:I\subseteq \mathbb{R}\to \mathbb{R}$ es continua y $h\circ f$ está bien definida, entonces $h\circ f$ es continua en ${\bf x}_0$

```{admonition} Ejercicio 
$f:\mathbb{R}^2\to \mathbb{R}$ definida por 

$$
f(x,y)=\left\{\begin{array}{ccc}
\dfrac{2x^{8}+x^4y^2+2y^{4}}{x^8+y^4} & \textrm{si} & (x,y)\neq (0,0)\\
% & & \\
0 & \textrm{si} & (x,y)=(0,0)
\end{array}\right.
$$

Determine si $f$ es continua en $\mathbb{R}^{2}.$
```

`````{admonition} Ejercicio Propuesto
:class: warning

Sea $f:\mathbb{R}^2\to\mathbb{R}$ definida por 

$$
f(x,y)=\left\{\begin{array}{ccc}
x^2+4y^2 & \text{si} & x^2+4y^2\leq 1\\
1 & \text{si} & x^2+4y^2> 1\\
\end{array}\right.
$$

Demuestre que $f$ es continua en todo $\mathbb{R}^2.$
`````