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

(U3)=
# Unidad 3

+++

## Derivadas Parciales

### Interpretación Geométrica

Observemos los siguientes gráficos

```{figure} rectax.png
---
height: 300px
name: rectax
---
Intersección superficie $z=f(x,y)$ con el plano $y=y_0$
```
```{figure} rectay.png
---
height: 300px
name: rectay
---
Intersección superficie $z=f(x,y)$ con el plano $x=x_0$
```

Si $(x_0,y_0)$ está en el dominio de $f(x,y)$, el plano vertical $y=y_0$ (donde $y_0$ es un número fijo, constante) corta a la superficie $z=f(x,y)$ en la curva $z=f(x,y_0)$ (que está contenida precisamente en el plano $y=y_0$). Esta curva pertenece a la intersección de $f(x,y)$ con el plano $y=y_0$, y observamos que hay sólo variación en $x$. Análogamente, la curva $z=f(x_0,y)$ está contenida en el plano $x=x_0$, y notamos que hay sólo variación en $y$.

### Derivada Parcial con respecto a $x$

La **derivada parcial** de $f$ **con respecto a** $x$ en $(x_0,y_0)$ es la derivada de la función de una variable $f(x,y_0)$ con respecto a $x$ en el punto $x=x_0$. Se denota como 

$$
\dfrac{\partial f}{\partial x}\Big|_{(x_0,y_0)}\;\;\;\text{o}\;\;\;f_x(x_0,y_0)
$$

Formalmente, la derivada parcial de $f$ con respecto a $x$ en el punto $(x_0,y_0)$ es 

$$
\dfrac{\partial f}{\partial x}\Big|_{(x_0,y_0)}=f_x(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}
$$ (parcialx2)

si tal límite existe.

### Derivada Parcial con respecto a $y$

La derivada parcial de $f$ con respecto a $y$ en $(x_0,y_0)$ es análoga a la anterior. Mantenemos $x$ fija en $x_0$ y derivamos $f(x_0,y)$ con respecto a $y$ en $y_0$.

Formalmente, la **derivada parcial** de $f$ con **respecto a** $y$ en el punto $(x_0,y_0)$ es 

$$
\dfrac{\partial f}{\partial y}\Big|_{(x_0,y_0)}=f_y(x_0,y_0)=\lim_{k\to0}\frac{f(x_0,y_0+k)-f(x_0,y_0)}{k}
$$ (parcialy1)

si tal límite existe.

```{admonition} Ejercicio 
Si $f(x,y)=x^2\sin(y)$, calcule $\dfrac{\partial f}{\partial x}\left(1,\dfrac{\pi}{2}\right)$.
```

### Derivada parcial en $n$ variables

Si $z=f(x_1,x_2,\ldots,x_i,\ldots,x_n)$ es función de $n$ variables entonces 

$$
\frac{\partial f}{\partial x_i}=\lim_{h\to0}\frac{f(x_1,x_2,\ldots,x_i+h,\ldots,x_n)-f(x_1,x_2,\ldots,x_i,\ldots,x_n)}{h}.
$$

Derivar $f$ con respecto a la variable $x_i$ es considerar las otras variables como constantes y **derivar** $f$ **como si fuese una función sólo de la variable** $x_i$, utilizando reglas de derivación de funciones de una variable (cuando sean aplicables).

```{admonition} Ejercicio 
Considere $f: \mathbb{R}^2 \to \mathbb{R}$ definida por:

$$
f(x,y)=\left\{\begin{array}{ccc}
\dfrac{x^2y}{x^2+y^2} & \text{si} & (x,y)\neq (0,0)\\\\
0 & \text{si} & (x,y)=(0,0)
\end{array}\right.
$$ 

Determine $\dfrac{\partial{f}}{\partial{y}}(0,0)$ y $ \dfrac{\partial{f}}{\partial{y}}(1,2)$.
```

### Rectas Tangentes

Podemos interpretar $f_x(x_0,y_0)$ como la pendiente de la recta tangente a la curva $z=f(x,y_0)$ (contenida en el plano $y=y_0$) en el punto $(x_0,y_0,f(x_0,y_0))$. También, otra forma de entenderla es como la razón de cambio (tasa, ritmo) de $f$ con respecto a $x$ en el punto $(x_0,y_0,f(x_0,y_0))$. Análogamente para $f_y(x_0,y_0)$.}

```{figure} tangentes.png
---
height: 300px
name: tangentes
---
Rectas Tangentes a la superficie $z=f(x,y)$ en el punto $(x_0,y_0)$
```

La **ecuación de la recta tangente** a la curva $z=f(x,y_0)$, **contenida en el plano** $y=y_0$, sobre el punto $(x_0,y_0,f(x_0,y_0))$ es 

