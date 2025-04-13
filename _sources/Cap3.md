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

## Regla de la Cadena

Si $w=f(x,y)$ tiene derivadas parciales continuas $f_x, f_y$ y si $x=x(t)$, $y=y(t)$ son funciones diferenciables de $t$, entonces la composición $w=f(x(t),y(t))$ es una función diferenciable de $t$ y la derivada de $f$ (que es una función de $t$) tiene la expresión 

$$
\frac{df}{dt}=f_x(x(t),y(t))\cdot x'(t)+f_y(x(t),y(t))\cdot y'(t)
$$ 

o, equivalentemente 

$$
\frac{dw}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}.
$$

Esquemáticamente la relación entre las variables y sus derivadas parciales correspondientes es:

```{figure} cadena1.png
---
height: 250px
name: cadena
---
Regla de la Cadena para $w=f(x,y)$, con $x,y$ funciones de $t$
```

```{admonition} Ejercicio 
Si $z=f(x,y)=y^2\sqrt{x+1}$ donde $x=x(t)=t^3-t$ e $y=y(t)=t^2-2t+4$, calcule $\dfrac{dz}{dt}.$
```

Podemos generalizar la regla de la cadena: si $w=f(x_1,\ldots,x_n)$ es una función de $n$ variables y cada $x_i=x_i(t_1,t_2,\ldots,t_m)$ es una función de $m$ variables, entonces $f$ es una función de $t_1,t_2,\ldots,t_m$ y 

$$
\frac{\partial w}{\partial t_i}=\frac{\partial f}{\partial x_1}\frac{\partial x_1}{\partial t_i}+\frac{\partial f}{\partial x_2}\frac{\partial x_2}{\partial t_i}+\cdots+\frac{\partial f}{\partial x_n}\frac{\partial x_n}{\partial t_i}
$$ 

para cada $i=1,2,\ldots,m$.

Como caso particular, expresamos la regla de la cadena para $w=f(x,y,z,t)$ con $x=x(u,v)$, $y=y(u,v)$, $z=z(u,v)$ y $t=t(u,v)$ 

\begin{eqnarray*} 
\frac{\partial w}{\partial u}&=&\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial u}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial u}+\frac{\partial f}{\partial t}\frac{\partial t}{\partial u}\\ 
\frac{\partial w}{\partial v}&=&\frac{\partial f}{\partial x}\frac{\partial x}{\partial v}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial v}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial v}+\frac{\partial f}{\partial t}\frac{\partial t}{\partial v}
\end{eqnarray*} 

El siguiente diagrama de árbol explica las relaciones entre las variables dependientes e independientes involucradas en esta regla:

```{figure} cadena2.png
---
height: 250px
name: cadena2
---
Regla de la Cadena para $w=f(x,y,z,t)$, con $x,y,z,t$ funciones de $u,v$
```

```{admonition} Ejercicio 
Considere la función $P(u,v,w)=\sqrt{u^2+v^2+w^2}$, con $u=xe^y$, $v=ye^x$, $w=e^{xy}$. Determine $P_x$ y $P_y$ cuando $x=0$ e $y=2$.
```

`````{admonition} Ejercicio Propuesto
:class: warning
Si $z=f(x,y)$, con $x=r\cos(\theta)$ e $y=r\sin(\theta)$:

a. Determine $z_r$ y $z_\theta$.

b. Demuestre que: $\displaystyle\left(\frac{\partial z}{\partial x}\right)^2+\left(\frac{\partial z}{\partial y}\right)^2=\left(\frac{\partial z}{\partial r}\right)^2+\frac{1}{r^2}\left(\frac{\partial z}{\partial \theta}\right)^2$

c. Probar que: $\displaystyle\frac{\partial^2 z}{\partial x^2}+\frac{\partial^2 z}{\partial y^2}=\frac{\partial^2 z}{\partial r^2}+\frac{1}{r^2}\frac{\partial^2 z}{\partial \theta^2}+\frac{1}{r}\frac{\partial z}{\partial r}$
`````

## Derivadas Parciales de Orden Superior

Si $z=f(\mathbf{x})$ es una función de $n$ variables, entonces sus derivadas parciales $f_{x_i}$ también son funciones de $n$ variables, de modo que podemos derivarlas parcialmente: $(f_{x_i})_{x_j}=\frac{\partial^2 f}{\partial x_j\partial x_i}$, $i,j=1,2,\ldots,n$. Estas derivadas son conocidas como **segundas derivadas parciales** de $f$. En particular, en el caso de 2 variables, escribimos 

