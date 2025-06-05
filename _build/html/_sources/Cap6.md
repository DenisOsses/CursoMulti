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

(U6)=
# Unidad 6

+++

## Integración sobre Curvas y Superficies

En este capítulo estudiaremos integrales para funciones cuyo dominio corresponda a una curva o a una superficie, planas o espaciales.

## Funciones Vectoriales

Una **función vectorial** en $\mathbb{R}^n$ es una función $\textbf{r}:I\subseteq\mathbb{R}\to\mathbb{R}^n$, donde $I$ es un intervalo (que puede ser todo $\mathbb{R}$ inclusive). Esta función toma un $t\in I$ y le asigna un vector $\mathbf{r}(t)$ de $n$ coordenadas, es decir 

$$
\mathbf{r}(t)=(x_1(t),x_2(t),\ldots,x_n(t))=\sum_{i=1}^nx_i(t)\mathbf{e}_i\in\mathbb{R}^n
$$ 

donde $\{\mathbf{e}_i\}_{i=1}^n$ es la base canónica de $\mathbb{R}^n$. Las funciones $x_i:I\to\mathbb{R}$ se denominan **funciones componentes o coordenadas** de $\mathbf{r}(t)$.

Diremos que $\mathbf{r}(t)$ es **continua** en $t_0$ si cada función componente es continua en $t_0$, es decir si: 

$$
\lim_{t\to t_0}x_i(t)=x_i(t_0)~,~\forall~ i=1,2,\ldots,n.
$$

### Curvas

Si cada función componente $x_i(t)$ es continua en $I$, entonces el conjunto de puntos 

$$
C=\{(x_1,x_2,\ldots,x_n)\in\mathbb{R}^n:x_i=x_i(t)~,~t\in I\}
$$ 

es llamado **curva** en $\mathbb{R}^n$ y $t$ se conoce como **parámetro**.

Em particular, si $n=3$, usualmente escribimos 

$$
\mathbf{r}(t)=(f(t),g(t),h(t))=f(t)\mathbf{i}+g(t)\mathbf{j}+h(t)\mathbf{k}.
$$ 

En $\mathbb{R}^3$ podemos interpretar la curva $C$ como la trayectoria descrita por un punto $P(f(t),g(t),h(t))$ que se mueve en el espacio tridimensional a medida que el tiempo $t$ transcurre. Luego $\mathbf{r}(t)$ corresponde al vector posición del punto móvil $P$.

```{figure} trayectoriaVec.png
---
height: 200px
name: trayectoriaVec
---
Vector posición $\mathbf{r}(t)$ asociado al punto móvil $P(f(t),g(t),h(t))$
```

### Recta en el Espacio

Una recta $L$ que pasa por el punto $P_0(x_0,y_0,z_0)$ (con vector posición $\mathbf{r}_0$) y que tiene vector dirección $\mathbf{v}=(a,b,c)$ está dada por 

$$
\mathbf{r}(t)=\mathbf{r}_0+t\mathbf{v}=(x_0+at,y_0+bt,z_0+ct)~~,~~t\in\mathbb{R}
$$

```{figure} recta.png
---
height: 200px
name: recta
---
Recta en el espacio
```

### Segmento de Recta

Un segmento que une los puntos $P_0(x_0,y_0,z_0)$ y $P_1(x_1,y_1,z_1)$ (con vectores posición $\mathbf{r}_0$ y $\mathbf{r}_1$ respectivamente) está dado por 

$$
\mathbf{r}(t)=\mathbf{r}_0+t(\mathbf{r}_1-\mathbf{r}_0)=(1-t)\mathbf{r}_0+t\mathbf{r}_1~~,~~t\in I=[0,1].
$$

### Circunferencia

Toda circunferencia en el plano $XY$, con centro en el origen y radio $a>0$, es decir $x^2+y^2=a^2$, puede ser descrita o parametrizada mediante la función vectorial 

$$
\mathbf{r}(t)=(a\cos(t),a\sin(t))~~,~~t\in[0,2\pi].
$$

### Elipse

