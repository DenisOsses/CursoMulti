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

(U1)=
# Unidad 1

+++

## Introducción

El estudio de las dimensiones espaciales es fundamental para poder comprender el universo. Por ejemplo, conectar la mecánica cuántica 
con la relatividad general ha desarrollado toda una línea de investigación física en torno a la 
[**Teoría de Cuerdas**](https://en.wikipedia.org/wiki/String_theory), donde se establecen al menos 10 dimensiones 
(una dimensión temporal, tres dimensiones espaciales ordinarias y seis dimensiones compactadas e inobservables en la práctica).

En general, ¿cómo es posible definir y comprender un sistema con $n$ dimensiones?

Hasta ahora hemos estudiado las herramientas del cálculo en 2 dimensiones trabajando sobre el plano cartesiano, pero bien sabemos 
que el mundo que nos rodea, en una perspectiva simple, se comprende en 3 dimensiones espaciales. 

```{figure} 3coordenadas.png
---
height: 200px
name: Espacio3D
---
Representación Espacio Tridimensional
```

Aún más, incluso es posible visualizar una cuarta dimensión considerando el tiempo. Por ejemplo, a partir de una línea, podemos 
construir un cuadrado, luego un cubo y finalmente un 
[**teseracto o hipercubo**](https://upload.wikimedia.org/wikipedia/commons/d/d7/8-cell.gif) 

```{figure} teseracto.png
---
height: 200px
name: Teseracto
---
Teseracto
```

Un ejemplo artístico, ¿qué tiene de especial el cuadro la 
[**Crucifixión (Corpus Hypercubus)**](https://en.wikipedia.org/wiki/Crucifixion_(Corpus_Hypercubus)) de Salvador Dalí?

```{figure} Dali_Crucifixion_hypercube.jpg
---
height: 300px
name: Crucifixión
---
Crucifixión
```

Esto nos invita a ampliar nuestras fronteras y extender, muchas veces de manera natural pero no directa, 
los conceptos de funciones, 
límites, derivadas e integrales al Cálculo Multivariable.

## Funciones de Varias Variables

### Funciones y Dominio
Una **función real** $f$ de $n$ variables es una regla que asigna el elemento 
$\mathbf{x}=(x_1,x_2,x_3,\ldots,x_n)\in D\subseteq\mathbb{R}^n$ (la preimagen) un único número real $x_{n+1}$ denotado por 
$f(\mathbf{x})$ (la imagen), es decir,

$$
f:D\subseteq\mathbb{R}^n\to\mathbb{R}, ~~x_{n+1}=f(\mathbf{x})
$$ 

El conjunto $D$ se denomina **dominio** de la función. Además, anotamos 

$$
Dom(f)=\left\{\mathbf{x}\in\mathbb{R}^n\, :\,  f(\mathbf{x})\in\mathbb{R}\right\},
$$ (Dom)

para referirnos al dominio maximal de $f$, es decir, [](Dom) es el conjunto de elementos en $\mathbb{R}^n$ para los que $f$ está 
bien definida (sin restricciones adicionales).

**Nota**. Si $n=2$ tenemos una función de 2 variables, que anotamos usualmente como $z=f(x,y)$ (en lugar de $x_3 = f(x_1,x_2))$. 

```{figure} fun2var.jpg
---
height: 200px
name: Función2Var
---
Función de 2 Variables
```

Si $n=3$ tenemos una función de 3 variables, que anotamos mediante $w=f(x,y,z)$. 

### Recorrido
El **recorrido** de una función $f$ es el conjunto de imágenes $x_{n+1}=f(\mathbf{x})$ para los cuales existe una preimagen en $D$, 
es decir, 

$$
Rec(f)=\{x_{n+1}\in\mathbb{R}: \exists~\mathbf{x}\in D~,~x_{n+1}=f(\mathbf{x})\}.
$$ (Rec)

### Gráfico 
El **gráfico** de una función $f$ es el conjunto de puntos $(\mathbf{x},x_{n+1})\in\mathbb{R}^{n+1}$ tales que $\mathbf{x}\in D$ 
y $x_{n+1}=f(\mathbf{x})$.

$$
Graf(f)=\{(\mathbf{x},x_{n+1})\in\mathbb{R}^{n+1}:\mathbf{x}\in D~\wedge~x_{n+1}=f(\mathbf{x})\}
$$ (Graf)

Si bien toda función tiene asociado un gráfico, este conjunto no siempre se puede visualizar.

**Nota**. Si $n=2$, entonces el gráfico de $f$ está es el espacio $\mathbb{R}^3$ y es llamado genéricamente **superficie**. 
(Veremos más adelante que no todas las superficies provienen de funciones).

```{figure} fun2vargraf.jpg
---
height: 200px
name: Gráfico3D
---
Representación Gráfica de una Función de 2 Variables
```

### Ejercicios

```{admonition} Ejercicio 
Considere la función $f(x,y)=4x^2+y^2$.

a. Grafique $f$ usando Python.

b. Determine $Dom(f)$.

c. Determine $Rec(f)$.
```

```{code-cell}
:tags: [Fun2D]
:tags: [hide-input]
:mystnb:
:  code_prompt_show: "Mostrar el código fuente"
:  code_prompt_hide: "Ocultar el código"
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def f(x, y):
    return 4*x**2 + y**2  # Ejemplo de función

# Crear una malla de puntos en el espacio XY
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = f(X, Y)

# Crear la figura y los ejes en 3D
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection='3d')

# Graficar la superficie
ax.plot_surface(X, Y, Z, cmap='viridis', edgecolor='none')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('f(x,y)')
ax.set_title('Gráfica de f(x,y)')

# Mostrar la gráfica
plt.show()
```

```{admonition} Ejercicio 
Sea $f(x,y)=\sqrt{1-2x^2-4y^2}$. ¿Cuál de las siguientes alternativas ilustra el $Dom(f)$?
```

```{figure} dominioelipse.jpg
---
height: 200px
name: Ejercicio2
---
Gráfico del dominio de $f$
```

**Preguntas.** ¿Es posible determinar el recorrido de $f$? o incluso, ¿cómo es su gráfico? 

## Visualización del Gráfico de Funciones de 2 Variables

Para estudiar y realizar una representación gráfica de una superficie en $\mathbb{R}^3$ son importantes 3 elementos:

1. Las curvas de nivel.
2. Las intersecciones con los planos coordenados.
3. Las trazas (intersecciones con planos paralelos a los planos coordenados).

Definimos estos 3 elementos a continuación:

### Curvas de nivel

Sean $f:D\subseteq\mathbb{R}^n\to\mathbb{R}$ y $k\in\mathbb{R}$ (fijo), el **conjunto de nivel** $k$ de $f$, denotado por $N_k(f)$, 
es el conjunto definido por: 

$$
N_k(f)=\{\mathbf{x}\in D\,:\, f(\mathbf{x})=k\}
$$ (ConjNivel)

**Observación.** Para que exista el conjunto de nivel $k$ de $f$, necesariamente $k$ debe pertenecer al recorrido $f$. 
Dicho de otro modo, si $k$ está en el recorrido de $f$, el conjunto de nivel $k$ de $f$ corresponde al conjunto de preimagenes 
de $k$ bajo la función $f$.

**Caso** $n=2$. Sea $f:D\subseteq\mathbb{R}^2\to\mathbb{R}$, el conjunto de nivel $k$ de $f$, corresponde a una curva en el plano 
denominada **curva de nivel** $k$ de $f$. Se denota $C_k(f)$ o $C_k$ y está dada por:

$$
C_k=\{(x,y)\in D\,:\,f(x,y)=k\}
$$ (CurvaNivel)

**Observación.** Note que $z=k$ corresponde a un plano paralelo al plano $XY$, que se encuentra a distancia $|k|$ de este.

Las curvas de nivel se grafican en el plano $XY$ y una colección de ellas se denomina **mapa de contorno**.

```{figure} curvanivel.jpg
---
height: 300px
name: curvanivel
---
Mapa de contorno de una función $f$
```

**Nota:** Podemos visualizar las curvas de nivel de una función utilizando la siguiente aplicación de 
[**Geogebra**](https://www.geogebra.org/m/jy7znQM5)

En Python:

```{code-cell}
:tags: [Fun2D]
:tags: [hide-input]
:mystnb:
:  code_prompt_show: "Mostrar el código fuente"
:  code_prompt_hide: "Ocultar el código"
import matplotlib.pyplot as plt
import numpy as np

# Grilla de datos
X, Y = np.meshgrid(np.linspace(-2, 2, 50), np.linspace(-2, 2, 50))

# Función
Z = X**2 + Y**2

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

# Gráfico de la superficie 3D
ax.plot_surface(X, Y, Z, cmap='Spectral_r', alpha=1)

# Contornos
ax.contour(X, Y, Z, linewidths=2, colors='black', offset=0)
ax.contourf(X, Y, Z, cmap='Spectral_r', offset=0, alpha=0.75)

# Límites en el eje Z
ax.set_zlim(0, 4)

plt.show()
```

**Nota**. Podemos observar mapas de contornos aplicados a diversas zonas geográficas en la aplicación [**contourmap**](https://contourmap.app/)

### Intersecciones con los planos coordenados

 Las **intersecciones con los planos coordenados** de la gráfica de $z=f(x,y)$ son curvas en los planos $XY$, $XZ$ e $YZ$, que se obtienen reemplazando $z=0$, $y=0$ y $x=0$ en $z=f(x,y)$, respectivamente.

### Trazas

Las **trazas** son las curvas de intersección de la superficie $z=f(x,y)$ con planos paralelos a los planos coordenados.

```{admonition} Ejercicio 
Considere la función $f:D\subseteq\mathbb{R}^2 \to \mathbb{R}$ dada por 

$$
f(x,y)=\sqrt{1-2x^2-4y^2}
$$
    
Describa:

a. Las curvas de nivel $C_{0}$, $C_1$ y  $C_{-1}$.

b. El conjunto de curvas de nivel. 

c. Las intersecciones con los planos coordenados.

d. A qué tipo de curva pertenecen las trazas.

e. El recorrido de $f$.
```

El ejercicio anterior plantea la superficie $z=\sqrt{1-2x^2-4y^2}$, que es equivalente a 

$$
z^2+2x^2+4y^2=1~~,~ z\geq 0
$$

Este tipo de ecuaciones pertenece a grupo más general conocido como superficies cuádricas que estudiaremos la próxima clase.

`````{admonition} Ejercicio Propuesto
:class: warning
Considere la función $f(x,y)=\dfrac{x^2+y^2-1}{y^2}$.

a. Determine el dominio de $f$.

b. Esboce el gráfico del dominio de $f$.

c. Identifique y dibuje las curvas de nivel $C_{-1}, C_0$ y $C_1$.

d. Describa el conjunto de curvas de nivel.

e. Determine el recorrido de $f$.

f. Describa las trazas para $y=1$ e $y=-1.$
`````