$$
f_{xx}=\frac{\partial^2f}{\partial x^2}~~,~~f_{xy}=\frac{\partial^2f}{\partial y\partial x}
$$ 
$$
f_{yy}=\frac{\partial^2f}{\partial y^2}~~,~~ f_{yx}=\frac{\partial^2f}{\partial x\partial y}
$$

```{admonition} Ejercicio 
Sea $f(x,y)=\ln\left(\dfrac{1}{\sqrt{x^2+y^2}}\right)$. Calcule todas las derivadas parciales de segundo orden de $f$ y pruebe que $f_{xx}+f_{yy}=0$.
```

### Teorema de Clairaut (o de Schwarz (derivadas cruzadas))

Suponga que $f$ es una función definida en un conjunto abierto $D$ que contiene el punto $(a,b)$. Si las funciones $f_{xy}$ y $f_{yx}$ son ambas continuas en $D$, entonces 

$$
f_{xy}(a,b)=f_{yx}(a,b).
$$

## Teorema de la Función Implícita (TFI)

Existen expresiones como 

$$
\ln(xyz)+zx+\sin(x+z+y)=5
$$ 

donde la variable $z$ no puede ser despejada explícitamente en términos de $x$ e $y$. ¿Bajo qué condiciones es posible hacerlo?

### TFI

Sea $F(x,y,z)=0$ una expresión definida en $D$ y $(x_0,y_0,z_0)$ un punto en $D$. Si se cumple:

1. $F(x_0,y_0,z_0)=0$.

2. $F_x(x,y,z)$, $F_y(x,y,z)$ y $F_z(x,y,z)$ son continuas en $D$.

3. $F_z(x_0,y_0,z_0)\neq0$.

Entonces existe un disco abierto $U$ con centro en $(x_0,y_0)$ tal que $z=f(x,y)$ y $z_0=f(x_0,y_0)$. Además 

$$
\frac{\partial z}{\partial x}(x,y)=-\frac{F_x}{F_z}~~,~~\frac{\partial z}{\partial y}(x,y)=-\frac{F_y}{F_z}
$$ 

para todo $(x,y)\in U.$ 

```{figure} TFI.png
---
height: 250px
name: TFI
---
Teorema de la Función Implícita
```

```{admonition} Ejercicio 
Dada $F(x,y,z)=x^2+y^2+z^2+xy+2z-1$

1. Determine si $F(x,y,z)=0$ define a $z=f(x,y)$ alrededor de $P(0,-1,0)$.

2. Encuentre $z_x$ y $z_y$ en $(0,-1)$.

3. Calcule $z_{xx}$.
```

```{admonition} Ejercicio 
Considere $F(x,y,z)=xyz+\ln(xyz)-z$. Demuestre que $z$ puede definirse como una función implícita de $(x,y)$ alrededor del punto $(1,1,1)$. Encuentre la ecuación del plano tangente a $z=f(x,y)$ en $(1,1,1)$.
```

## Derivada Direccional

Queremos encontrar la tasa de cambio de $z$ en $(x_0,y_0)$ en la dirección de cualquier **vector unitario** $\mathbf{u}=(a,b)$, como en la figura

```{figure} direccional.png
---
height: 300px
name: direccional
---
Derivada Direccional de $f$ en la dirección de $\mathbf{u}$
```

Observamos que 

$$
\frac{\Delta z}{h}=\frac{f(x_0+ha,y_0+hb)-f(x_0,y_0)}{h}
$$

Si hacemos $h\to 0$, obtenemos la tasa de cambio de $z$ (con respecto a la distancia) en la dirección de $\mathbf{u}$, que es llamada **derivada direccional** de $f$ en la dirección de $\mathbf{u}$.

### Definición

La **derivada direccional** de $f$ en $P(x_0,y_0)$ en la dirección del vector unitario $\mathbf{u}=(a,b)$ es 

$$
D_{\mathbf{u}}f(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+ha,y_0+hb)-f(x_0,y_0)}{h}
$$ (DefDireccional)

si tal límite existe.

```{admonition} Ejercicio 
Calcule la derivada direccional de $f(x,y)=x^2+y^2$ en $P(1,1)$ en la dirección de $\mathbf{v}=(1,2)$.
```