Toda elipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ en el plano $XY$ puede ser descrita mediante la función vectorial 

$$
\mathbf{r}(t)=(a\cos(t),b\sin(t))~~,~~t\in[0,2\pi].
$$

### Hélice

La curva conocida como **hélice** puede ser descrita como 

$$
\mathbf{r}(t)=(\cos(t),\sin(t),t).
$$

```{figure} helice.png
---
height: 250px
name: helice
---
Hélice
```

```{admonition} Ejercicio 
Encuentre una parametrización de la curva de intersección del cono $z=\sqrt{x^2+y^2}$ con el plano $z=1+y$.
```

## Derivadas de Curvas

La derivada $\mathbf{r}'(t)$ de una función vectorial está definida como 

$$
\frac{d\mathbf{r}}{dt}=\mathbf{r}'(t)=\lim_{h\to0}\frac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}
$$

```{figure} tangente.png
---
height: 200px
name: tangente
---
Derivada de una curva dada por la función vectorial $\mathbf{r}(t)$ 
```

Esta derivada existe siempre que las funciones componentes de $\mathbf{r}(t)$ sean derivables. Luego 

$$
\mathbf{r}'(t)=(x_1'(t),x_2'(t),\ldots,x_n'(t)).
$$ 

En particular, si $n=3$, 

$$
\mathbf{r}'(t)=(f'(t),g'(t),h'(t)).
$$ 

El vector $\mathbf{r}'(t)$ es llamado el **vector tangente** a la curva en el punto $P$, siempre que $\mathbf{r}'(t)$ exista y $\mathbf{r}'(t)\neq 0$. La **recta tangente** a la curva $C$ en $P$ se define como la recta que pasa por $P$ y es paralela al vector tangente $\mathbf{r}'(t)$.

```{admonition} Ejercicio 
Considere la curva $C$ en el plano $XY$ que está dada por el gráfico de la función $y=f(x)$. Encuentre una parametrización de esta curva y determine su vector tangente. 
```

```{admonition} Ejercicio 
Encuentre la ecuación de la recta tangente a la curva $x=t$, $y=e^{-t}$, $z=2t-t^2$ en el punto $(0,1,0)$.
```

### Reglas de Derivación de Funciones Vectoriales

Suponga que $\mathbf{u}$ y $\mathbf{v}$ son funciones vectoriales derivables, $c$ es un escalar y $f$ es una función de variable real. Entonces

1. $\dfrac{d}{dt}[\mathbf{u}(t)+\mathbf{v}(t)]=\mathbf{u}'(t)+\mathbf{v}'(t)$.

2. $\dfrac{d}{dt}[c\mathbf{u}(t)]=c\mathbf{u}'(t)$.

3. $\dfrac{d}{dt}[f(t)\mathbf{u}(t)]=f'(t)\mathbf{u}(t)+f(t)\mathbf{u}'(t)$.

4. $\dfrac{d}{dt}[\mathbf{u}(t)\cdot \mathbf{v}(t)]=\mathbf{u}'(t)\cdot \mathbf{v}(t)+\mathbf{u}(t)\cdot\mathbf{v}'(t)$.

5. $\dfrac{d}{dt}[\mathbf{u}(t)\times \mathbf{v}(t)]=\mathbf{u}'(t)\times \mathbf{v}(t)+\mathbf{u}(t)\times\mathbf{v}'(t)$.

6. $\dfrac{d}{dt}[\mathbf{u}(f(t))]=f'(t)\mathbf{u}'(f(t))$.

