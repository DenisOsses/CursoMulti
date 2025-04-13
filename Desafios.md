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

(Desafio)=
# Desafíos

+++

## Desafío 1

```{admonition} Problemas
**1**: Sea $f:D\subseteq\mathbb{R}^2\to\mathbb{R}$ la función definida por 

$$
f(x,y)=\ln\left(\frac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}\right)
$$ 

Determine $dom(f)$ y el conjunto de curvas de nivel de $f$. Con la ayuda de un computador, grafique $f$. ¿Cuál es el $rec(f)$?

**2**: Tradicionalmente, la superficie de la Tierra se ha modelado como esfera, pero el Sistema Geodésico Mundial de 1984 (WGS-84) emplea un elipsoide como modelo más preciso. Sitúe el centro de nuestro planeta en el origen y el polo norte en el eje $Z$ positivo. La distancia del centro a los polos es $6356,523~km$ y la distancia a un punto en el Ecuador es $6378,137~km$.

a. Encuentre una ecuación de la superficie terrestre como la utilizada por el WGS-84.

b. Las curvas de igual latitud son trazas en los planos $z=k$ (o intersecciones con esos planos). ¿Cuál es la forma de estas curvas?

c. Los meridianos (curvas de igual longitud) son trazas en planos de la forma $y=mx$ (o intersecciones con esos planos). ¿Cuál es la forma de estos meridianos?

**3**: Considere la familia de superficies $S_a$ en $\mathbb{R}^3$, para el parámetro $a\in\mathbb{R}$, dada por 

$$
S_a:x^2+y^2-az^2=a+1
$$

a. Determine los valores del parámetro de modo que $S_a$ represente una superficie cuádrica real.

b. Identifique adecuadamente la superficie cuádrica correspondiente para los distintos valores de $a$.

**Fecha de Entrega**: Miércoles 19 de marzo, hasta las 18:00 hrs., en el buzón de tareas respectivo en Webc.
```

+++

### Solución

+++

**1**: El dominio es

\begin{eqnarray*}
dom(f)&=&\left\{(x,y)\in\mathbb{R}^2:\frac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}>0\right\}\\
&=&\left\{(x,y)\in\mathbb{R}^2:1-\sqrt{x^2+y^2}>0\right\}\\
&=&\left\{(x,y)\in\mathbb{R}^2:1>x^2+y^2\right\} 
\end{eqnarray*}

que corresponde al interior de un círculo de radio $1$ con centro en $(0,0)$. El conjunto de curvas de nivel es

\begin{eqnarray*}
C_k(f)&=&\left\{(x,y)\in\mathbb{R}^2:\ln\left(\frac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}\right)=k, k\in~rec(f)\right\}\\
&=&\left\{(x,y)\in\mathbb{R}^2:x^2+y^2=\left(\frac{e^k-1}{e^k+1}\right)^2, k\in~rec(f)\right\}
\end{eqnarray*}

que corresponden a circunferencias de radio $\dfrac{|e^k-1|}{e^k+1}$ con centro en $(0,0)$.

El gráfico de $f$ es

```{figure} desafio1p1.png
---
height: 300px
name: desafio1
---
Gráfico de $f$
```

A partir del gráfico, notamos que $rec(f)=[0,+\infty[$. Para comprobarlo, notamos que si 

\begin{eqnarray*}
\frac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}<1~\Rightarrow~1+\sqrt{x^2+y^2}<1-\sqrt{x^2+y^2}~\Rightarrow~\sqrt{x^2+y^2}<0
\end{eqnarray*}

lo cual no puede ocurrir, por lo que $\dfrac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}\geq1$, es decir $\ln\left(\dfrac{1+\sqrt{x^2+y^2}}{1-\sqrt{x^2+y^2}}\right)\geq0$. Además 

$$
\lim_{(x,y)\to(0,0)}f(x,y)=\ln(1)=0~~~\text{y}~~~\lim_{(x,y)\to x^2+y^2=1}f(x,y)=\ln(+\infty)=+\infty
$$ 

