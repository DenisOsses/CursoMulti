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