7. $\dfrac{d}{dt}[||\mathbf{u}(t)||]=\dfrac{\mathbf{u}'(t)\cdot\mathbf{u}(t)}{||\mathbf{u}(t)||}$.

## Longitud de una Curva

La **integral definida** de una función vectorial continua $\mathbf{r}(t)$ se define en términos de las integrales de sus funciones componentes: 

$$
\int_a^b\mathbf{r}(t)~dt=\left(\int_a^b f(t)~dt\right)\mathbf{i}+\left(\int_a^b g(t)~dt\right)\mathbf{j}+\left(\int_a^b h(t)~dt\right)\mathbf{k}
$$

Si $\mathbf{R}(t)$ es una antiderivada de $\mathbf{r}(t)$, es decir $\mathbf{R}'(t)=\mathbf{r}(t)$ entonces 

$$
\int_a^b\mathbf{r}(t)~dt=\big[\mathbf{R}(t)\big]\Big|_a^b
$$

### Longitud

La **longitud** $L$ de una curva $C$ definida por una función vectorial continua $\mathbf{r}(t)$, y $\mathbf{r}'(t)$ también continua, es 

$$
L=\int_a^b||\mathbf{r}'(t)||~dt
$$ 

En particular, si $\mathbf{r}(t)=(f(t),g(t),h(t))$ entonces 

$$
L=\int_a^b\sqrt{\big(f'(t)\big)^2+\big(g'(t)\big)^2+\big(h'(t)\big)^2}~dt
$$

### Longitud de Arco

Si $\mathbf{r}(t)$ es una función vectorial  con $t\in[a,b]$, definimos la **función longitud de arco** $s$ como

$$
s(t)=\int_a^t||\mathbf{r}'(u)||~du
$$

```{figure} LongitudArco.png
---
height: 200px
name: LongitudArco
---
Función longitud de arco $s(t)$
```

$s(t)$ corresponde a la longitud de la curva $C$ entre $\mathbf{r}(a)$ y $\mathbf{r}(t)$. Si derivamos $s(t)$ obtenemos 

$$
\frac{ds}{dt}=||\mathbf{r}'(t)||~~\Leftrightarrow~~ds=||\mathbf{r}'(t)||~dt~~\Rightarrow~~L=\int_a^b ds
$$

($ds$ se denomina **diferencial de arco** y lo utilizaremos más adelante).

## Vectores asociados a una Curva. Marco TNB

Una parametrización $\mathbf{r}(t)$ es **suave** sobre un intervalo $I$ si $\mathbf{r}'$ es continua y $\mathbf{r}'(t)\neq\mathbf{0}$ sobre $I$. Una curva $C$ es suave si tiene una parametrización suave: no tiene puntos agudos ni cúspides; cuando gira el vector tangente $\mathbf{r}(t)$, lo hace en forma continua.

### Vector Tangente Unitario

Definimos el **vector tangente unitario** $\mathbf{T}(t)$ a la curva $C$ como 

$$
\mathbf{T}(t)=\frac{\mathbf{r}'(t)}{||\mathbf{r}'(t)||}
$$ 

e indica la dirección de la curva.

Como $||\mathbf{T}(t)||=1$, derivando la norma respecto de $t$, obtenemos que $\mathbf{T}(t)\cdot\mathbf{T}'(t)=0$. Esto implica que $\mathbf{T}'(t)$ es perpendicular (normal) a $\mathbf{T}(t)$.

### Vector Normal Unitario

El **vector normal unitario** $\mathbf{N}(t)$ a la curva $C$ es 

$$
\mathbf{N}(t)=\frac{\mathbf{T}'(t)}{||\mathbf{T}'(t)||}
$$ 

donde $\mathbf{T}'(t)\neq\mathbf{0}$. Se interpreta el vector normal como la dirección en la cual la curva está girando en cada punto.

### Vector Binormal

El vector $\mathbf{B}(t)=\mathbf{T}(t)\times\mathbf{N}(t)$ se denomina **vector binormal**, y es perpendicular a $\mathbf{T}$ y $\mathbf{N}$ (y es unitario).

### Marco TNB

Los vectores $\mathbf{T}$, $\mathbf{N}$ y $\mathbf{B}$ forman el marco $\mathbf{T}\mathbf{N}\mathbf{B}$ (marco de Frenet-Serret o móvil), que nos entrega un sistema de referencia rectangular para el punto $P$ sobre la curva $C$ en cualquier instante $t$.

```{figure} TNB.png
---
height: 150px
name: TNB
---
Marco referencial TNB
```

Podemos observar el marco móvil en la siguiente aplicación de [Geogebra](https://www.geogebra.org/m/anbmDpHv).

```{admonition} Ejercicio 
Considere la curva $C$ dada por la parametrización 

$$
\mathbf{r}(t)=\left(t^2,\frac{1}{3}t^3,2t\right)~~,~~t\in\mathbb{R}.
$$

1. Calcule el largo $L$ de la curva $C$ para $t\in[0,2]$.

2. Establezca el diferencial de arco $ds$ para $C$.

3. Determine los vectores tangente $\mathbf{T}$ y normal $\mathbf{N}$ unitarios en el instante $t=1$.
```

## Integrales de Línea de Funciones Vectoriales (sobre Curvas)

Definiremos una integral sobre una curva $C$ en vez de un intervalo $[a,b]$. Realizamos el procedimiento habitual: sea $C$ la curva plana suave dada por la función vectorial $\mathbf{r}(t)=(x(t),y(t))$, donde $a\leq t\leq b$.

```{figure} IntLinea1.png
---
height: 200px
name: IntLinea1
---
Partición del intervalo $[a,b]$
```

1. Dividimos $[a,b]$ en $n$ subintervalos $[t_{i-1},t_i]$ del mismo ancho y ponemos $x_i=x(t_i)$ e $y_i=y(t_i)$.

2. Los puntos respectivos $P_i(x_i,y_i)$ dividen a $C$ en $n$ subarcos de longitudes $\Delta s_1, \Delta s_2,\ldots,\Delta s_n$.

3. Ahora elegimos un punto de muestra $P_i^\ast(x_i^\ast,y_i^\ast)$ en el $i-$ésimo subarco.

4. Si $f$ es función cuyo dominio incluye a la curva $C$, evaluamos $f$ en $(x_i^\ast,y_i^\ast)$.

5. Multiplicamos por la longitud del subarco $\Delta s_i$, y formamos la suma de Riemann $\displaystyle\sum_{i=1}^nf(x_i^\ast,y_i^\ast)\Delta s_i$.

Hacemos $n\to\infty$ y obtenemos que si $f$ se define sobre una curva $C$ suave dada por $\mathbf{r}(t)=(x(t),y(t))$, entonces la **integral de línea de** $\mathbf{f}$ **a lo largo de** $\mathbf{C}$ (con respecto a la longitud de arco $ds$) es 

$$
\int\limits_C f(x,y)~ds=\lim_{n\to\infty}\sum_{i=1}^nf((x_i^\ast,y_i^\ast))\Delta s_i
$$ 

si el límite existe, lo cual ocurre siempre si $f$ es continua. Para evaluar esta integral usamos que $\mathbf{r}(t)=(x(t),y(t))$ y $ds=||\mathbf{r}'(t)||~dt$, con lo cual 

$$
\int\limits_C f(x,y)~ds=\int_a^b f\big(\mathbf{r}(t)\big)~||\mathbf{r}'(t)||~dt
$$

```{figure} IntLinea2.png
---
height: 200px
name: IntLinea2
---
Si $f(x,y)\geq0$ entonces $\displaystyle\int\limits_C f(x,y)~ds$ representa el área sobre $C$ y bajo $f$
```

El valor de la integral de línea no depende de la parametrización de la curva, siempre que esta se recorra exactamente una vez cuando $t$ se incrementa desde $a$ hasta $b$.

### Curva por Tramos

Supongamos que $C$ es una curva suave por tramos; es decir, $C$ es una unión de una cantidad finita de curvas suaves $C_1, C_2,\ldots, C_n$. Entonces, definimos la integral de $f$ a lo largo de $C$ como la suma de las integrales de $f$ a lo largo de cada una de las partes suaves de $C$:

```{figure} IntLinea3.png
---
height: 200px
name: IntLinea3
---
La integral de línea sobre una curva por tramos es la suma de las integrales en cada tramo
```

$$
\int\limits_C f(x,y)~ds=\sum_{i=1}^n\int\limits_{C_i} f(x,y)~ds
$$

```{admonition} Ejercicio 
Sea $C$ la curva que consiste en los segmentos de recta desde $(0,0)$ hasta $(2,1)$ y desde $(2, 1)$ hasta $(3, 0)$. Calcule $\displaystyle\int\limits_C(x+2y)~ds$
```

Existen 2 tipos más integrales de línea que ocurren cuando solo miramos la variación del arco $\Delta s=\sqrt{(\Delta x)^2+(\Delta y)^2}$ con respecto a $x$ o $y$, a saber:

$$
\begin{aligned}
\int\limits_C f(x,y)~dx&=\int_a^b f(x(t),y(t))~x'(t)~dt\\
\int\limits_C f(x,y)~dy&=\int_a^b f(x(t),y(t))~y'(t)~dt
\end{aligned}
$$

### Orientación de una Curva

Una parametrización dada $\mathbf{r}(t)=(x(t),y(t))$, $t\in[a,b]$ determina una **orientación** de la curva $C$, cuya dirección positiva corresponde a los valores crecientes del parámetro $t$.

Si $-C$ denota la curva que consiste de los mismos puntos que $C$, pero con la orientación opuesta, es decir, del punto inicial $B$ al punto terminal $A$ de la figura, entonces tenemos

$$
\begin{aligned}
\int\limits_{-C} f(x,y)~dx&=-\int\limits_{C} f(x,y)~dx\\
\int\limits_{-C} f(x,y)~dy&=-\int\limits_{C} f(x,y)~dy\\
\text{pero}~\int\limits_{-C} f(x,y)~ds&=\int\limits_{C} f(x,y)~ds
\end{aligned}
$$

```{figure} IntLinea4.png
---
height: 200px
name: IntLinea4
---
Curva $C$ y con su orientación contraria $-C$
```

Es usual que las integrales de línea respecto a $x$ e $y$ se presenten juntas. Cuando esto sucede, se acostumbra escribir 

$$
\int\limits_{C} P(x,y)~dx+\int\limits_{C} Q(x,y)~dy=\int\limits_{C} P(x,y)~dx+Q(x,y)~dy
$$

```{admonition} Ejercicio 
Sea $C$ la curva que consiste del arco de circunferencia $x^2+y^2=1$ desde $(1,0)$ hasta $(0, 1)$ seguido del segmento de recta desde $(0, 1)$ hasta $(4, 3)$. Calcule 

$$
\int\limits_C x^2~dx+y^2~dy.
$$
```

### Integral de Línea en el Espacio

Si $C$ es una curva suave en el espacio con parametrización: $\mathbf{r}(t)=(x(t),y(t),z(t))$, $t\in[a,b]$, podemos generalizar la **integral de línea de** $f$ **a lo largo de** $C$ (con respecto a la longitud de arco $ds$)

$$
\int\limits_C f(x,y,z)~ds=\int_a^b f\big(\mathbf{r}(t)\big)~||\mathbf{r}'(t)||~dt
$$ 

y las integrales de línea a lo largo de $C$ respecto a $x$, $y$, $z$, que usualmente se escriben 

$$
\int\limits_{C} P(x,y,z)~dx+Q(x,y,z)~dy+R(x,y,z)~dz
$$

```{admonition} Ejercicio 
Sea $C$ la curva dada por $\mathbf{r}(t)=(\sqrt{t},t,t^2)$, $t\in[1,4]$. Calcule 

$$
\int\limits_C y~dx+z~dy+x~dz.
$$
```

## Campos Vectoriales

Sea $D\subseteq\mathbb{R}^n$. Un **campo vectorial** sobre $\mathbb{R}^n$ es una función $\mathbf{F}$ que asigna a cada $(x_1,\ldots,x_n)\in D$ un vector de $n$ coordenadas $\mathbf{F}(x_1,\ldots,x_n)$. Si $n=2$ o $n=3$, tenemos respectivamente

$$
\begin{aligned}
\mathbf{F}(x,y)&=P(x,y)\mathbf{i}+Q(x,y)\mathbf{j}=\big(P,Q\big)\\ 
\mathbf{F}(x,y,z)&=P(x,y,z)\mathbf{i}+Q(x,y,z)\mathbf{j}+R(x,y,z)\mathbf{k}\\
&=\big(P,Q,R\big)
\end{aligned}
$$

```{figure} Campo1.png
---
height: 250px
name: Campo1
---
Campo $\mathbf{F}$ en $\mathbb{R}^2$
```
```{figure} Campo2.png
---
height: 250px
name: Campo2
---
Campo $\mathbf{F}$ en $\mathbb{R}^3$
```

Para graficar campos vectoriales, usaremos [CalcPlot3D](\href{https://c3d.libretexts.org/CalcPlot3D/index.html) eligiendo la opción *Vector Field*.  Por ejemplo, el campo vectorial dado por $\mathbf{F}(x,y)=\sin(x)\mathbf{i}+y\mathbf{j}$ es

```{figure} Campo3.png
---
height: 250px
name: Campo3
---
Campo $\mathbf{F}$ para algunos $(x,y)$
```
```{figure} Campo4.png
---
height: 250px
name: Campo4
---
Campo $\mathbf{F}$ para muchos $(x,y)$
```

### Campo Vectorial Gradiente

Si $f$ es una función de 2 o 3 variables, su vector gradiente $\nabla f$ corresponde a un campo vectorial sobre $\mathbb{R}^2$ o $\mathbb{R}^3$, denominado **campo vectorial gradiente}** 

### Campos Conservativos y Funciones Potenciales

Un campo vectorial $\mathbf{F}$ se denomina **campo vectorial conservativo** si es el gradiente de alguna función escalar, es decir, si existe una función $f$ tal que $\mathbf{F}=\nabla f$. En este caso, $f$ recibe el nombre de **función de potencial** para $\mathbf{F}$.

```{admonition} Ejercicio 
Sea $\mathbf{x}=(x,y,z)$. El campo vectorial 

$$
\mathbf{F}(\mathbf{x})=\frac{\mathbf{x}}{||\mathbf{x}||}
$$ 

es conservativo ya que si $f(x,y,z)=\sqrt{x^2+y^2+z^2}$ entonces $\mathbf{F}=\nabla f$.
```

## Integrales de Línea sobre Campos Vectoriales

El trabajo $W$ realizado para mover un objeto desde un punto $P$ hasta otro punto $Q$, cuyo vector desplazamiento es $\mathbf{D}=\overrightarrow{PQ}$, sometido a una fuerza $\mathbf{F}$ es $W=\mathbf{F}\cdot\mathbf{D}$.

Si $\mathbf{F}=(P,Q,R)$ es un campo vectorial de fuerzas continuo sobre $\mathbb{R}^3$, nos interesa calcular el trabajo total realizado por esta fuerza al mover una partícula a lo largo de la curva suave $C$ (que es parte del dominio de $\mathbf{F}$). Para ello 

1. Se divide $[a,b]$ (intervalo de la parametrización de $C$) en $n$ subintervalos  $[t_{i-1},t_i]$ del mismo ancho y ponemos $x_i=x(t_i)$, $y_i=y(t_i)$, $z_i=z(t_i)$ .

2. Dividimos $C$ en $n$ subarcos $P_{i-1}P_i$ de longitudes $\Delta s_1, \Delta s_2,\ldots,\Delta s_n$.

3. Ahora elegimos un punto de muestra $P_i^\ast(x_i^\ast,y_i^\ast,z_i^\ast)$ en el $i-$ésimo subarco, asociado al instante $t_i^\ast$.

4. Si $\Delta s_i$ es pequeño, entonces cuando la partícula va de $P_{i-1}$ hasta $P_i$ a lo largo de la curva, prosigue aproximadamente en la dirección del vector unitario tangente $\mathbf{T}(t_i^\ast)$ en $P_i^\ast$.

5. El trabajo que efectúa la fuerza $\mathbf{F}$ al mover la partícula desde $P_{i-1}$ hasta $P_i$ es aproximadamente $\mathbf{F}(P_i^\ast)\cdot[\Delta s_i\mathbf{T}(t_i^\ast)]$. Reordenando y haciendo la suma de Riemann

$$
\sum_{i=1}^n \left[\mathbf{F}(x_i^\ast,y_i^\ast,z_i^\ast)\cdot\mathbf{T}(x_i^\ast,y_i^\ast,z_i^\ast)\right]\Delta s_i
$$

```{figure} Campo5.png
---
height: 250px
name: Campo5
---
Campo $\mathbf{F}$ sobre la curva $C$, con vector tangente unitario $\mathbf{T}$
```

Hacemos $n\to\infty$ y si la curva $C$ suave está dada por $\mathbf{r}(t)$, entonces la **integral de línea del campo** $\mathbf{F}$ **a lo largo de** $\mathbf{C}$ (con respecto a la longitud de arco $ds$) es 

$$
W=\int\limits_C \mathbf{F}(x,y,z)\cdot\mathbf{T}(x,y,z)~ds=\int\limits_C \mathbf{F}\cdot\mathbf{T}~ds
$$ 

Note que el trabajo es la integral de línea respecto a la longitud de arco de la componente tangencial de la fuerza.

Para evaluar esta integral usamos que $\mathbf{r}(t)=(x(t),y(t),z(t))$ para $t\in[a,b]$, y $ds=||\mathbf{r}'(t)||~dt$ y $\mathbf{T}(t)=\frac{\mathbf{r}'(t)}{||\mathbf{r}'(t)||}$, con lo cual

$$
\int\limits_C \mathbf{F}\cdot\mathbf{T}~ds=\int_a^b \mathbf{F}\big(\mathbf{r}(t)\big)\cdot\mathbf{r}'(t)~dt
$$

Es usual escribir $d\mathbf{r}=\mathbf{r}'(t)~dt$, de modo que

$$
\int\limits_C \mathbf{F}\cdot d\mathbf{r}=\int\limits_C \mathbf{F}\cdot\mathbf{T}~ds
$$

```{admonition} Ejercicio 
Determine el trabajo que hace el campo de fuerzas $\mathbf{F}(x,y,z)=(x-y^2,y-z^2,z-x^2)$ sobre una partícula que se desplaza por el segmento rectilíneo desde $(0,0,1)$ hasta $(2,1,0)$.
```

**Nota**. Si la curva $C$ se recorre en sentido negativo, entonces 

$$
\int\limits_{-C} \mathbf{F}\cdot d\mathbf{r}=-\int\limits_C \mathbf{F}\cdot d\mathbf{r}
$$ 

ya que el vector unitario tangente $\mathbf{T}$ se cambia por su opuesto cuando $C$ se reemplaza por $-C$.

**Nota**. Si $\mathbf{F}=(P,Q,R)$ entonces 

$$
\int\limits_C \mathbf{F}\cdot d\mathbf{r}=\int\limits_C P~dx+Q~dy+R~dz
$$ 

que relaciona las integrales de línea de campos vectoriales con las de campos escalares.

## Teorema Fundamental de las Integrales de Línea

Sea $C$ una curva suave definida por la función vectorial $\mathbf{r}(t)$, $a\leq t\leq b$. Sea $f$ una función derivable de dos o tres variables cuyo vector gradiente $\nabla f$ es continuo sobre $C$. Entonces 

$$
\int\limits_C\nabla f\cdot d\mathbf{r}=f(\mathbf{r}(b))-f(\mathbf{r}(b))
$$

Este teorema nos dice que la integral de línea de un campo vectorial conservativo $\mathbf{F}$ depende solamente del punto inicial y del punto final de la curva, no de $C$.

### Independencia de la Trayectoria

Si $\mathbf{F}$ es un campo vectorial continuo cuyo dominio es $D$, la integral de línea $\int\limits_C\mathbf{F}\cdot d\mathbf{r}$ es **independiente de la trayectoria** si $\int\limits_{C_1}\mathbf{F}\cdot d\mathbf{r}=\int\limits_{C_2}\mathbf{F}\cdot d\mathbf{r}$ para cualesquiera dos trayectorias $C_1$ y $C_2$ en $D$ que tienen los mismos puntos iniciales y finales.

Con esta definición, las integrales de línea de campos vectoriales conservativos son independientes de la trayectoria.