\begin{eqnarray*}
z&=&f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)\\ y&=&y_0
\end{eqnarray*}

Las ecuaciones paramétricas de la recta tangente son 

$$
x=x_0+t~,~y=y_0~,~z=f(x_0,y_0)+f_x(x_0,y_0)t
$$ 

con $t\in\mathbb{R}$. Un vector director de la recta es $(1,0,f_x(x_0,y_0))$.

La **ecuación de la recta tangente** a la curva $z=f(x_0,y)$, **contenida en el plano** $x=x_0$, sobre el punto $(x_0,y_0,f(x_0,y_0))$ es

 \begin{eqnarray*}
 
z&=&f(x_0,y_0)+f_y(x_0,y_0)(y-y_0)\\ x&=&x_0
\end{eqnarray*}

Las ecuaciones paramétricas de la recta tangente son 

$$
x=x_0~,~ y=y_0+t~,~z=f(x_0,y_0)+f_y(x_0,y_0)t
$$ 

con $t\in\mathbb{R}$. Un vector director de la recta es $(0,1,f_y(x_0,y_0))$.

```{admonition} Ejercicio 
Determine la ecuación de la recta tangente a la curva que se obtiene de la intersección entre la superficie $z=x^2+y^2$, y el plano $x=1$, sobre el punto $(1,2)$.
```

```{figure} cilindro_recta.png
---
height: 250px
name: ejercicioTangente
---
Gráfico del ejercicio anterior
```

## Plano Tangente

Obtuvimos 2 rectas tangentes $T_1$ y $T_2$ a la superficie $z=f(x,y)$ sobre el punto $P(x_0,y_0,f(x_0,y_0))$, cuyos vectores directores son $\vec{v}_1=(1,0,f_x(x_0,y_0))$ y $\vec{v}_2=(0,1,f_y(x_0,y_0))$. No es difícil probar que $\vec{v}_1$ y $\vec{v}_2$ son L.I. y, por lo tanto, generan un plano. Este plano se denomina **plano tangente** a la superficie $z=f(x,y)$ sobre el punto $P(x_0,y_0,f(x_0,y_0))$.

```{figure} plano_tangente.png
---
height: 250px
name: PlanoTangente
---
Plano Tangente a la superficie $z=f(x,y)$
```

Para obtener la ecuación del plano tangente a la superficie $S$ en el punto $P(x_0,y_0,f(x_0,y_0))$, necesitamos un vector perpendicular (normal) a dicho plano. Recordemos que la recta tangente $T_1$ tiene vector director $\vec{v}_1=(1,0,f_x(x_0,y_0))$ y la recta tangente $T_2$ tiene vector director $\vec{v}_2=(0,1,f_y(x_0,y_0))$, luego un vector normal es 

$$
\vec{n}=\vec{v}_2\times\vec{v}_1=(f_x(x_0,y_0),f_y(x_0,y_0),-1).
$$ 

Por tanto, la ecuación vectorial del plano tangente a la superficie $S$ en el punto $P(x_0,y_0,z_0)$ es 

$$
(f_x(x_0,y_0),f_y(x_0,y_0),-1)\cdot (x-x_0,y-y_0,z-z_0)=0.
$$ (EcVecPlano)

### Ecuación Cartesiana

La **ecuación cartesiana** del plano tangente a la superficie $z=f(x,y)$ en el punto $P(x_0,y_0,f(x_0,y_0))$ es 

$$
z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).
$$ (EcCartesiana)

**Definición**. El vector $(f_x(x_0,y_0),f_y(x_0,y_0))$ se denomina **vector gradiente** de $f$ en el punto $(x_0,y_0)$ y se anota como 

$$
\nabla f(x_0,y_0)=(f_x(x_0,y_0),f_y(x_0,y_0)).
$$ (VectorGradiente)

```{admonition} Ejercicio 
Determine, si existe, la ecuación del plano tangente a $f(x,y)=x^2+2y^3$ en el punto $(1,1,3)$.
```

### Aproximación Lineal

Podemos mirar la ecuación del plano tangente obtenida en el ejercicio: $z=2x+6y-5$, como una función de 2 variables 

$$
L(x,y)=2x+6y-5
$$

que es una *buena aproximación* de $f(x,y)$ cuando $(x,y)$ es cercano al punto $(1,1)$. La función $L$ es llamada **linealización** de $f$ en $(1,1)$. 

La función lineal, 

$$
L(x,y)=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)
$$ 

cuyo gráfico es el plano tangente, es llamada **linealización** de $f$ en $(x_0,y_0)$ y la aproximación 

$$
L(x,y)\approx f(x,y)
$$ (AproxLineal)

es llamada la **aproximación lineal** de $f$ en $(x_0,y_0)$.

