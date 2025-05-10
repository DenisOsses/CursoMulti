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

(U5)=
# Unidad 5

+++

## Integración Múltiple

En este capítulo estudiaremos integrales para funciones de varias variables, especialmente en 2 y 3 variables. Como notaremos, su proceso de construcción es completamente análogo al de la [Integral de Riemann](https://en.wikipedia.org/wiki/Riemann_integral) para funciones de una variable que se construyó en el curso de Cálculo Integral. A continuación, comenzamos con las integrales dobles.

### Construcción de Integrales Dobles sobre Rectángulos

Consideremos la función $f$ definida sobre el rectángulo $R$:

```{figure} IntDoble1.png
---
height: 250px
name: IntDoble1
---
Integral doble sobre un dominio rectangular $R$ para $f$
```

Es decir, $z=f(x,y)$ definida sobre un rectángulo cerrado 

$$
R=[a,b]\times[c,d]=\{(x,y)\in\mathbb{R}^2:a\leq x\leq b, c\leq y\leq d\}.
$$ (IntRect) 

Supongamos inicialmente que $f(x,y)\geq0$. Recordemos que el gráfico de $f$ es una superficie en el espacio que encierra un sólido $S$ sobre $R$ y bajo el gráfico de $z=f(x,y)$. 

Nuestro objetivo es encontrar el volumen del sólido $S$.

Procedemos de modo análogo a la construcción de la integral de Riemann en 1 variable.

```{figure} IntDoble2.png
---
height: 250px
name: IntDoble2
---
Partición del dominio rectangular $R$ en $mn$ subrectángulos
```

Dividimos el rectángulo $R$ en subrectángulos $R_{ij}$ que se forman dividiendo $[a,b]$ en $m$ subintervalos $[x_{i-1},x_i]$ del mismo ancho $\Delta x=\frac{b-a}{m}$, y dividiendo $[c,d]$ en $n$ subintervalos $[y_{j-1},y_j]$ del mismo ancho $\Delta y=\frac{d-c}{n}$. Los subrectángulos son 

\begin{eqnarray*}
R_{ij} &=& [x_{i-1},x_i]\times[y_{j-1},y_j]\\
&=& \{(x,y)\in\mathbb{R}^2:x_{i-1}\leq x\leq x_i, y_{j-1}\leq y\leq y_j\}\
\end{eqnarray*} 

cada uno con área $\Delta A=\Delta x\Delta y$. 

```{figure} IntDoble3.png
---
height: 250px
name: IntDoble3
---
Elección de un punto de muestra genérico $f(x_{ij}^\ast,y_{ij}^\ast)$ en el subrectángulo $R_{ij}$
```

Elegimos un punto de muestra $(x_{ij}^\ast,y_{ij}^\ast)$ en cada subrectángulo $R_{ij}$ para tener la altura $f(x_{ij}^\ast,y_{ij}^\ast)$ de la caja que se forma sobre $R_{ij}$ y bajo la superficie $z=f(x,y)$. Esta caja tiene volumen aproximado 

$$
f(x_{ij}^\ast,y_{ij}^\ast)\Delta A.
$$ 

Luego, el volumen del sólido $S$ puede ser aproximado como 

$$
V\approx\sum_{i=1}^m\sum_{j=1}^nf(x_{ij}^\ast,y_{ij}^\ast)\Delta A.
$$ 

```{figure} IntDoble4.png
---
height: 250px
name: IntDoble4
---
Volumen aproximado por $mn$ subrectángulos
```

### Integral Doble

La **integral doble** de $f$ sobre el rectángulo $R$ es 

$$
\iint_R f(x,y)~dA=\lim_{m,n\to\infty}\sum_{i=1}^m\sum_{j=1}^nf(x_{ij}^\ast,y_{ij}^\ast)\Delta A
$$ (IntDoble)

si tal límite existe.

Si $f(x,y)\geq0$ entonces $\displaystyle\iint_R f(x,y)~dA$ corresponde al volumen del sólido $S$ sobre el rectángulo $R$ y bajo la superficie $z=f(x,y)$.

### Propiedades de la Integral

1. $\displaystyle\iint_R \big(f(x,y)+g(x,y)\big)~dA=\iint_R f(x,y)~dA+\iint_R g(x,y)~dA.$

2. $\displaystyle\iint_R cf(x,y)~dA=c\iint_R f(x,y)~dA~~,~~c~~\text{constante}.$ 

3. $\displaystyle\text{Si}~f(x,y)\geq g(x,y)~\text{para todo}~(x,y)\in R~\text{entonces}$ 

$$
\iint_R f(x,y)~dA\geq\iint_R g(x,y)~dA.
$$

### Teorema de Fubini (Integrales Iteradas)

Si $f$ es continua y acotada en el rectángulo cerrado $R=\{(x,y)\in\mathbb{R}^2:a\leq x\leq b, c\leq y\leq d\}$, salvo en un número finito de curvas suaves, entonces $f$ es integrable en $R$ y 

$$
\iint_R f(x,y)~dA=\int_a^b\int_c^d f(x,y)~dydx=\int_c^d\int_a^b f(x,y)~dxdy
$$ (Fubini)

```{figure} Fubini1.png
---
height: 200px
name: Fubini1
---
Área sección transversal $A(x)$
```
```{figure} Fubini2.png
---
height: 200px
name: Fubini
---
Área sección transversal $A(y)$
```

```{admonition} Ejercicio 
Calcule las siguientes integrales dobles:

1. $\displaystyle\int_1^2\int_0^\pi y\cos(xy)~dxdy$.

2. $\displaystyle\int_{-1}^4\int_1^2 x+y^2~dydx$.

3. $\displaystyle\int_0^1\int_0^1 xe^{xy}~dydx$.

4. $\displaystyle\int_0^3\int_0^1 2x\sqrt{x^2+y}~dxdy$.
```

## Integrales Dobles sobre Regiones Generales

Consideremos una función de dos variables $z=f(x,y)$ definida sobre un dominio $D$ acotado cualquiera.

```{figure} IntDobleGen1.png
---
height: 200px
name: Gen1
---
Gráfico de $f$
```

Podemos encerrar a $D$ en un rectángulo $R$.  Definimos la nueva función sobre el rectángulo $R$: 

$$
F(x,y)=\left\{\begin{array}{ccc}
     f(x,y)& \text{si} & (x,y)\in D\\
     0& \text{si} & (x,y)\in R-D
\end{array}\right.
$$

```{figure} IntDobleGen2.png
---
height: 200px
name: Gen2
---
Gráfico de $F$, extensión de $f$ a un rectángulo
```

Si F es integrable sobre $R$, la **integral doble** de $f$ sobre $D$ es 

$$
\iint_D f(x,y)~dA=\iint_R F(x,y)~dA.
$$ 

El procedimiento usado es razonable ya que los valores de $F(x,y)$ son 0 cuando $(x,y)$ está fuera de $D$ y no contribuyen a la integral. Nos enfocaremos en regiones generales de los siguientes tipos:

### Regiones Tipo I

Una región plana $D$ es de **tipo I** si se encuentra encerrada por las gráficas de dos funciones continuas de $x$, es decir, 

$$
D=\{(x,y)\in\mathbb{R}^2:a\leq x\leq b,~g_1(x)\leq y\leq g_2(x)\}.
$$ (TipoI)

```{figure} IntDobleGen3.png
---
height: 200px
name: Gen3
---
Región Tipo I
```

**Teorema**. Si $f$ es continua sobre una región $D$ de tipo I entonces 

$$
\iint_D f(x,y)~dA=\int_a^b\int_{g_1(x)}^{g_2(x)}f(x,y)~dydx
$$

```{admonition} Ejercicio 
Si $D$ es la región del plano acotada por $y=x$ e $y=x^2$ calcule 

$$
\iint_D(x^2+y^2)~dA.
$$
```

### Regiones Tipo II

Una región plana $D$ es de **tipo II** si se encuentra encerrada por las gráficas de dos funciones continuas de $y$, es decir, 

$$
D=\{(x,y)\in\mathbb{R}^2:h_1(y)\leq x\leq h_2(y),~c\leq y\leq d\}.
$$ (TipoII)

```{figure} IntDobleGen4.png
---
height: 200px
name: Gen4
---
Región Tipo II
```

**Teorema**. Si $f$ es continua sobre una región $D$ de tipo II entonces 

$$
\iint_D f(x,y)~dA=\int_c^d\int_{h_1(y)}^{h_2(y)}f(x,y)~dxdy
$$

```{admonition} Ejercicio 
Si $D$ es la región del plano acotada por $x=y^2$ y $x=2$ calcule 

$$
\iint_D xy~dA.
$$
```

```{admonition} Ejercicio 
Calcule $\displaystyle\int_0^1\int_x^1\sin(y^2)~dydx.$
```

`````{admonition} Ejercicio Propuesto
:class: warning
Al evaluar una integral doble sobre una región $D$, se obtuvo una suma de integrales como sigue 

$$
\iint_D f(x,y)~dA=\int_0^1\int_0^{2y} f(x,y)~dxdy+\int_1^3\int_0^{3-y} f(x,y)~dxdy.
$$ 
Bosqueje la región $D$ y exprese la integral doble como una integral con orden inverso de integración.
`````

## Integrales Triples

### Construcción de Integrales Triples sobre Cajas

Sea $w=f(x,y,z)$ una función de 3 variables definida sobre una caja cerrada $B$, donde 

\begin{eqnarray*}
B&=&[a,b]\times[c,d]\times[r,s]\\
&=&\{(x,y,z)\in\mathbb{R}^3:a\leq x\leq b, c\leq y\leq d, r\leq z\leq s\}.
\end{eqnarray*}

```{figure} Triple1.png
---
height: 200px
name: Triple1
---
Caja $B$
```

Para definir una **integral triple** de $f$ sobre $B$, dividimos la caja $B$ en subcajas $B_{ijk}$ que se forman dividiendo $[a,b]$ en $l$ subintervalos $[x_{i-1},x_i]$ del mismo ancho $\Delta x$, $[c,d]$ en $m$ subintervalos $[y_{j-1},y_j]$ del mismo ancho $\Delta y$, y dividiendo $[r,s]$ en $n$ subintervalos $[z_{k-1},z_k]$ del mismo ancho $\Delta z$. Las subcajas son 

\begin{eqnarray*}
B_{ijk}&=&[x_{i-1},x_i]\times[y_{j-1},y_j]\times[z_{k-1},z_k]
\end{eqnarray*} 

cada una con volumen $\Delta V=\Delta x\Delta y\Delta z.$. 

```{figure} Triple2.png
---
height: 200px
name: Triple2
---
Subcaja genérica $B_{ijk}$
```

Elegimos un punto de muestra $(x_{ijk}^\ast,y_{ijk}^\ast,z_{ijk}^\ast)$ en cada subcaja $B_{ijk}$ para tener la altura $f(x_{ijk}^\ast,y_{ijk}^\ast,z_{ijk}^\ast)$ de la hipercaja que se forma sobre $B_{ijk}$ y bajo $w=f(x,y,z)$. Esta hipercaja tiene hipervolumen aproximado 

$$
f(x_{ijk}^\ast,y_{ijk}^\ast,z_{ijk}^\ast)\Delta V.
$$ 

Luego, el hipervolumen puede ser aproximado como 

$$
\sum_{i=1}^l\sum_{j=1}^m\sum_{j=1}^n f(x_{ijk}^\ast,y_{ijk}^\ast,z_{ijk}^\ast)\Delta V.
$$

### Integral Triple

La **integral triple** de $f$ sobre la caja $B$ es 

$$
\iiint\limits_B f(x,y,z)~dV=\lim_{l,m,n\to\infty}\sum_{i=1}^l\sum_{j=1}^m\sum_{j=1}^n f(x_{ijk}^\ast,y_{ijk}^\ast,z_{ijk}^\ast)\Delta V
$$ (IntCaja)

si tal límite existe.

Al igual que para las integrales dobles, el método para evaluar integrales triples sobre cajas es expresarlas como integrales iteradas de la siguiente manera.

### Teorema de Fubini para Integrales Triples

Si $f$ es continua sobre la caja $B=[a,b]\times[c,d]\times[r,s]$ entonces 

$$
\iiint\limits_B f(x,y,z)~dV=\int_r^s\int_c^d\int_a^b f(x,y,z)~dx~dy~dz
$$ (FubiniTriple)

```{admonition} Ejercicio 
Calcule $\displaystyle\iiint\limits_E(xy+z^2)~dV$ donde $E=\{(x,y,z)\in\mathbb{R}^3:0\leq x\leq 2,0\leq y\leq 1,0\leq z\leq 3\}$
```

## Integrales Triples sobre Regiones Generales

Una **integral triple sobre una región acotada general** $E$ en el espacio tridimensional se define análogamente a las integrales dobles: Se encierra $E$ en una caja $B$, después se define una función $F$ de modo que concuerda con $f$ sobre $E$, pero es cero para puntos en $B-E$. Luego, 

$$
\iiint\limits_E f(x,y,z)~dV=\iiint\limits_B F(x,y,z)~dV
$$ (IntTripleGen)

Esta integral existe si $f$ es continua y la frontera de $E$ es suave. Nos enfocaremos en funciones continuas $f$ y ciertos tipos de regiones simples.

### Regiones Tipo 1

Se dice que una región sólida $E$ es **tipo 1** si está entre las gráficas de dos funciones continuas de $x$ e $y$, es decir,

```{figure} TripleTipo1.png
---
height: 200px
name: TripleTipo1
---
Región Tipo 1
```

donde 

$$
E=\{(x,y,z)\in\mathbb{R}^3: (x,y)\in D, u_1(x,y)\leq z\leq u_2(x,y)\}
$$

y $D$ es la proyección de $E$ sobre el plano $XY$. Se puede demostrar que: 

$$
\iiint\limits_E f(x,y,z)~dV=\iint\limits_D\left[\int_{u_1(x,y)}^{u_2(x,y)}f(x,y,z)~dz\right]dA
$$

Si la proyección de sobre el plano $XY$ es una región plana tipo I, donde $g_1(x)\leq y\leq g_2(x)$, $a\leq x\leq b$

```{figure} TripleTipo1-1.png
---
height: 200px
name: TripleTipo1
---
Región Tipo 1, con proyección $D$ correspondiente a una región plana Tipo I
```

entonces

$$
\iiint\limits_E f(x,y,z)~dV=\int_a^b\int_{g_1(x)}^{g_2(x)}\int_{u_1(x,y)}^{u_2(x,y)}f(x,y,z)~dz~dy~dx
$$

Si la proyección de sobre el plano $XY$ es una región plana tipo II, donde $h_1(y)\leq x\leq h_2(y)$, $c\leq y\leq d$

```{figure} TripleTipo1-2.png
---
height: 200px
name: TripleTipo2
---
Región Tipo 1, con proyección $D$ correspondiente a una región plana Tipo II
```

entonces

$$
\iiint\limits_E f(x,y,z)~dV=\int_c^d\int_{h_1(y)}^{h_2(y)}\int_{u_1(x,y)}^{u_2(x,y)}f(x,y,z)~dz~dx~dy
$$

```{admonition} Ejercicio 
Calcule $\displaystyle\iiint\limits_E 6xy~dV$ donde $E$ yace bajo el plano $z=1+x+y$, y arriba de la región en el plano $XY$ acotado por las curvas $y=\sqrt{x}$, $y=0$, $x=1$.
```

### Regiones Tipo 2

Se dice que una región sólida $E$ es **tipo 2** si está entre las gráficas de dos funciones continuas de $z$ e $y$

```{figure} TripleTipo2.png
---
height: 200px
name: TripleTipo2
---
Región Tipo 2, con proyección $D$
```

donde

$$
E=\{(x,y,z)\in\mathbb{R}^3: (y,z)\in D, u_1(y,z)\leq x\leq u_2(y,z)\}
$$

y $D$ es la proyección de $E$ sobre el plano $YZ$. Se puede demostrar que: 

$$
\iiint\limits_E f(x,y,z)~dV=\iint\limits_D\left[\int_{u_1(y,z)}^{u_2(y,z)}f(x,y,z)~dx\right]dA
$$

Puede haber dos expresiones posibles para la integral anterior, dependiendo de si $D$ es una región plana Tipo I o Tipo II.

### Regiones Tipo 3

Se dice que una región sólida $E$ es tipo 3 si está entre las gráficas de dos funciones continuas de $x$ y $z$

```{figure} TripleTipo3.png
---
height: 200px
name: TripleTipo3
---
Región Tipo 3, con proyección $D$
```

donde

$$
E=\{(x,y,z)\in\mathbb{R}^3: (x,z)\in D, u_1(x,z)\leq y\leq u_2(x,z)\}
$$

y

$D$ es la proyección de $E$ sobre el plano $XZ$. Se puede demostrar que: 

$$
\iiint\limits_E f(x,y,z)~dV=\iint\limits_D\left[\int_{u_1(x,z)}^{u_2(x,z)}f(x,y,z)~dy\right]dA
$$ 

Puede haber dos expresiones posibles para la integral anterior, dependiendo de si $D$ es una región plana Tipo I o Tipo II.

```{admonition} Ejercicio 
Calcule $\displaystyle\iiint\limits_E z~dV$ donde $E$ está acotada por el cilindro $y^2+z^2=9$ y los planos $x=0$, $y=3x$, y $z=0$ en el primer octante.
```

```{admonition} Ejercicio 
Calcule $\displaystyle\iiint\limits_T xyz~dV$ donde $T$ es el tetraedro sólido con vértices $(0, 0, 0)$, $(1, 0, 0)$, $(1, 1, 0)$ y $(1, 0, 1)$.
```

`````{admonition} Ejercicio Propuesto
:class: warning
La figura muestra la región de integración para la integral 

$$
\int_0^1\int_0^{1-x^2}\int_0^{1-x}f(x,y,z)~dydzdx.
$$ 
Reescriba en los otros cinco órdenes esta integral como una integral iterada equivalente. 
`````

```{figure} TripleEjercicio.png
---
height: 200px
name: TripleTipo3
---
Región Ejercicio Propuesto
```

## Teorema General del Cambio de Variables

### Transformaciones en el Plano

Consideremos una **transformación** $T:\mathbb{R}^2\to\mathbb{R}^2$, del plano $UV$ en el plano $XY$ dada por 

$$
T(u,v)=(x,y),~~\text{con}~ x=g(u,v),~y=h(u,v)
$$ (Transformacion)  

Supondremos que $T$ es una **transformación** $\mathbf{C^1}$, lo que significa que $g$ y $h$ tienen derivadas parciales continuas.

Una transformación $T$ es en realidad una función cuyo dominio y recorrido son subconjuntos de $\mathbb{R}^2$. Si $T(u_1, v_1)=(x_1, y_1)$, entonces el punto $(x_1, y_1)$ se llama **imagen** del punto $(u_1, v_1)$. $T$ transforma a $S$ (en el plano $UV$) en una región $R$ (en el plano $XY$) llamada imagen de $S$: $T(S)=R$.

```{figure} VariablesGen1.png
---
height: 200px
name: VariablesGen1
---
Transformación $T$ de la región $S$ a $R$.
```

Si $T$ es una transformación inyectiva, entonces tiene una **transformación inversa** $\mathbf{T^{-1}}$ del plano $XY$ al plano $UV$ dada por 

$$
T^{-1}(x,y)=(u,v),~~\text{con}~ u=G(x,y),~v=H(x,y)
$$ (Tinversa)

```{admonition} Ejercicio 
Encuentre la imagen del triángulo $S$ con vértices $(0,0)$, $(1,1)$ y $(0,1)$ bajo la transformación $T(u,v)=(u^2,v)$.
```

`````{admonition} Ejercicio Propuesto
:class: warning
Encuentre la imagen del disco $S=\{(u,v)\in\mathbb{R}^2:u^2+v^2\leq1\}$ bajo la transformación $x=au$, $y=bv$ ($a$, $b$ constantes positivas).
`````

### Cambio de Variables e Integración

Un cambio de variables afecta a la integral doble ya que modifica el dominio de integración. Empezamos con un rectángulo peque\~{n}o $S$ cuya esquina inferior izquierda es el punto $(u_0,v_0)$ y cuyas dimensiones son $\Delta u$ y $\Delta v$.  La imagen de $S$ es una región $R$.

```{figure} VariablesGen2.png
---
height: 200px
name: VariablesGen2
---
Transformación del rectángulo $S$ en $R$.
```

El vector 

$$
\mathbf{r}(u,v)=g(u,v)\mathbf{i}+h(u,v)\mathbf{j}
$$ 

es el vector posición de la imagen del punto $(u, v)$. La ecuación del lado inferior de $S$ es $v=v_0$, cuya curva imagen está dada por la función vectorial $\mathbf{r}(u, v_0)$. El vector tangente en $(x_0, y_0)$ a esta curva imagen es 

$$
\mathbf{r}_u=g_u(u_0,v_0)\mathbf{i}+h_u(u_0,v_0)\mathbf{j}=\frac{\partial x}{\partial u}\mathbf{i}+\frac{\partial y}{\partial u}\mathbf{j}.
$$ 

Análogamente, el vector tangente en $(x_0, y_0)$ a la curva imagen del lado izquierdo de $S$ (que es $u=u_0$) es 

$$
\mathbf{r}_v=g_v(u_0,v_0)\mathbf{i}+h_v(u_0,v_0)\mathbf{j}=\frac{\partial x}{\partial v}\mathbf{i}+\frac{\partial y}{\partial v}\mathbf{j}.
$$

Se puede aproximar la región imagen $R=T(S)$ por el paralelógramo determinado por los vectores secantes 

$$
\mathbf{a}=\mathbf{r}(u_0+\Delta u,v_0)-\mathbf{r}(u_0,v_0)
$$ 
$$
\mathbf{b}=\mathbf{r}(u_0,v_0+\Delta v)-\mathbf{r}(u_0,v_0)
$$

```{figure} VariablesGen3.png
---
height: 200px
name: VariablesGen3
---
Vectores $\mathbf{a}$ y $\mathbf{b}$ que aproximan los lados de $R$.
```
```{figure} VariablesGen4.png
---
height: 200px
name: VariablesGen4
---
Paralelógramo de aproximación de $R$.
```

De aquí $\displaystyle\mathbf{r}_u=\lim_{\Delta u\to0}\frac{\mathbf{a}}{\Delta u}~\Rightarrow~\mathbf{a}\approx\Delta u~\mathbf{r}_u$.

Análogamente 

$$
\mathbf{r}_v=\lim_{\Delta v\to0}\frac{\mathbf{b}}{\Delta u}~\Rightarrow~\mathbf{b}\approx\Delta v~\mathbf{r}_v
$$ 

Esto significa que se puede aproximar $R$ mediante un paralelógramo determinado por los vectores $\Delta u~\mathbf{r}_u$ y $\Delta v~\mathbf{r}_v$. Por tanto, se puede aproximar el área de $R$ mediante el área de dicho paralelógramo 

$$
||(\Delta u~\mathbf{r}_u)\times(\Delta v~\mathbf{r}_v)||=||\mathbf{r}_u\times \mathbf{r}_v||\Delta u\Delta v
$$

donde 

$$
\mathbf{r}_u\times \mathbf{r}_v=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\ x_u&y_u&0\\ x_v&y_v&0\end{vmatrix}=\begin{vmatrix}x_u&y_u\\ x_v& y_v\end{vmatrix}\mathbf{k}
$$

### Jacobiano de la Transformación

El **jacobiano** de la transformación $T:S\to R$ definida por $x=g(u, v)$ e $y=h(u, v)$ es 

$$
\frac{\partial(x,y)}{\partial(u,v)}=\begin{vmatrix}x_u&y_u\\ x_v& y_v\end{vmatrix}=x_uy_v-x_vy_u
$$

Con esta notación escribimos el área aproximada de $R$ como 

$$
\Delta A\approx\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\Delta u\Delta v
$$ 

donde el jacobiano se evalúa en $(u_0, v_0)$.

A continuación se divide una región $S$ general en el plano $UV$ en rectángulos $S_{ij}$ cuyas imágenes en el plano $XY$ son los $R_{ij}$ (que pueden ser aproximados por paralelógramos)

```{figure} VariablesGen5.png
---
height: 200px
name: VariablesGen5
---
Transformación del rectángulo $S_{ij}$ en el paralelógramo aproximado $R_{ij}$.
```
Por lo tanto 

\begin{eqnarray*}
\iint\limits_R f(x,y)
~dA&\approx& \sum_{i=1}^m\sum_{j=1}^n f(x_i,y_i)\Delta A\\
&\approx& \sum_{i=1}^m\sum_{j=1}^n f\big(g(u_i,v_j),h(u_i,v_j)\big) \left|\frac{\partial(x,y)}{\partial(u,v)}\right|\Delta u\Delta v
\end{eqnarray*}

donde el jacobiano se evalúa en $(u_i,v_j)$.  

**Nota**. Aquí puede verse una [interpretación geométrica](https://www.youtube.com/watch?v=bohL918kXQk&t=334s&ab_channel=KhanAcademy) del jacobiano

De aquí se deduce el teorema general del cambio de variables

### Teorema General

Suponga que $T$ es una transformación $C^1$ (con derivada continua) cuyo jacobiano es no nulo, tal que $T(S)=R$, que $T$ es continua sobre $R$, y que $R$ y $S$ son regiones planas tipo I o tipo II. Suponga también que T es inyectiva (excepto quizás en la frontera de $S$). Entonces 

$$\iint\limits_R f(x,y)
~dA=\iint\limits_S f\big(x(u,v),y(u,v)\big)\left|\frac{\partial(x,y)}{\partial(u,v)}\right|~dudv
$$ (TeoJacobiano)

```{admonition} Ejercicio 
Evalúe $\displaystyle\iint\limits_R\cos\left(\frac{y-x}{y+x}\right)dA$ donde $R$ es la región trapezoidal con vértices $(1,0)$, $(2,0)$, $(0,2)$ y $(0,1)$. Utilice un cambio de variables apropiado.
```

## Integrales Dobles en Coordenadas Polares

### Transformaciones en Coordenadas Polares

Si $T$ es una transformación del plano polar $R\Theta$ al plano cartesiano $XY$, dada por las coordenadas polares $(r,\theta)$ 

$$
x=g(r,\theta)=r\cos(\theta)~~,~~y=f(r,\theta)=r\sin(\theta)
$$ (Polares)

```{figure} VariablesGen6.png
---
height: 200px
name: VariablesGen6
---
Transformación del rectángulo polar $S$ en el sector circular $R$.
```

$T$ establece una correspondencia entre un rectángulo ordinario $S$ en el plano $R\Theta$ y el rectángulo polar $R$ en el plano $XY$. El jacobiano de la la transformación es 

$$
\frac{\partial(x,y)}{\partial(r,\theta)}=\begin{vmatrix}x_r&x_\theta\\ y_r&y_\theta\end{vmatrix}=r>0.
$$ 

Por lo tanto 

$$
\iint\limits_R f(x,y)
~dA=\int_\alpha^\beta\int_a^b f\big(r\cos(\theta),r\sin(\theta)\big)~r~dr~d\theta
$$

```{admonition} Ejercicio 
Calcule el volumen del sólido bajo el cono de ecuación $z=\sqrt{x^2+y^2}$ y arriba del disco $x^2+y^2\leq4$.
```

**Nota**. No olvidar el factor adicional $r$ en el lado derecho de la fórmula anterior. Un método para recordar esto se muestra en la figura siguiente, donde el rectángulo polar *infinitesimal* se puede considerar como un rectángulo ordinario con dimensiones $rd\theta$ y $dr$ y, por tanto, tiene *área* $dA=r~drd\theta$.

```{figure} Polares4.png
---
height: 200px
name: Polares4
---
Área de un rectángulo polar infinitesimal
```

**Nota**. Si $f$ es continua sobre una región polar de la forma $D=\{(r,\theta):\alpha\leq \theta\leq\beta, h_1(\theta)\leq r\leq h_2(\theta)\}$.

```{figure} Polares5.png
---
height: 200px
name: Polares5
---
Región polar $D$ entre los ángulos $\alpha$ y $\beta$.
```

La integral doble queda como 

$$
\iint\limits_R f(x,y)~dA=\int_\alpha^\beta\int_{h_1(\theta)}^{h_2(\theta)}f(r\cos(\theta),r\sin(\theta))\cdot r~drd\theta
$$

```{admonition} Ejercicio 
Encuentre el volumen del sólido que se encuentra dentro del cilindro $x^2+y^2=4$ y el elipsoide $4x^2+4y^2+z^2=64$.
```

## Integrales Triples en Coordenadas Cilíndricas

### Transformaciones en el Espacio

Considere la **transformación** $T:\mathbb{R}^3\to\mathbb{R}^3$, del espacio $UVW$ en el espacio $XYZ$ dada por $T(u,v,w)=(x,y,z)$ con 

$$
x=g(u,v,w),~y=h(u,v,w),~z=k(u,v,w)
$$
Supondremos que $T$ es una **transformación** $\mathbf{C^1}$, lo que significa que $g$, $h$ y $k$ tienen derivadas parciales continuas. $T$ transforma a $S$ (en el espacio $UVW$) en una región sólida $E$ (en el espacio $XYZ$) llamada imagen de $S$: $T(S)=E$.

El **jacobiano** $J_T$ de la transformación es 

$$
J_T=\frac{\partial(x,y,z)}{\partial(u,v,w)}=\begin{vmatrix}x_u&x_v&x_w\\ y_u&y_v&y_w\\ z_u&z_v&z_w\end{vmatrix}
$$

Análogamente a transformaciones en el plano, 

$$
\iiint\limits_E f(x,y,z)~dV=\iiint\limits_S f\big(x(u,v,w),y(u,v,w),z(u,v,w)\big)|J_T|~dV_s
$$ (IntEspacio)

### Coordenadas Cilíndricas

En el sistema de **coordenadas cilíndricas**, un punto $P$ en el espacio está representado por la terna $(r,\theta,z)$, donde $r$ y $\theta$ son las coordenadas polares de la proyección de $P$ sobre el plano $XY$, y $z$ es la distancia dirigida del plano $XY$ a $P$. 
La transformación de coordenadas cilíndricas a cartesianas es

$$
x=r\cos(\theta)~,~y=r\sin(\theta)~,~z=z
$$

```{figure} Cilindricas1.png
---
height: 200px
name: Cilindricas1
---
Coordenadas cilíndricas de un punto en el espacio.
```

El jacobiano de esta transformación es 

$$
\frac{\partial(x,y,z)}{\partial(r,\theta,z)}=\begin{vmatrix}x_r&x_\theta&x_z\\ y_r&y_\theta&y_z\\ z_r&z_\theta&z_z\end{vmatrix}=r.
$$ 

Por lo tanto 

$$
\iiint\limits_E f(x,y,z)~dV=\iiint\limits_S f\big(r\cos(\theta),r\sin(\theta),z\big)\cdot r~dV_s
$$

En particular, si $E$ es un sólido tipo 1 cuya proyección $D$ sobre el plano $XY$ es una región plana que puede ser descrita en coordenadas polares, entonces 

$$
E=\{(x,y,z)\in\mathbb{R}^3:(x,y)\in D,~u_1(x,y)\leq z\leq u_2(x,y)\}
$$ 

y 

$$
D=\{(r,\theta)\in \mathbb{R}_0^+\times[0,2\pi]: \alpha\leq \theta\leq\beta,~h_1(\theta)\leq r\leq h_2(\theta)\}
$$

```{figure} Cilindricas2.png
---
height: 200px
name: Cilindricas2
---
Sólido $E$ con proyección polar $D$ sobre el plano $XY$.
```

De esta manera 

$$
\iiint\limits_E f(x,y,z)~dV=\int_\alpha^\beta\int_{h_1(\theta)}^{h_2(\theta)}\int_{u_1(x,y)}^{u_2(x,y)} f\big(r\cos(\theta),r\sin(\theta),z\big)\cdot r~dzdrd\theta
$$ 

**Nota**. No olvidar el elemento de volumen $dV=r~dzdrd\theta$ que aparece luego de realizar la transformación a coordenadas cilíndricas.

```{figure} Cilindricas3.png
---
height: 200px
name: Cilindricas3
---
Elemento de volumen en coordenadas cilíndricas $dV=r~dzdrd\theta$.
```

```{admonition} Ejercicio 
Evalúe $\displaystyle\iiint\limits_E x~dV$ donde $E$ está encerrada por los planos $z=0$ y $z=x+y+5$, y los cilindros $x^2+y^2=4$, $x^2+y^2=9$.
```

```{admonition} Ejercicio 
Determine el volumen del sólido que se encuentra dentro del cilindro $x^2+y^2=4$ y el elipsoide $4x^2+4y^2+z^2=64$.
```

## Integrales Triples en Coordenadas Esféricas

### Coordenadas Esféricas

Las **coordenadas esféricas $(\rho,\theta,\phi)$ de un punto $P$ en el $\mathbb{R}^3$ son tales que: $\rho=|OP|$ es la distancia al origen desde $P$, $\theta$ es el mismo ángulo que en coordenadas cilíndricas (que se forma con el eje polar o $X$), y $\phi$ es el ángulo entre el eje $Z$ positivo y el segmento de recta $\overline{OP}$.

```{figure} Esfericas2.png
---
height: 200px
name: Esfericas2
---
Coordenadas esféricas de un punto
```

Note que: $0\leq\rho~$, $~0\leq\theta<2\pi~$. $~0\leq\phi\leq\pi$.

A partir de la figura anterior, podemos deducir que 

$$
x=\rho\sin(\phi)\cos(\theta)~,~y=\rho\sin(\phi)\sin(\theta)~,~z=\rho\cos(\phi)
$$

```{admonition} Ejercicio 
Escriba la esfera $x^2+y^2+z^2=R^2$, el cono $z^2=x^2+y^2$ y el plano $x-y=0$ en coordenadas esféricas.
```

### Integrales Triples en Esféricas

El jacobiano de esta transformación es 

$$
J_T=\frac{\partial(x,y,z)}{\partial(\rho,\theta,\phi)}=\begin{vmatrix}x_\rho&x_\theta&x_\phi\\ y_\rho&y_\theta&y_\phi\\ z_\rho&z_\theta&z_\phi\end{vmatrix}=-\rho^2\sin(\phi).
$$ 

En coordenadas esféricas, el equivalente a una caja rectangular es una **cuña esférica**

$$
E=\{(\rho,\theta,\phi):a\leq\rho\leq b, \alpha\leq\theta\leq\beta, c\leq\phi\leq d\}.
$$ 

Así, reemplazando las coordenadas esféricas en la integral triple general, obtenemos 

$$
\iiint\limits_E f(x,y,z)~dV=\int_c^d\int_\alpha^\beta\int_a^b f\big(\rho\sin(\phi)\cos(\theta),\rho\sin(\phi)\sin(\theta),\rho\cos(\phi)\big)\cdot \rho^2\sin(\phi)~d\rho d\theta d\phi
$$ (TripleEsfericas)

El elemento de volumen es $dV=\rho^2\sin(\phi)~d\rho d\theta d\phi$.

```{figure} Esfericas3.png
---
height: 200px
name: Esfericas3
---
Elemento de volumen $dV$
```

**Nota**. La fórmula se puede ampliar para incluir regiones esféricas mas generales como 

$$
E=\{(\rho,\theta,\phi): \alpha\leq\theta\leq\beta, c\leq\phi\leq d, g_1(\theta,\phi)\leq\rho\leq g_2(\theta,\phi)\}
$$
donde los límites de integración para $\rho$ son $g_1(\theta,\phi)$ y $g_2(\theta,\phi)$.

```{admonition} Ejercicio 
Calcule $\displaystyle\iiint\limits_E (x^2+y^2)~dV$ donde $E$ está entre las esferas $x^2+y^2+z^2=4$, $x^2+y^2+z^2=9.$
```

`````{admonition} Ejercicio Propuesto
:class: warning
Determine el volumen del sólido que está dentro de la esfera $x^2+y^2+z^2=4$, por encima del plano $XY$ y por abajo del cono $z=\sqrt{x^2+y^2}$.
`````