Podemos visualizar la derivada direccional mediante la siguiente aplicación de (Geogebra)[https://www.geogebra.org/m/hUtCF2Wb].

### Teorema de Cálculo de la Derivada Direccional

Si $f$ es una función diferenciable de $x$ e $y$, entonces $f$ tiene una derivada direccional en la dirección de cualquier vector $\mathbf{u}=(a,b)$ y 

$$
D_{\mathbf{u}}f(x,y)=f_x(x,y)a+f_y(x,y)b=\nabla f\cdot \mathbf{u}
$$ (Direccional)

donde $\nabla f(x,y)=(f_x(x,y),f_y(x,y))$ es el **vector gradiente** de $f$.

```{admonition} Ejercicio 
Determine la derivada direccional de $f(x,y)=4x^2-xy-2y^2$ en $P(2,-1)$ y en la dirección de $\mathbf{v}=(4,3)$.
```

### Máximo Valor de la Derivada Direccional

Suponga que $f$ es una función diferenciable de 2 o 3 variables. El valor máximo de la derivada direccional $D_{\mathbf{u}}f$ es $||\nabla f||$ y ocurre cuando $\mathbf{u}$ tiene la misma dirección que el vector gradiente $\nabla f$. Análogamente, el valor mínimo de la derivada direccional $D_{\mathbf{u}}f$ es $-||\nabla f||$ y ocurre cuando $\mathbf{u}$ tiene la misma dirección que el vector gradiente $-\nabla f$.

```{admonition} Ejercicio 
La temperatura $T$ en un punto $(x,y,z)$ en el espacio es inversamente proporcional al cuadrado de la distancia de $(x,y,z)$ al origen. Sabemos que $T(0,0,1)=500$. Encuentre la tasa de cambio de la temperatura $T$ en $P(2,3,3)$ en la dirección de $\mathbf{v}=(3,1,1)$. ¿En cuál dirección a partir de $(2,3,3)$ la temperatura aumenta con mayor rapidez?. En $(2,3,3)$, ¿cuál es la máxima tasa de cambio de $T$?.
```

### Vector Gradiente y Plano Tangente

Consideremos la superficie de nivel $F(x,y,z)=k$ que pasa por el punto $P_0(x_0,y_0,z_0)$. Hacemos $x=x(t)$, $y=y(t)$, $z=z(t)$ y derivamos la superficie de nivel, con respecto a $t$, usando la regla de la cadena. Así: 

```{figure} PlanoTangenteSup.png
---
height: 220px
name: Plano
---
Plano Tangente a una Superficie $F(x,y,z)=0$
```

$$
F_x(P_0)x'(t_0)+F_y(P_0)y'(t_0)+F_z(P_0)z'(t_0)=0~\Rightarrow
$$

$$
(F_x(P_0),F_y(P_0),F_z(P_0))\cdot (x'(t_0),y'(t_0),z'(t_0))=0
$$

es decir, el vector gradiente de $F$ es perpendicular con (todas las rectas tangentes a) la superficie de nivel $F(x,y,z)=k$ en $P_0(x_0,y_0,z_0)$. Luego, $\nabla F(P_0)$ es perpendicular al plano que contiene todas estas rectas tangentes $\ldots$ ¡al plano tangente!

De lo anterior se desprende lo siguiente:

1. $\nabla F(P_0)$ es **perpendicular a las superficies de nivel** $F(x,y,z)=k$ en $P_0(x_0,y_0,z_0)$.

2. $\nabla F(P_0)$ es un vector normal (perpendicular) al plano tangente a la superficie $F(x,y,z)=k$ en el punto $P_0(x_0,y_0,z_0)$. La ecuación de tal plano es 

$$
\nabla F(P_0)\cdot (x-x_0,y-y_0,z-z_0)=0~~~~\text{o}
$$ 

$$
F_x(P_0)(x-x_0)+F_y(P_0)(y-y_0)+F_z(P_0)(z-z_0)=0
$$

3. Si $z=0$, tenemos que $\nabla F(P_0)$ es un vector **perpendicular a las curvas de nivel** $F(x,y)=k$ en el punto $P_0(x_0,y_0)$.

```{figure} curvanivel.png
---
height: 220px
name: CurvaGradiente
---
Relación entre el Vector Gradiente y una Curva Nivel
```

```{admonition} Ejercicio 
Encuentre la curva de nivel de $f(x,y)=-x^2+y^2$ que pasa por $P(2,3)$. Grafique el gradiente en el punto $P$, ¿qué observa? 
```