y como el logaritmo es continuo y creciente, probamos que $rec(f)=[0,+\infty[$.

**2**: 

**a**. Consideremos $a=6378,137=b$ (ya que en el Ecuador, el radio de la Tierra se asume constante) y $c=6356,523$. Luego, la ecuación del elipsoide, con centro en el origen, que modela la Tierra es 

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1.
$$

**b**. Intersectamos el elipsoide anterior con el plano $z=k$, donde $k\in[-c,c]$, obteniendo (con $a=b$) 

$$
\frac{x^2}{a^2}+\frac{y^2}{a^2}+\frac{k^2}{c^2}=1~\Leftrightarrow~x^2+y^2=a^2\left(1-\frac{k^2}{c^2}\right)
$$ 

que corresponden a circunferencias con centro en $(0,0,k)$ y radio $\dfrac{a}{c}\sqrt{c^2-k^2}$. Cuando $z=\pm c$ tenemos los polos norte $(0,0,c)$ y sur $(0,0,-c)$, respectivamente.

**c**. Intersectamos el elipsoide anterior con el plano $y=mx$, donde $x\in[-a,a]$, obteniendo (con $a=b$) 

$$
\frac{x^2}{a^2}+\frac{m^2x^2}{a^2}+\frac{z^2}{c^2}=1~\Leftrightarrow~\frac{x^2}{\left(\frac{a}{\sqrt{1+m^2}}\right)^2}+\frac{z^2}{c^2}=1
$$ 

que corresponden a elipses con centro en $(0,0,0)$, justamente contenidas en los planos de la forma $y=mx$.

**3**: 

**a**. Reescribimos la ecuación como

$$
x^2 + y^2 = az^2 + a + 1.
$$

Para que esto defina una superficie real, el lado derecho debe ser mayor o igual a cero para algún conjunto de valores de $(x,y,z)$. Para ello, analizamos la expresión cuadrática $f(z)=az^2 + a + 1$. 

Notamos que $f(z)<0$ si $a<0$ y su discriminante es $\Delta=-4a(a+1)<0$, es decir si $a(a+1)>0$ y esto ocurre para $a\in~]-\infty,-1[~\cup~]0,\infty[$, por lo que al intersectar con $a<0$ no da que $a\in]-\infty,-1[$. En este caso $f(z)<0$ y $x^2 + y^2 =f(z)$ daría una contradicción. Por lo tanto, debe cumplirse que $a\geq-1$ para que $S_a$ defina una superficie real.

**b**. Tenemos 4 casos:

Si $a=-1$. Obtenemos $S_{-1}:x^2+y^2+z^2=0$ que corresponde al punto $(x,y,z)=(0,0,0)$.

Si $-1<a<0$. En este caso el coeficiente $-a$ es positivo y $a+1>0$ con lo cual $S_a:x^2+y^2-az^2=a+1$ representa un elipsoide.

Si $a=0$. Obtenemos $S_0:x^2+y^2=1$ que corresponde a un cilindro.

Si $a>0$. En este caso el coeficiente $-a$ es negativo y $a+1>0$ con lo cual $S_a:x^2+y^2-az^2=a+1$ representa un hiperboloide 1 hoja.

+++

## Desafío 2

+++

```{admonition} Problemas
**1**: 

a. Si $dz$ es el error de medición en una cantidad $z$, el **error relativo** se define como $\dfrac{dz}{z}$. Demostrar que el error relativo en un producto $z = xy$ es igual a la suma de los errores relativos en los factores.

b. Se va a determinar la aceleración $g$ de la gravedad, midiendo el tiempo de caída en segundos de un cuerpo que se deja caer desde el reposo a través de una distancia fija $x$. Si el tiempo medido es $t$, se tiene $g = \dfrac{2x}{t^2}$. Si $x$ mide alrededor de $1~m$ y $t$ alrededor de $0.45~seg,$ demostrar que el error relativo en la medición de $g$ es más sensible a un error relativo en $t$ que a un error relativo en $x$.

**2**: Consideremos la gráfica de una función $f(x,y)$ como en la figura dada. Sea $(x_0, y_0)$ un punto en una curva de nivel $C$: Prueba que $\nabla f(x_0, y_0)$ es perpendicular a esta curva. 

Luego, demuestra que el plano tangente a la gráfica es el plano que 

i. contiene la recta perpendicular a $\nabla f(x_0, y_0)$ y que yace en el plano horizontal $z = f(x_0, y_0)$, y 

ii. tiene pendiente $ \left|\left|\nabla f(x_0, y_0)\right|\right|$ con respecto al plano $XY$.

(Por *pendiente* de un plano $P$, relativa al plano $XY$, entendemos la tangente del ángulo $\theta$, $0 \leq \theta \leq \pi$, entre la normal hacia arriba $\mathbf{p}$ a $P$ y el vector unitario $\mathbf{k}$.)

**3**: Imagina una región en el espacio ocupada por una barra de pan, y sea $f(a,b)$ el volumen de pan en la región donde $x < a$ e $ y < b $, como en la figura dada. Los siguientes argumentos ilustran que $ f_{xy} = f_{yx} $.

a. Considera el cuociente

$$
\frac{f(a+h,b) - f(a,b)}{h};
$$ 

el numerador es el volumen de una cierta rebanada de pan, y el denominador es su grosor. Concluye que $ f_x(a,b) $ es el área de la sección sombreada en $x = a $.

b. Explica de manera similar por qué $ f_y(a,b)$ es el área de la sección no sombreada en $y = b$.

c. Considera el cuociente

$$
\frac{f_x(a,b+k) - f_x(a,b)}{k}
$$ 

el numerador es el área de un cierto objeto, y el denominador es su ancho. Concluye que $ f_{xy}(a,b) $ es la longitud del segmento vertical en la esquina donde $ x = a, y = b $. Mediante un argumento similar, concluye que $ f_{yx}(a,b) $ también es la longitud del mismo segmento.

**Fecha de Entrega**: Miércoles 9 de abril, hasta las 18:00 hrs., en el buzón de tareas respectivo en Webc.
```

```{figure} nivel.png
---
height: 300px
name: pan
---
Gráfico del Problema 2
```

```{figure} pan.png
---
height: 300px
name: pan
---
Representación del Problema 3
```

+++

### Solución

+++

**1**:

a. Consideremos $z=f(x,y)=xy$. Entonces el diferencial es 

$$
dz=df=f_x(x,y)dx+f_y(x,y)dy=ydx+xdy~\Rightarrow~\frac{dz}{z}=\frac{y}{z}dx+\frac{x}{z}dy=\frac{dx}{x}+\frac{dy}{y}
$$

que es justamente lo que se quería demostrar.

b. Consideremos $g(x,t)=\dfrac{2x}{t^2}$. Entonces el diferencial es 

$$
dg=g_x(x,t)dx+g_t(x,t)dt=\frac{2}{t^2}dx-\frac{4x}{t^3}dt~\Rightarrow\frac{dg}{g}=\frac{2}{gt^2}dx-\frac{4x}{gt^3}dt=\frac{dx}{x}-2\frac{dt}{t}
$$

Ahora, si realizamos una medición en $x$ (manteniendo $t$ constante) entonces $dt=0$ y la proporción (para comparar) entre el error relativo en la medición de $g$ y el error relativo en la medición de $x$, en términos absolutos, es:

$$
\left|\frac{\frac{dg}{g}}{\frac{dx}{x}}\right|=1
$$

y si realizamos una medición en $t$ (manteniendo $x$ constante) entonces $dx=0$ y la proporción entre el error relativo en la medición de $g$ y el error relativo en la medición de $t$, en términos absolutos, es:

$$
\left|\frac{\frac{dg}{g}}{\frac{dt}{t}}\right|=2
$$

Por lo tanto, el error relativo en la medición de $g$ es más sensible a un error relativo en $t$ que a un error relativo en $x$, ya que en $t$ se duplica la magnitud del error con respecto a $x$.

**2**: Sea $k=f(x_0,y_0)$. Luego, la curva de nivel $C_k$ que pasa por el punto $(x_0,y_0)$ es $C_k(f)=\{(x,y)\in\mathbb{R}^2:k=f(x,y)\}$, es decir $C_k$ tiene ecuación $k=f(x,y)$. Si calculamos el diferencial de esta última ecuación y lo reescribimos usando el producto punto de vectores, obtenemos 

\begin{eqnarray*}
0=f_x(x,y)dx+f_y(x,y)dy~&\Leftrightarrow&~0=(f_x(x,y),f_y(x,y))\cdot(dx,dy)\\
&\Leftrightarrow&~0=\nabla f(x,y)\cdot(dx,dy)
\end{eqnarray*}

Además, podemos parametrizar la curva de nivel mediante $x=x(t)$ e $y=y(t)$ para $t\in~I$, y derivar mediante la regla de la cadena: $dx=x'(t)dt$ y $dy=y'(t)dt$, es decir $(dx,dy)=(x'(t)dt,y'(t)dt)=(x'(t),y'(t))dt$, donde $(x'(t),y'(t))$ corresponde al vector tangente a la curva de nivel $C_k$ en $(x(t),y(t))$. Luego, por la identidad del producto punto, el vector gradiente $\nabla f(x,y)$ es perpendicular a la curva de nivel, ya que es perpendicular al vector tangente (y, por ende, a la recta tangente de la cual es vector director).

Por otro lado, la ecuación de la recta tangente a la curva de nivel $C_k$ en $(x_0,y_0)$ (que ocurre en el instante $t_0$) tiene como vector director a $(x'(t_0),y'(t_0))$. Así, la ecuación vectorial de la recta tangente a $C_k$, en el plano $XY$, es 

\begin{eqnarray*}
x(t)&=&x_0+x'(t_0)t\\
y(t)&=&y_0+y'(t_0)t~~,~ ~ t\in~I
\end{eqnarray*}

Notamos que esta recta es perpendicular a $\nabla f(x_0,y_0)$. La curva de nivel $C_k$ ocurre cuando $k=f(x_0,y_0)$ y podemos afirmar que esta curva está contenida también en el plano $z=k=f(x_0,y_0)$. Como este plano es paralelo al plano $XY$ (o $z=0$), la ecuación vectorial de la recta tangente a $C_k$, en el plano $z=k=f(x_0,y_0)$, es 

\begin{eqnarray*}
x(t)&=&x_0+x'(t_0)t\\
y(t)&=&y_0+y'(t_0)t~~,~ ~ t\in~I\\
z(t)&=&f(x_0,y_0)
\end{eqnarray*}

es decir, la recta perpendicular yace en el plano $z=f(x_0,y_0)$. Para probar que esta recta está contenida en el plano tangente $z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$, reemplazamos la ecuación de la recta tangente:

\begin{eqnarray*}
&&z(t)=f(x_0,y_0)+f_x(x_0,y_0)(x(t)-x_0)+f_y(x_0,y_0)(y(t)-y_0)\\
&\Rightarrow& \cancelto{0}{z(t)-f(x_0,y_0)}=f_x(x_0,y_0)x'(t_0)t+f_y(x_0,y_0)y'(t_0)t\\
&\Rightarrow& 0=(f_x(x_0,y_0),f_y(x_0,y_0))\cdot (x'(t_0),y'(t_0))t
\end{eqnarray*}

lo cual es verdad para todo $t\in~I$. Por lo tanto, la recta tangente está contenida en el plano tangente.

Por último, el vector unitario $\mathbf{k}=(0,0,1)$ y la normal hacia arriba $\mathbf{p}$ del plano tangente es $\mathbf{p}=(f_x(x_0,y_0),f_y(x_0,y_0),1)$. Por álgebra, sabemos que 

\begin{eqnarray*}
\tan(\theta)&=&\frac{||\mathbf{p}\times\mathbf{k}||}{\mathbf{p}\cdot\mathbf{k}}\\
&=&\frac{||(f_x(x_0,y_0),f_y(x_0,y_0),1)\times(0,0,1)||}{(f_x(x_0,y_0),f_y(x_0,y_0),1)\cdot(0,0,1)}\\
&=&\frac{||(f_y(x_0,y_0),-f_x(x_0,y_0),0)||}{1}=\left|\left|\nabla f(x_0, y_0)\right|\right|
\end{eqnarray*}

**3**:

a. Para un valor de $b$ fijo, consideremos la función $A(x)$ que mide el área de una región plana para $x\in[a,a+h]$; entonces, por cálculo integral, sabemos que

$$
f(a+h,b)=V_b(h)=\int_a^{a+h}A(x)~dx~~,~~f(a,b)=V_b(0)=0
$$

Por el teorema del valor medio integral, existe un $a_0\in[a,a+h]$ tal que $V_b(h)=hA(a_0)$. Luego

$$
\frac{f(a+h,b) - f(a,b)}{h}=\frac{V_b(h)-\cancelto{0}{V_b(0)}}{h}=\frac{hA(a_0)}{h}=A(a_0)
$$ 

Si $h\to0$, $a_0\to a$, entonces 

$$
f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b) - f(a,b)}{h}=\lim_{h\to0}A(a_0)=A(a)
$$