```{admonition} Ejercicio 
Utilice la aproximación lineal para estimar $\sqrt{(4.01)^2+(2.98)^2}$
```

## Diferenciabilidad

La ecuación del plano tangente a la superficie $z=f(x,y)$ en el punto $(a,b)$ está dada por 

$$
z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)
$$

```{figure} diferencial.png
---
height: 250px
name: diferencial
---
Aproximación Diferencial de una Superficie $z=f(z,y)$ en el punto $(a,b)$ mediante su Plano Tangente 
```

Si nos movemos pequeñas cantidades (conocidas como **diferenciales**) $\Delta x ~(=dx)$ y $\Delta y~(=dy)$ desde $(a,b)$ llegamos al punto

$$
(x,y)=(a+dx, b+dy)
$$ 

es decir $dx=x-a$ y $dy=y-b$. El **cambio real** de la función $f$ al pasar del punto $(a,b)$ a $(x,y)=(a+dx, b+dy)$ es 

$$
\Delta f=\Delta z=f(x,y)-f(a,b)=f(a+dx, b+dy)-f(a,b)
$$ (CambioReal)

**Definición**. Si $f$ es una función que tiene derivadas parciales continuas $f_x$ y $f_y$ entonces el **diferencial** $df=dz$ o **diferencial total** es definido por 

$$
df=dz=f_x(x,y)dx+f_y(x,y)dy=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy
$$  

Así $L(x,y)-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)=df$ y por lo tanto $df\approx \Delta f$ ya que $L(x,y)\approx f(x,y)$ en una vecindad de $(a,b)$.

**Nota**. Al usar diferenciales es usual poner $h=\Delta x=dx$ y $k=\Delta y=dy$.

```{admonition} Ejercicio 
Calcule una aproximación de la variación que experimenta la función $f(x,y)=\sqrt{xy}$ cuando $x$ varía de $4$ a $4.01$ e $y$ de $9$ a $8.99$. ¿Qué error se comete con dicha aproximación?
```

**Nota**. A partir de la aproximación $df\approx \Delta f$, nos preguntamos cuándo ésta corresponde a una igualdad.En realidad, tenemos que 

$$
\Delta f= df+E(h,k)
$$

donde $E(h,k)$ es un término que expresa el error en la aproximación y donde lo esperable es que $E(h,k)\to 0$ cuando $h,k\to0$. Esto nos da la siguiente definición.

### Funciones Diferenciables

Una función $f$ es **diferenciable** en $(a,b)$ si $f_x(a,b)$ y $f_y(a,b)$ existen en un conjunto abierto $D$ que contiene al punto $(a,b)$, $f_x$ y $f_y$ son continuas en $(a,b)$ y el cambio real $\Delta f$ satisface una ecuación de la forma 

$$
\Delta f=f(a+h,b+k)-f(a,b)=f_x(a,b)h+f_y(a,b)k+E(h,k)
$$

donde $E(h,k)\to 0$ cuando $h,k\to0$. Esto equivale a que 

$$
\lim_{(h,k)\to (0,0)}\frac{|\Delta f-df|}{\sqrt{h^2+k^2}}=0
$$ (diferenciable)

```{admonition} Ejercicio 
Sea 

$$
g(x,y)=\left\{\begin{array}{ccc}
\dfrac{x^3}{x^2+y^2} &  \text{si} & (x,y)\neq(0,0)\\
0 & \text{si} & (x,y)=(0,0)
\end{array}\right.
$$

1. Determine si existen $g_x(0,0)$ y $g_y(0,0)$.

2. ¿Es $g$ diferenciable en $(0,0)$? Justifique.
```

### Teoremas de Diferenciabilidad

**Teorema 1**. Si $f_x$ y $f_y$ son continuas en un conjunto abierto $D$ entonces $f$ es diferenciable en cada punto de $D$.

```{admonition} Ejercicio 
Pruebe que $f(x,y)=e^{-(x^2+y^2)}$ es diferenciable para todo $(x,y)\in\mathbb{R}^2$.
```

**Teorema 2**. Si $f$ está definida en un conjunto abierto $D$ y es diferenciable en $(a,b)\in D$ entonces $f$ es continua en $(a,b)$. Esto equivale a que si $f$ no es continua en $(a,b)$ entonces no es diferenciable en ese punto.

```{admonition} Ejercicio 
Sea 

$$
f(x,y)=\left\{\begin{array}{ccc}
\dfrac{xy}{\sqrt{x^2+y^2}} & \text{si} & (x,y)\neq(0,0)\\
0 & \text{si} & (x,y)=(0,0) 
\end{array}\right.
$$

Probar que $f$ no es diferenciable en $(0,0)$ a pesar de que $f_x(0,0)$ y $f_y(0,0)$ existen.
```