b. Para un valor de $a$ fijo, consideremos la función $A(y)$ que mide el área de una región plana para $y\in[b,b+k]$; entonces, por cálculo integral, sabemos que

$$
f(a,b+k)=V_a(k)=\int_b^{b+k}A(y)~dy~~,~~f(a,b)=V_a(0)=0
$$

Por el teorema del valor medio integral, existe un $b_0\in[b,b+k]$ tal que $V_a(k)=kA(b_0)$. Luego

$$
\frac{f(a,b+k) - f(a,b)}{k}=\frac{V_a(k)-\cancelto{0}{V_a(0)}}{k}=\frac{kA(b_0)}{k}=A(b_0)
$$ 

Si $k\to0$, $b_0\to b$, entonces 

$$
f_y(a,b)=\lim_{k\to0}\frac{f(a,b+k) - f(a,b)}{k}=\lim_{k\to0}A(b_0)=A(b)
$$

c. Para un valor de $a$ fijo, consideremos la función $L(y)$ que mide la longitud de un segmento vertical. Si $y\in[b,b+k]$ entonces, por cálculo integral, sabemos que

$$
f_x(a,b+k)=A_a(k)=\int_b^{b+k}L(y)~dy~~,~~f_x(a,b)=A_a(0)=0
$$

Por el teorema del valor medio integral, existe un $b_0\in[b,b+k]$ tal que $A_a(k)=kL(b_0)$. Luego

$$
\frac{f_x(a,b+k) - f_x(a,b)}{k}=\frac{A_a(k)-\cancelto{0}{A_a(0)}}{k}=\frac{kL(b_0)}{k}=L(b_0)
$$ 

Si $k\to0$, $b_0\to b$, entonces 

$$
(f_{x})_y(a,b)=\lim_{k\to0}\frac{f_x(a,b+k) - f_x(a,b)}{k}=\lim_{k\to0}L(b_0)=L(b)
$$

Análogamente, 

$$
(f_{y})_x(a,b)=\lim_{h\to0}\frac{f_y(a+h,b) - f_y(a,b)}{k}=\lim_{h\to0}L(a_0)=L(a)
$$

Como $L(a)=L(b)$ (ya que es la longitud del segmento vertical en la esquina), concluimos que $f_{xy}(a,b)=f_{yx}(a,b)$.